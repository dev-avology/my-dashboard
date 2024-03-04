import "server-only";

import { db } from "@/db";
import { toDtoMapper } from "./get-service.persistence";
import { ServiceDto } from "@/use-cases/services/types";
import { Service, ServiceSchema } from "@/db/schema";


export async function getServices(): Promise<ServiceDto[]> {
  const tasks = await db.query.Service.findMany();
  return tasks.map(toDtoMapper);
}
