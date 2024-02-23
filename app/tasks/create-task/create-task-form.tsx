"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useFormState, useFormStatus } from "react-dom";
import { HTMLAttributes, useEffect, useRef } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal } from "lucide-react";
import { cn } from "@/lib/utils";
import { createTaskAction } from "../_actions/create-task.action";



import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import TaskView from '../create-task/components/task-view'
export function CreateTaskForm() {
  const { toast } = useToast();


  const [formState, onCreateTaskAction] = useFormState(createTaskAction, {
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
    status: "default",
  });
  const formRef = useRef<HTMLFormElement>(null);
  useEffect(() => {
    if (formState.status === "success") {
      toast({
        title: "Task Added",
        description: "task has been added",
      });
      formRef.current?.reset();
    }
  }, [toast, formState]);
 

  return (
    <>
    <TaskView />
{/*
      {formState.status === "error" && (
        <Alert variant={"destructive"}>
          <Terminal className="h-4 w-4" />
          <AlertTitle>Uh oh!</AlertTitle>
          <AlertDescription>{formState.errors}</AlertDescription>
        </Alert>
      )}
       <form
        ref={formRef}
        action={onCreateTaskAction}
        className="flex-1 lg:max-w-2xl"
      >

        <Label htmlFor="item-title" className="block text-base font-semibold  text-gray-900 mb-1 capitalize">Item title</Label>
        <Input
          data-testid="item-title"
          defaultValue={formState.form.title}
          name="title"
          id="item-title"
          autoFocus
          hasError={
            formState.status === "field-errors" && !!formState.errors.title
          }
          className="mb-3 block w-full rounded-md shadow-sm sm:text-sm border border-gray-300 placeholder-gray-300 focus:border-primary-500 focus:ring-primary-500"
        ></Input>
        {formState.status === "field-errors" && (
          <Error error={formState.errors.title} />
        )}


        <Label htmlFor="description" className="block text-base font-semibold  text-gray-900 mb-1 capitalize">Description</Label>
        <Input
          data-testid="description"
          defaultValue={formState.form.description}
          name="description"
          id="description"
          autoFocus
          hasError={
            formState.status === "field-errors" && !!formState.errors.description
          }
          className="mb-3 block w-full rounded-md shadow-sm sm:text-sm border border-gray-300 placeholder-gray-300 focus:border-primary-500 focus:ring-primary-500"
        ></Input>
        {formState.status === "field-errors" && (
          <Error error={formState.errors.description} />
        )}

       <div className="flex-1 lg:max-w-2xl"></div>


       <Label htmlFor="status" className="block text-base font-semibold  text-gray-900 mb-1 capitalize">status</Label>
        <Input
          data-testid="status"
          defaultValue={formState.form.status}
          name="status"
          id="status"
          autoFocus
          hasError={
            formState.status === "field-errors" && !!formState.errors.status
          }
          className="mb-3 block w-full rounded-md shadow-sm sm:text-sm border border-gray-300 placeholder-gray-300 focus:border-primary-500 focus:ring-primary-500"
        ></Input>
        {formState.status === "field-errors" && (
          <Error error={formState.errors.status} />
        )}
        <Label htmlFor="priority" className="block text-base font-semibold  text-gray-900 mb-1 capitalize">priority</Label>
        <Input
          data-testid="priority"
          defaultValue={formState.form.priority}
          name="priority"
          id="priority"
          autoFocus
          hasError={
            formState.status === "field-errors" && !!formState.errors.priority
          }
          className="mb-3 block w-full rounded-md shadow-sm sm:text-sm border border-gray-300 placeholder-gray-300 focus:border-primary-500 focus:ring-primary-500"
        ></Input>
        {formState.status === "field-errors" && (
          <Error error={formState.errors.priority} />
        )}
        <Label htmlFor="service_type" className="block text-base font-semibold  text-gray-900 mb-1 capitalize">service_type</Label>
        <Input
          data-testid="service_type"
          defaultValue={formState.form.service_type}
          name="service_type"
          id="service_type"
          autoFocus
          hasError={
            formState.status === "field-errors" && !!formState.errors.service_type
          }
          className="mb-3 block w-full rounded-md shadow-sm sm:text-sm border border-gray-300 placeholder-gray-300 focus:border-primary-500 focus:ring-primary-500"
        ></Input>
        {formState.status === "field-errors" && (
          <Error error={formState.errors.service_type} />
        )}

        <Label htmlFor="service_category" className="block text-base font-semibold  text-gray-900 mb-1 capitalize">service_category</Label>
        <Input
          data-testid="service_category"
          defaultValue={formState.form.service_category}
          name="service_category"
          id="service_category"
          autoFocus
          hasError={
            formState.status === "field-errors" && !!formState.errors.service_category
          }
          className="mb-3 block w-full rounded-md shadow-sm sm:text-sm border border-gray-300 placeholder-gray-300 focus:border-primary-500 focus:ring-primary-500"
        ></Input>
        {formState.status === "field-errors" && (
          <Error error={formState.errors.service_category} />
        )}
       <Label htmlFor="task_type" className="block text-base font-semibold  text-gray-900 mb-1 capitalize">task_type</Label>
        <Input
          data-testid="task_type"
          defaultValue={formState.form.task_type}
          name="task_type"
          id="task_type"
          autoFocus
          hasError={
            formState.status === "field-errors" && !!formState.errors.task_type
          }
          className="mb-3 block w-full rounded-md shadow-sm sm:text-sm border border-gray-300 placeholder-gray-300 focus:border-primary-500 focus:ring-primary-500"
        ></Input>
        {formState.status === "field-errors" && (
          <Error error={formState.errors.task_type} />
        )}

        <Label htmlFor="task_service" className="block text-base font-semibold  text-gray-900 mb-1 capitalize">task_service</Label>
        <Input
          data-testid="task_service"
          defaultValue={formState.form.task_service}
          name="task_service"
          id="task_service"
          autoFocus
          hasError={
            formState.status === "field-errors" && !!formState.errors.task_service
          }
          className="mb-3 block w-full rounded-md shadow-sm sm:text-sm border border-gray-300 placeholder-gray-300 focus:border-primary-500 focus:ring-primary-500"
        ></Input>
        {formState.status === "field-errors" && (
          <Error error={formState.errors.task_service} />
        )}

       <Label htmlFor="task_plateform" className="block text-base font-semibold  text-gray-900 mb-1 capitalize">task_plateform</Label>
        <Input
          data-testid="task_plateform"
          defaultValue={formState.form.task_plateform}
          name="task_plateform"
          id="task_plateform"
          autoFocus
          hasError={
            formState.status === "field-errors" && !!formState.errors.task_plateform
          }
          className="mb-3 block w-full rounded-md shadow-sm sm:text-sm border border-gray-300 placeholder-gray-300 focus:border-primary-500 focus:ring-primary-500"
        ></Input>
        {formState.status === "field-errors" && (
          <Error error={formState.errors.task_plateform} />
        )}

        <Label htmlFor="task_speclization" className="block text-base font-semibold  text-gray-900 mb-1 capitalize">task_speclization</Label>
        <Input
          data-testid="task_speclization"
          defaultValue={formState.form.task_speclization}
          name="task_speclization"
          id="task_speclization"
          autoFocus
          hasError={
            formState.status === "field-errors" && !!formState.errors.task_speclization
          }
          className="mb-3 block w-full rounded-md shadow-sm sm:text-sm border border-gray-300 placeholder-gray-300 focus:border-primary-500 focus:ring-primary-500"
        ></Input>
        {formState.status === "field-errors" && (
          <Error error={formState.errors.task_speclization} />
        )}


       <Label htmlFor="submitted" className="block text-base font-semibold  text-gray-900 mb-1 capitalize">submitted</Label>
        <Input
          data-testid="submitted"
          defaultValue={formState.form.submitted}
          name="submitted"
          id="submitted"
          autoFocus
          hasError={
            formState.status === "field-errors" && !!formState.errors.submitted
          }
          className="mb-3 block w-full rounded-md shadow-sm sm:text-sm border border-gray-300 placeholder-gray-300 focus:border-primary-500 focus:ring-primary-500"
        ></Input>
        {formState.status === "field-errors" && (
          <Error error={formState.errors.submitted} />
        )}


       <Label htmlFor="duedate" className="block text-base font-semibold  text-gray-900 mb-1 capitalize">duedate</Label>
        <Input
          data-testid="duedate"
          defaultValue={formState.form.duedate}
          name="duedate"
          id="duedate"
          autoFocus
          hasError={
            formState.status === "field-errors" && !!formState.errors.duedate
          }
          className="mb-3 block w-full rounded-md shadow-sm sm:text-sm border border-gray-300 placeholder-gray-300 focus:border-primary-500 focus:ring-primary-500"
        ></Input>


        {formState.status === "field-errors" && (
          <Error error={formState.errors.duedate} />
        )}

        <Label htmlFor="date" className="block text-base font-semibold  text-gray-900 mb-1 capitalize">date</Label>
        <Input
          data-testid="date"
          defaultValue={formState.form.date}
          name="date"
          id="date"
          autoFocus
          hasError={
            formState.status === "field-errors" && !!formState.errors.date
          }
          className="mb-3 block w-full rounded-md shadow-sm sm:text-sm border border-gray-300 placeholder-gray-300 focus:border-primary-500 focus:ring-primary-500"
        ></Input>
        {formState.status === "field-errors" && (
          <Error error={formState.errors.date} />
        )}

        <Label htmlFor="created_by" className="block text-base font-semibold  text-gray-900 mb-1 capitalize">created_by</Label>
        <Input
          data-testid="created_by"
          defaultValue={formState.form.created_by}
          name="created_by"
          id="created_by"
          autoFocus
          hasError={
            formState.status === "field-errors" && !!formState.errors.created_by
          }
          className="mb-3 block w-full rounded-md shadow-sm sm:text-sm border border-gray-300 placeholder-gray-300 focus:border-primary-500 focus:ring-primary-500"
        ></Input>
        {formState.status === "field-errors" && (
          <Error error={formState.errors.created_by} />
        )}
         <SubmitButton idleText="Create Task" submittingText="Creating Task..." />
      </form>*/}
    </>
  );
}

function Error({ error }: { error?: string }) {
  return error ? <span className="text-red-400">{error}</span> : null;
}

function SubmitButton({
  idleText,
  submittingText,
  ...props
}: HTMLAttributes<HTMLButtonElement> & {
  idleText: string;
  submittingText: string;
}) {
  const { pending } = useFormStatus();

  return (
    <Button
      {...props}
      className={cn(
        "disabled:bg-gray-400 disabled:cursor-default mt-6",
        props.className
      )}
      disabled={pending}
    >
      {pending ? submittingText : idleText}
    </Button>
  );
}
