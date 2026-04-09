// pages/api/cases/[id].ts
import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient, cases } from "@prisma/client";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const caseId = parseInt(req.query.id as string);

  if (req.method === "GET") {
    await readCase(caseId, req, res);
  } else if (req.method === "POST" && caseId === 0) {
    await createCase(req, res);
  } else if (req.method === "POST" && caseId > 0) {
    await updateCase(caseId, req, res);
  } else if (req.method === "PUT") {
    await updateCase(caseId, req, res);
  } else if (req.method === "DELETE") {
    await deleteCase(caseId, req, res);
  } else {
    res.status(405).json({ message: "Method not allowed." });
  }
}

async function readCase(
  caseId: number,
  req: NextApiRequest,
  res: NextApiResponse
) {
  //const session = await getServerSession(req, res, authOptions);
  //console.log(session);
  //if (session) {
  try {
    const c = await prisma.cases.findFirst({
      include: {
        categories: true,
        attackSources: true,
        attackTargets: true,
        CaseImages: true,
      },
      where: {
        Id: caseId,
      },
    });
    res.status(200).json(c);
  } catch (error) {
    res.status(500).json({ message: "Error getting the case." });
  }
  // } else {
  //   // Not Signed in
  //   res.status(401).json({ message: "Not Signed in" });
  // }
}

async function createCase(req: NextApiRequest, res: NextApiResponse) {
  const session = await getServerSession(req, res, authOptions);
  if (!session) {
    res.status(401).json({ message: "Not Signed in" });
  }
  const { Id, ...values } = JSON.parse(req.body) as cases;
  try {
    const createdCase = await prisma.cases.create({
      data: values,
    });
    res.status(200).json(createdCase);
  } catch (error) {
    res.status(500).json({
      message: "Error creating the case.\n" + JSON.stringify(error, null, 2),
    });
  }
}

async function updateCase(
  caseId: number,
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getServerSession(req, res, authOptions);
  if (!session) {
    res.status(401).json({ message: "Not Signed in" });
  }
  const { Id, ...values } = JSON.parse(req.body) as cases;
  try {
    const updatedCase = await prisma.cases.update({
      where: { Id: caseId },
      data: values,
    });
    res.status(200).json(updatedCase);
  } catch (error) {
    res.status(500).json({
      message: "Error updating the case.\n" + JSON.stringify(error, null, 2),
    });
  }
}

async function deleteCase(
  caseId: number,
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getServerSession(req, res, authOptions);
  if (!session) {
    // Not Signed in
    res.status(401).json({ message: "Not Signed in" });
  }
  try {
    await prisma.cases.delete({
      where: { Id: caseId },
    });
    res.status(200).json({ message: "Case deleted successfully." });
  } catch (error) {
    res.status(500).json({ message: "Error deleting the case." });
  }
}
