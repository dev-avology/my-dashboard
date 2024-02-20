import { TaskEntity } from "@/entites/task";
import { AuthenticationError, taskToDto } from "./utils";
import { GetUser, UpdateTask, GetTask } from "./types";
import { User } from "@/db/schema";

export async function updateTaskUseCase(
  context: {
    getUser: GetUser;
    updateTask: UpdateTask;
    getTask: GetTask;
  },
  data: { 
    taskId: number,
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
    assignedTo:User[]|undefined;  
  }
) {
  const user = context.getUser();

  if (!user) {
    throw new AuthenticationError();
  }

  const dataTask = await context.getTask(data.taskId);
  const task = new TaskEntity(dataTask);
   
  task.setDescrition(data.description);

  task.setAssigned(data.assignedTo);


  await context.updateTask(taskToDto(task));

  return taskToDto(task);
}
