import { User } from "@/db/schema";

export type TaskDto = {
    id: number;
    title: string;
    description: string;
    status: 'queue'|'paused'|'inprogress'|'readyforreview'| 'completed'|'closed';
    priority: 'low'|'medium'|'heigh';
    service_type:string;
    service_category:string;
    task_type:string;
    task_service:string;
    task_plateform:string;
    task_speclization:string;
    submitted:string;
    duedate:string;
    date: string;
    created_by:string;
    assignedTo? : User[]|undefined;
  };
  
  export type CreateTaskDto = {
    title: string;
    description: string;
    status: 'queue'|'paused'|'inprogress'|'readyforreview'| 'completed'|'closed';
    priority: 'low'|'medium'|'heigh';
    service_type:string;
    service_category:string;
    task_type:string;
    task_service:string;
    task_plateform:string;
    task_speclization:string;
    submitted:string;
    duedate:string;
    date: string;
    created_by:string;
    assignedTo? : User[]|undefined;
  };
  
  export type CreateTask = (task: CreateTaskDto) => void;
  export type DeleteTask = (taskid: number) => void;
  export type UpdateTask = (task: TaskDto) => void;
  export type GetUser = () => User | undefined;
  export type GetTask = (taskId: number) => Promise<TaskDto>;
  export type GetTaskByUser = (




    taskId: string,
    title: string
  ) => Promise<TaskDto | undefined>;