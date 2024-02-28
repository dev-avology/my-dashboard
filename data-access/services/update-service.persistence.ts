import "server-only";

import { db } from "@/db";
import { Service } from "@/db/schema";
import { eq } from "drizzle-orm";
import { ServiceDto } from "@/use-cases/services/types";

export async function updateService(service: ServiceDto): Promise<void> {
  await db.update(Service).set(service).where(eq(Service.id, service.id));
}
