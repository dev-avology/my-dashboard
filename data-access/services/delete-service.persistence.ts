import "server-only";

import { db } from "@/db";
import { tasks } from "@/db/schema";
import { eq } from "drizzle-orm";
import { TaskId } from "./get-service.persistence";

export async function deleteItem(taskId: TaskId): Promise<void> {
  await db.delete(tasks).where(eq(tasks.id, taskId));
}
