import "server-only";

import { CreateTaskDto } from "@/use-cases/tasks/types";

import { db } from "@/db";
import { tasks } from "@/db/schema";

export async function createTask(task: CreateTaskDto): Promise<void> {
  await db.insert(tasks).values(task);
}
