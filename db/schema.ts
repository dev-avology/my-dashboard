import { pgTable,uuid, serial, varchar,text,doublePrecision,integer, date } from 'drizzle-orm/pg-core';


export const users = pgTable('users', {
    id:uuid("id").defaultRandom().primaryKey().notNull(),
    name:varchar('name', { length: 64 }).notNull(),
    email: varchar('email', { length: 64 }).notNull(),
    password: varchar('password', { length: 64 }).notNull(),
    role: varchar('role',{ enum: ['admin', 'customer']}).notNull()
  });
  
  export type User = typeof users.$inferSelect;
  
  
  export const Service = pgTable('services', {
    id:  uuid("id").defaultRandom().primaryKey().notNull(),
    title:varchar('title', { length: 64 }).notNull(),
    description: text('description').notNull(),
    amount: doublePrecision('amount').notNull(),
    recurring: integer('recurring').notNull(),
    repeat: integer('repeat').notNull(),
    status: varchar('status',{ enum: ['active', 'inactive']}).notNull(),
    image_url: varchar('image_url', { length: 255 }),
    date: date('date').defaultNow().notNull(),
  });
  
  export type ServiceSchema = typeof Service.$inferSelect;
  
  
  
  export const tasks = pgTable('tasks', {
    id: uuid("id").defaultRandom().primaryKey().notNull(),
    title: varchar('title', { length: 64 }).notNull(),
    description: text('description').notNull(),
    status:varchar('status',{ enum: ['queue','paused','inprogress','readyforreview','completed','closed']}).notNull(),
    priority:varchar('priority',{ enum: ['low','medium','heigh']}).notNull(),
    service_type:varchar('service_type', { length: 255 }).notNull(),
    service_category:varchar('service_category', { length: 255 }).notNull(),
    task_type:varchar('task_type', { length: 255 }).notNull(),
    task_service:varchar('task_service', { length: 255 }).notNull(),
    task_plateform:varchar('task_plateform', { length: 255 }).notNull(),
    task_speclization:varchar('task_speclization', { length: 255 }).notNull(),
    submitted:date('submitted').defaultNow().notNull(),
    duedate:date('duedate').defaultNow().notNull(),
    date: date('date').defaultNow().notNull(),
    created_by:uuid("created_by")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" })
  });
  
  
  export type Task = typeof tasks.$inferSelect;
  
  
  
  export const assignedTo = pgTable('assignedTo', {
    id:uuid("id").defaultRandom().primaryKey().notNull(),
    taskId:uuid("taskId")
    .notNull()
    .references(() => tasks.id, { onDelete: "cascade" }),
    userId:uuid("userId")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  });
  
  export type Assigned = typeof assignedTo.$inferSelect;
  
  