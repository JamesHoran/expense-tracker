import { prisma } from "../lib/prisma";

export async function getExpenses() {
  try {
    const expenses = prisma.expense.findMany()
    return expenses;
  } catch {
    console.error("Failed to fetch expenses");
  }
}