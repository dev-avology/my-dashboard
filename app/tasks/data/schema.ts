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
  submitted:z.date().nullable(),
  duedate:z.date(),
  date: z.date(),
  created_by:z.string(),
})

export type Task = z.infer<typeof taskSchema>



export const ServiceSchema = z.object({
     id: z.string(),
    title:z.string(),
    description: z.string(),
    amount: z.number(),
    recurring: z.number(),
    repeat: z.number(),
    status: z.string(),
    image_url: z.string().nullable(),
    date: z.date(),
})

export type Service = z.infer<typeof ServiceSchema>





