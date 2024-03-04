"use server";
import {getService} from "@/data-access/services/get-service.persistence";
import {updateService} from "@/data-access/services/update-service.persistence";

import { getSessionUser } from "@/auth";
import { updateServiceUseCase } from "@/use-cases/services/update-service.use-case";
import { ValidationError } from "@/use-cases/tasks/utils";
import { revalidatePath } from "next/cache";

type Form =  {
  title: string;
  description: string;
  amount:number;
  recurring:number;
  repeat:number;
  image_url:string|null;
  status:'active'|'inactive',
  date:string,
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

type UpdateServiceState = { form: Form } & (
  | SuccessState
  | SubmitErrorState
  | FieldErrorsState
  | DefaultState
);

export async function updateServiceAction(
  state: UpdateServiceState,
  formData: FormData
): Promise<UpdateServiceState> {
  const { getUser }  = await getSessionUser();


  const serviceId = formData.get("serviceId") as string;

  console.log(formData,serviceId);


  const submittedForm = {
    title: formData.get("title") as string,
    description: formData.get("description") as string,
    amount: parseFloat(formData.get("amount") as string),
    recurring: parseInt(formData.get("recurring") as string,10),
    repeat: parseInt(formData.get("repeat") as string),
    image_url: formData.get("image_url") as string|null,
    status:formData.get('status') as 'active'|'inactive',
    date:formData.get('date') as string,
  }
  try {
    
    await updateServiceUseCase(
      {
        getUser,
        updateService: updateService,
        getService: getService
      },
      {
        serviceId:serviceId,
        title: submittedForm.title.toLowerCase(),
        description: submittedForm.description,
        amount:submittedForm.amount,
        recurring:submittedForm.recurring,
        repeat:submittedForm.repeat,
        image_url:submittedForm.image_url,
        status:submittedForm.status,
        date:submittedForm.date,
      }
    );
    revalidatePath("/");
    return {
      form: {
        title: '',
        description: '',
        amount:0,
        recurring:0,
        repeat:0,
        image_url:null,
        status:'active',
        date:'',
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
