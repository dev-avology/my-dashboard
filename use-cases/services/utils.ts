import { ServiceEntity } from "@/entites/service";
import { CreateServiceDto, ServiceDto } from "./types";

export class ValidationError extends Error {
  private errors: Record<string, string | undefined>;

  constructor(errors: Record<string, string | undefined>) {
    super("An validation error occured");
    this.errors = errors;
  }

  getErrors() {
    return this.errors;
  }
}

export class AuthenticationError extends Error {
  constructor() {
    super("You must be authenticated to do this action");
  }
}

export function serviceToCreateServiceDtoMapper(service: ServiceEntity): CreateServiceDto {
  return {
    title: service.getTitle(),
    description: service.getDescrition(),
    amount:service.getAmount(),
    recurring:service.getRecurring(),
    repeat:service.getRepeat(),
    image_url:service.getImageUrl(),
    status: service.getStatus(),
    date:service.getDate(),
  };
}

export function serviceToDto(service: ServiceEntity): ServiceDto {
  const serviceId = service.getId();

  if (!serviceId) {
    throw new Error("expected item to have an id");
  }

  return {
    id: serviceId,
    title: service.getTitle(),
    description: service.getDescrition(),
    amount: service.getAmount(),
    recurring:service.getRecurring(),
    repeat:service.getRepeat(),
    image_url:service.getImageUrl(),
    status: service.getStatus(),
    date:service.getDate(),
  };
}
