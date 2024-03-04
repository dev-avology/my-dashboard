import { ServiceEntity } from "@/entites/service";
import { AuthenticationError, serviceToDto } from "./utils";
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

  const dataService = await context.getService(data.serviceId);
  
  const service = new ServiceEntity(dataService);

  service.setTitle(data.title);
  service.setDescrition(data.description);
  
  service.setDate(formatISO(new Date()));
  //task.setAssigned(data.assignedTo);


  await context.updateService(serviceToDto(service));


  console.log('updated service',serviceToDto(service));

  return serviceToDto(service);
}
