import "server-only";

import { CreateServiceDto } from "@/use-cases/services/types";

import { db } from "@/db";
import { Service } from "@/db/schema";

export async function createService(task: CreateServiceDto): Promise<void> {
  await db.insert(Service).values(task);
}
