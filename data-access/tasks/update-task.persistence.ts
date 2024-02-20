import "server-only";

import { db,tasks } from "@/app/db";
import { eq } from "drizzle-orm";
import { TaskDto } from "@/use-cases/tasks/types";

export async function updateTask(task: TaskDto): Promise<void> {
  await db.update(tasks).set(task).where(eq(tasks.id, task.id));
}
