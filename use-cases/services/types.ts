//import { User } from "@/db/schema";

export type ServiceDto = {
    id: number;
    title: string;
    description: string;
    amount:number;
    recurring:number;
    repeat:number;
    image_url:string|null;
    status: 'active'|'inactive';
    date:string;
  };
  
  export type CreateServiceDto = {
    title: string;
    description: string;
    amount:number;
    recurring:number;
    repeat:number;
    image_url:string|null;
    status: 'active'|'inactive';
    date:string;
  };
  export type User = {
    userId: string;
  };
  export type CreateService = (task: CreateServiceDto) => void;
  export type DeleteService = (serviceId: number) => void;
  export type UpdateService = (service: ServiceDto) => void;
  export type GetUser = () => User | undefined;
  export type GetService = (serviceId: number) => Promise<ServiceDto>;
 