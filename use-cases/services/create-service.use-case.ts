import { ServiceEntity, ServiceEntityValidationError } from "@/entites/service";
import {
  AuthenticationError,
  serviceToDto,
  ValidationError,
  serviceToCreateServiceDtoMapper,
} from "./utils";
import { CreateService, GetUser, UpdateService } from "./types";


export async function createServiceUseCase(
  context: {
    getUser: GetUser;
    createService: CreateService;
    updateService: UpdateService;
  },
  data: {  
    title: string;
    description: string;
    amount:number;
    recurring:number;
    repeat:number;
    image_url:string|null;
    status: 'active'|'inactive';
    date:string;
  }
) {
  const user = context.getUser();

  if (!user) {
    throw new AuthenticationError();
  }

  try {
    const newItem = new ServiceEntity({
      title: data.title,
      description: data.description,
      amount:data.amount,
      status:data.status,
      recurring:data.recurring,
      repeat:data.repeat,
      date:data.date
    });
    await context.createService(serviceToCreateServiceDtoMapper(newItem));
  } catch (err) {
    
    const error = err as ServiceEntityValidationError;
    throw new ValidationError(error.getErrors());
  }
}
