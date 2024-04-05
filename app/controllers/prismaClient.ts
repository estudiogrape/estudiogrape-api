import { PrismaClient } from "../../prisma/generated/client";

const prismaClient = new PrismaClient({
  log: ["error", "info", "query", "warn"],
});

export { prismaClient };
