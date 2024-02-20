import "server-only";

import { db } from "@/db";
import { tasks } from "@/db/schema";
import { eq, and } from "drizzle-orm";
import { toDtoMapper } from "./get-task.persistence";
import { TaskDto } from "@/use-cases/tasks/types";

export async function getUserTask(
  createdBy: string,
): Promise<TaskDto | undefined> {
  const foundItem = await db.query.tasks.findFirst({
    where: and(eq(tasks.created_by, createdBy)),
  });

  if (!foundItem) {
    return undefined;
  }

  return toDtoMapper(foundItem);
}
