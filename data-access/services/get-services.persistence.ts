import "server-only";

import { db } from "@/db";
import { toDtoMapper } from "./get-service.persistence";
import { TaskDto } from "@/use-cases/tasks/types";

export async function getTasks(): Promise<TaskDto[]> {
  const tasks = await db.query.tasks.findMany();
  return tasks.map(toDtoMapper);
}
