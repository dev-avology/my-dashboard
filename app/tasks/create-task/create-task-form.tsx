"use client";
// import { HTMLAttributes, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useFormState, useFormStatus } from "react-dom";
import { useToast } from "@/components/ui/use-toast";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal } from "lucide-react";
import { cn } from "@/lib/utils";
import { createTaskAction } from "../_actions/create-task.action";



// import {
//   Form,
//   FormControl,
//   FormDescription,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form"
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/components/ui/popover";

import TaskView from '../create-task/components/task-view'
export function CreateTaskForm() {
  // const { toast } = useToast();


  // const [formState, onCreateTaskAction] = useFormState(createTaskAction, {
  //   form: {
  //     title: '',
  //     description: '',
  //     status:'queue',
  //     priority:'low',
  //     service_type:'',
  //     service_category:'',
  //     task_type:'',
  //     task_service:'',
  //     task_plateform:'',
  //     task_speclization:'',
  //     submitted:'',
  //     duedate:'',
  //     date:'',
  //     created_by:''
  //   },
  //   status: "default",
  // });
  // const formRef = useRef<HTMLFormElement>(null);
  // useEffect(() => {
  //   if (formState.status === "success") {
  //     toast({
  //       title: "Task Added",
  //       description: "task has been added",
  //     });
  //     formRef.current?.reset();
  //   }
  // }, [toast, formState]);
 

  return (
    <>
     

      
    </>
  );
}


