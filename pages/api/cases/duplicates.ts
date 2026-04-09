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
      const cases = await prisma.cases.findMany();
      // Function to find duplicates and group their IDs
      const findDuplicates = (cases: any[]) => {
        const duplicatesMap = new Map();

        cases.forEach((item) => {
          // Create a unique identifier by combining Title and Description
          const identifier = `${item.Title}::${item.Description}`;

          // Add the item's ID to the map
          if (!duplicatesMap.has(identifier)) {
            duplicatesMap.set(identifier, []);
          }
          duplicatesMap.get(identifier).push(item.Id);
        });

        // Convert the map to an array of objects, only including entries with multiple IDs
        const duplicates = Array.from(duplicatesMap.entries())
          .filter(([_, ids]) => ids.length > 1)
          .map(([identifier, ids]) => {
            const [title, description] = identifier.split("::");
            return { title, description, ids };
          });

        return duplicates;
      };

      // Find duplicates
      const duplicates = findDuplicates(cases);
      res.status(200).json(duplicates);
    } catch (error) {
      res.status(500).json({ message: "Error fetching cases." });
    }
  } else {
    res.status(405).json({ message: "Method not allowed." });
  }
}
