import { drizzle } from 'drizzle-orm/postgres-js';
import { pgTable,uuid, serial, varchar,text,doublePrecision,integer, date } from 'drizzle-orm/pg-core';
import { eq } from 'drizzle-orm';
import postgres from 'postgres';
import bcrypt from 'bcrypt';

// Optionally, if not using email/pass login, you can
// use the Drizzle adapter for Auth.js / NextAuth
// https://authjs.dev/reference/adapter/drizzle

let client = postgres(`${process.env.POSTGRES_URL!}?sslmode=require`);

export const db = drizzle(client);


export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  name:varchar('name', { length: 64 }),
  email: varchar('email', { length: 64 }),
  password: varchar('password', { length: 64 }),
});

export type User = typeof users.$inferSelect;


export const services = pgTable('services', {
  id: serial('id').primaryKey(),
  title:varchar('title', { length: 64 }),
  description: text('description'),
  amount: doublePrecision('amount'),
  recurring: integer('recurring'),
  repeat: integer('repeat'),
  status: varchar('status',{ enum: ['active', 'inactive']}),
  image_url: varchar('image_url', { length: 255 }),
  date: date('date').defaultNow(),
});

export type Service = typeof services.$inferSelect;



export const tasks = pgTable('tasks', {
  id: serial('id').primaryKey(),
  title: varchar('title', { length: 64 }),
  description: text('description'),
  status:varchar('status',{ enum: ['queue','paused','inprogress','readyforreview','completed','closed']}),
  priority:varchar('priority',{ enum: ['low','medium','heigh']}),
  service_type:varchar('service_type', { length: 255 }),
  service_category:varchar('service_category', { length: 255 }),
  task_type:varchar('task_type', { length: 255 }),
  task_service:varchar('task_service', { length: 255 }),
  task_plateform:varchar('task_plateform', { length: 255 }),
  task_speclization:varchar('task_speclization', { length: 255 }),
  submitted:date('submitted'),
  duedate:date('duedate'),
  date: date('date').defaultNow(),
  created_by:uuid("created_by")
  .notNull()
  .references(() => users.id, { onDelete: "cascade" })
});


export type Task = typeof tasks.$inferSelect;



export const assignedTo = pgTable('assignedTo', {
  id: serial('id').primaryKey(),
  taskId:uuid("taskId")
  .notNull()
  .references(() => tasks.id, { onDelete: "cascade" }),
  userId:uuid("userId")
  .notNull()
  .references(() => users.id, { onDelete: "cascade" }),
});

export type Assigned = typeof assignedTo.$inferSelect;




export async function getServices() {
  return await db.select().from(services).where(eq(services.status, 'active'));
}

export async function getService(id:number) {
  return await db.select().from(services).where(eq(services.id, id));
}

export async function createSrevice(title:string,description: string, amount: number,recurring:number,repeat:number,status:'active'|'inactive',image_url:string) {
  return await db.insert(services).values({ title,description,amount,recurring,repeat,status,image_url }); 
}



export async function updateService(id:number,title:string,description: string, amount: number,recurring:number,repeat:number,status:'active'|'inactive',image_url:string){
  
  return await db.update(services).set({ 
                                        title:title,
                                        description:description,
                                        amount:amount,
                                         recurring:recurring,
                                        repeat:repeat,
                                      status:status,
                                    image_url:image_url
                                  }).where(eq(services.id,id));
 }




export async function getUser(email: string) {
  return await db.select().from(users).where(eq(users.email, email));
}




export async function createUser(name:string,email: string, password: string) {

  const hash = await bcrypt.hash(password, 10);

  return await db.insert(users).values({ name, email, password: hash });
}