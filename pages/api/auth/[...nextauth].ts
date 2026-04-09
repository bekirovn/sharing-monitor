import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: (process.env.GOOGLE_ID as string),
      clientSecret: (process.env.GOOGLE_SECRET as string),
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    signIn: async (data:any) => {
      const allowedEmails = (await prisma.users.findMany()).map((u) => u.email);
      if (allowedEmails.includes(data.user.email)) {
        return true;
      }
      return false;
    },
  },
};
export default NextAuth(authOptions);
