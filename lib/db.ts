import "dotenv/config";

// import prisma adapter postgres
import { PrismaPg } from '@prisma/adapter-pg';

// import prisma client
import { PrismaClient } from "./generated/prisma/client";

// ensure only a single instance of prisma client is created
const globalForPrisma = global as unknown as {
  prisma: PrismaClient;
};

const connectionString = `${process.env.DATABASE_URL}`

// initialize prisma adapter
const adapter = new PrismaPg({connectionString});

// initialize prisma client
const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    adapter,
  });

export { prisma };