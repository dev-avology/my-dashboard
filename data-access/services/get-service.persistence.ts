import "server-only";

import { db } from "@/db";
import { Service, ServiceSchema } from "@/db/schema";
import { eq } from "drizzle-orm";
import { ServiceDto } from "@/use-cases/services/types";

export type ServiceId = string;

export function toDtoMapper(service: ServiceSchema) {
  return {
    id: service.id,
    title: service.title,
    description: service.description,
    amount:service.amount,
    recurring:service.recurring,
    repeat:service.repeat,
    image_url:service.image_url,
    status: service.status,
    date: service.date,
  };
}

export async function getService(serviceId: string): Promise<ServiceDto> {
  const foundTask = await db.query.Service.findFirst({
    where: eq(Service.id, serviceId),
  });

  if (!foundTask) {
    throw new Error("could not find item");
  }

  return toDtoMapper(foundTask);
}
