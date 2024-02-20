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

type CreateItemState = { form: Form } & (
  | SuccessState
  | SubmitErrorState
  | FieldErrorsState
  | DefaultState
);

export async function createTaskAction(
  state: CreateItemState,
  formData: FormData
): Promise<CreateItemState> {
  const { getUser }  = await getSessionUser();
    

  const submittedForm = {
    title: formData.get("title") as string,
    description: formData.get("description") as string,
  };

  try {
    
    // await createTaskUseCase(
    //   {
    //     getUser,
    //     createTask: createTask,
    //     updateTask: updateTask
    //   },
    //   {
    //     title: submittedForm.title.toLowerCase(),
    //     description: parseInt(submittedForm.description),
    //   }
    // );
    revalidatePath("/");
    return {
      form: {
        title: "",
        description: "1",
      },
      status: "success",
    };
  } catch (err) {
    const error = err as Error;
    // if (error instanceof ValidationError) {
    //   return {
    //     form: submittedForm,
    //     status: "field-errors",
    //     errors: error.getErrors(),
    //   };
    // } else {
    //   return {
    //     form: submittedForm,
    //     status: "error",
    //     errors: error.message,
    //   };
    // }

    return {
          form: submittedForm,
          status: "error",
          errors: error.message,
        };
  }
}
