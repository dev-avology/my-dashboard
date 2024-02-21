"use server";

import { createTask } from "@/data-access/tasks/create-task.persistence";
import { getUserTask } from "@/data-access/tasks/get-task-by-user.persistence";
import { updateTask } from "@/data-access/tasks/update-task.persistence";
import { getSessionUser } from "@/auth";
import { createTaskUseCase } from "@/use-cases/tasks/create-task.use-case";
import { ValidationError } from "@/use-cases/tasks/utils";
import { revalidatePath } from "next/cache";

type Form = {
  title: string;
  description: string;
  status:'queue'|'paused'|'inprogress'|'readyforreview'| 'completed'|'closed',
  priority:'low'|'medium'|'heigh',
  service_type:string,
  service_category:string,
  task_type:string,
  task_service:string,
  task_plateform:string,
  task_speclization:string,
  submitted?:string,
  duedate?:string,
  date?:string,
  created_by:string
};

type FieldErrorsState = {
  status: "field-errors";
  errors: Partial<Record<keyof Form, string>>;
};

type DefaultState = {
  status: "default";
};

type SubmitErrorState = {
  status: "error";
  errors: string;
};

type SuccessState = {
  status: "success";
};

type CreateTaskState = { form: Form } & (
  | SuccessState
  | SubmitErrorState
  | FieldErrorsState
  | DefaultState
);

export async function createTaskAction(
  state: CreateTaskState,
  formData: FormData
): Promise<CreateTaskState> {
  const { getUser }  = await getSessionUser();
    

  const submittedForm = {
    title: formData.get("title") as string,
    description: formData.get("description") as string,
    status:formData.get('status') as 'queue'|'paused'|'inprogress'|'readyforreview'| 'completed'|'closed',
    priority:formData.get('priority') as 'low'|'medium'|'heigh',
    service_type:formData.get('service_type') as string,
    service_category:formData.get('service_category') as string,
    task_type:formData.get('task_type') as string,
    task_service:formData.get('task_service') as string,
    task_plateform:formData.get('task_plateform') as string,
    task_speclization:formData.get('task_speclization') as string,
    submitted:formData.get('submitted') as string,
    duedate:formData.get('duedate') as string,
    date:formData.get('date') as string,
    created_by:formData.get('created_by') as string
  };

  try {
    
    await createTaskUseCase(
      {
        getUser,
        createTask: createTask,
        updateTask: updateTask
      },
      {
        title: submittedForm.title.toLowerCase(),
        description: submittedForm.description,
        status:submittedForm.status,
        priority:submittedForm.priority,
        service_type:submittedForm.service_type,
        service_category:submittedForm.service_category,
        task_type:submittedForm.task_type,
        task_service:submittedForm.task_service,
        task_plateform:submittedForm.task_plateform,
        task_speclization:submittedForm.task_speclization,
        submitted:submittedForm.submitted,
        duedate:submittedForm.duedate,
        date:submittedForm.date,
        created_by:submittedForm.created_by
      }
    );
    revalidatePath("/");
    return {
      form: {
        title: '',
        description: '',
        status:'queue',
        priority:'low',
        service_type:'',
        service_category:'',
        task_type:'',
        task_service:'',
        task_plateform:'',
        task_speclization:'',
        submitted:'',
        duedate:'',
        date:'',
        created_by:''
      },
      status: "success",
    };
  } catch (err) {
    const error = err as Error;
    if (error instanceof ValidationError) {
      return {
        form: submittedForm,
        status: "field-errors",
        errors: error.getErrors(),
      };
    } else {
      return {
        form: submittedForm,
        status: "error",
        errors: error.message,
      };
    }
  }
}
