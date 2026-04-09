// pages/api/cases/index.ts
import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      const total = await prisma.cases.count();
      const lastTwo = await prisma.cases.findMany({
        take: 2,
        orderBy: {
          StartDate: "desc",
        },
      });
      //   console.log(lastTwo);
      res.status(200).json({ total, lastTwo });
    } catch (error) {
      res.status(500).json({ message: error });
    }
  } else {
    res.status(405).json({ message: "Method not allowed." });
  }
}
