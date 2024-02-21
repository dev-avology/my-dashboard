import { TaskEntity } from "@/entites/task";
import { CreateTaskDto, TaskDto } from "./types";

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


export const formatDateToLocal = (
  dateStr: string,
  locale: string = 'en-US',
) => {
  const date = new Date(dateStr);
  const options: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  };
  const formatter = new Intl.DateTimeFormat(locale, options);
  return formatter.format(date);
};

export function taskToCreateTaskDtoMapper(task: TaskEntity): CreateTaskDto {
  return {
    title: task.getTitle(),
    description: task.getDescrition(),
    status: task.getStatus(),
    priority: task.getPriority(),
    service_type:task.getServiceType(),
    service_category:task.getServiceCategory(),
    task_type:task.getTaskType(),
    task_service:task.getTaskService(),
    task_plateform:task.getTaskPlateform(),
    task_speclization:task.getTaskSpeclization(),
    //submitted:task.getSubmitted(),
    duedate:task.getDueDate(),
    date: task.getDate(),
    created_by:task.getCreatedBy(),
  };
}

export function taskToDto(task: TaskEntity): TaskDto {
  const taskId = task.getId();

  if (!taskId) {
    throw new Error("expected item to have an id");
  }

  return {
    id: taskId,
    title: task.getTitle(),
    description: task.getDescrition(),
    status: task.getStatus(),
    priority: task.getPriority(),
    service_type:task.getServiceType(),
    service_category:task.getServiceCategory(),
    task_type:task.getTaskType(),
    task_service:task.getTaskService(),
    task_plateform:task.getTaskPlateform(),
    task_speclization:task.getTaskSpeclization(),
    submitted:task.getSubmitted(),
    duedate:task.getDueDate(),
    date: task.getDate(),
    created_by:task.getCreatedBy(),
    //assignedTo : task.getAssigned()
  };
}
