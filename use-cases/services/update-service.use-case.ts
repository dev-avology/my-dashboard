import { ServiceEntity,ServiceEntityValidationError} from "@/entites/service";
import { AuthenticationError, serviceToDto,ValidationError } from "./utils";
import { GetService, GetUser, UpdateService } from "./types";
import { User } from "@/db/schema";
import {format,formatISO} from "date-fns";

export async function updateServiceUseCase(
  context: {
    getUser: GetUser;
    updateService: UpdateService;
    getService: GetService;
  },
  data: { 
    serviceId: string,
    title: string;
    description: string;
    amount:number;
    recurring:number;
    repeat:number;
    image_url:string|null;
    status:'active'|'inactive',
    date:string;
  }
) {
  const user = context.getUser();

  if (!user) {
    throw new AuthenticationError();
  }

  try {


    const dataService = await context.getService(data.serviceId);
    
    const service = new ServiceEntity(dataService);
  
    service.setTitle(data.title);
    service.setDescrition(data.description);
    service.setAmount(data.amount);
    service.setRecurring(data.recurring);
    service.setRepeat(data.repeat);
    service.setStatus(data.status);
    service.setDate(formatISO(new Date()));
    
    service.validate();

    await context.updateService(serviceToDto(service));
  
    return serviceToDto(service);
  } catch (err) {
    const error = err as ServiceEntityValidationError;
    throw new ValidationError(error.getErrors());
}
}