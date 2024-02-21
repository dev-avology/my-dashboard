import { TaskEntity, TaskEntityValidationError } from "@/entites/task";
import { formatDateToLocal } from "./utils";
import {
  AuthenticationError,
  taskToDto,
  ValidationError,
  taskToCreateTaskDtoMapper,
} from "./utils";
import { CreateTask, GetUser, UpdateTask } from "./types";

export async function createTaskUseCase(
  context: {
    getUser: GetUser;
    createTask: CreateTask;
    updateTask: UpdateTask;
  },
  data: {  title: string;
    description: string;
    status: 'queue'|'paused'|'inprogress'|'readyforreview'| 'completed'|'closed';
    priority: 'low'|'medium'|'heigh';
    service_type:string;
    service_category:string;
    task_type:string;
    task_service:string;
    task_plateform:string;
    task_speclization:string;
    submitted?:string;
    duedate?:string;
    date?: string;
    created_by:string }
) {
  const user = context.getUser();

  if (!user) {
    throw new AuthenticationError();
  }

  try {
    const newItem = new TaskEntity({
      title: data.title,
      description: data.description,
      status: data.status,
      priority: data.priority,
      service_type: data.service_type,
      service_category:data.service_category,
      task_type:data.task_type,
      task_service: data.task_service,
      task_plateform: data.task_plateform,
      task_speclization: data.task_speclization,
      //submitted: '2022-12-06',
      duedate: '2022-12-06',
      date: '2022-12-06',
      created_by: data.created_by
    });
    await context.createTask(taskToCreateTaskDtoMapper(newItem));
  } catch (err) {
    console.log(err);
    const error = err as TaskEntityValidationError;
    throw new ValidationError(error.getErrors());
  }
}
