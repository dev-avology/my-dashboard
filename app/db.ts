import { drizzle } from 'drizzle-orm/postgres-js';
import { pgTable, serial, varchar,text,doublePrecision,integer, date } from 'drizzle-orm/pg-core';
import { eq } from 'drizzle-orm';
import postgres from 'postgres';
import bcrypt from 'bcrypt';

// Optionally, if not using email/pass login, you can
// use the Drizzle adapter for Auth.js / NextAuth
// https://authjs.dev/reference/adapter/drizzle

let client = postgres(`${process.env.POSTGRES_URL!}?sslmode=require`);
let db = drizzle(client);

let users = pgTable('users', {
  id: serial('id').primaryKey(),
  name:varchar('name', { length: 64 }),
  email: varchar('email', { length: 64 }),
  password: varchar('password', { length: 64 }),
});



let services = pgTable('services', {
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