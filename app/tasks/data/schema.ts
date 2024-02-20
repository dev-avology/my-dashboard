import { z } from "zod"

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const taskSchema = z.object({
  id: z.string(),
  title: z.string(),
  description:z.string(),
  status: z.string(),
  priority: z.string(),
  service_type:z.string(),
  service_category:z.string(),
  task_type:z.string(),
  task_service:z.string(),
  task_plateform:z.string(),
  task_speclization:z.string(),
  submitted:z.string(),
  duedate:z.string(),
  date: z.string(),
  created_by:z.string(),
})

export type Task = z.infer<typeof taskSchema>


