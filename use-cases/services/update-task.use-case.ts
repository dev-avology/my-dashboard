import { ServiceEntity } from "@/entites/service";
import { AuthenticationError, serviceToDto } from "./utils";
import { GetService, GetUser, UpdateService } from "./types";
import { User } from "@/db/schema";

export async function updateServiceUseCase(
  context: {
    getUser: GetUser;
    updateService: UpdateService;
    getService: GetService;
  },
  data: { 
    serviceId: number,
    title: string;
    description: string;
    status: 'queue'|'paused'|'inprogress'|'readyforreview'| 'completed'|'closed';
    priority: 'low'|'medium'|'heigh';
  }
) {
  const user = context.getUser();

  if (!user) {
    throw new AuthenticationError();
  }

  const dataTask = await context.getService(data.serviceId);
  const task = new ServiceEntity(dataTask);
   
  task.setDescrition(data.description);

  //task.setAssigned(data.assignedTo);


  await context.updateService(serviceToDto(task));

  return serviceToDto(task);
}
