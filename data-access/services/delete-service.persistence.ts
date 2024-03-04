import "server-only";

import { db } from "@/db";
import { Service } from "@/db/schema";
import { eq } from "drizzle-orm";
import { ServiceId } from "./get-service.persistence";

export async function deleteItem(serviceId: ServiceId): Promise<void> {
  await db.delete(Service).where(eq(Service.id, serviceId));
}
