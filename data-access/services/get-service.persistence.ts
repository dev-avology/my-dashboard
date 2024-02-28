import "server-only";

import { db } from "@/db";
import { Task, tasks } from "@/db/schema";
import { eq } from "drizzle-orm";
import { TaskDto } from "@/use-cases/tasks/types";

export type TaskId = number;

export function toDtoMapper(task: Task) {
  return {
    id: task.id,
    title: task.title,
    description: task.description,
    status: task.status,
    priority: task.priority,
    service_type:task.service_type,
    service_category:task.service_category,
    task_type:task.task_type,
    task_service:task.task_service,
    task_plateform:task.task_plateform,
    task_speclization:task.task_speclization,
    submitted:task.submitted,
    duedate:task.duedate,
    date: task.date,
    created_by:task.created_by
  };
}

export async function getTask(taskId: number): Promise<TaskDto> {
  const foundTask = await db.query.tasks.findFirst({
    where: eq(tasks.id, taskId),
  });

  if (!foundTask) {
    throw new Error("could not find item");
  }

  return toDtoMapper(foundTask);
}
