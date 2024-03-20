"use client"
//import { Service,ServiceSchema } from "@/app/tasks/data/schema";
import { Service, ServiceSchema } from "@/db/schema";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { updateServiceAction } from "@/app/services/_actions/update-service.action";
import { useToast } from "@/components/ui/use-toast";
import { useFormState, useFormStatus } from "react-dom";
import { cn } from "@/lib/utils";
import React, { useState, useEffect, useRef } from 'react';


import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal } from "lucide-react";




import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { HTMLAttributes, } from 'react';
//import { DotsHorizontalIcon } from "@radix-ui/react-icons";
//import {format} from "date-fns";


interface ServiceEditProps {
  row: ServiceSchema; // or the correct type for viewData
}


const ServiceEdit: React.FC<ServiceEditProps> = ({ row }) => {


  const { toast } = useToast();


  const [formState, onUpdateServiceAction] = useFormState(updateServiceAction, {
    form: {
      title: '',
      description: '',
      amount: 0,
      recurring: 0,
      repeat: 0,
      image_url: null,
      status: 'active',
      date: '',
    },
    status: "default",
  });

  const formRef = useRef<HTMLFormElement>(null);

  const [isRecurring, setIsRecurring] = useState(false);

  const handleCheckboxChange = () => {
    setIsRecurring((prev) => !prev);
  };

  const [open, setOpen] = React.useState(false);



  useEffect(() => {
    if (formState.status === "success") {
      toast({
        title: "Service Updated",
        description: "service has been Updated",
      });
      setOpen(false);
      
      formRef.current?.reset();
    }
  }, [toast, formState]);


  return (
    <div>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <button type="button" className="text-white bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-md text-sm px-3 py-1 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 mb-2">
            <svg className=" me-1 -ms-1" aria-hidden="true" focusable="false" data-prefix="fab" width="14" height="14" viewBox="0 0 24 24" strokeWidth="2" stroke="#fff" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4" />  <line x1="13.5" y1="6.5" x2="17.5" y2="10.5" /></svg>
            Edit
          </button>
        </SheetTrigger>
        <SheetContent className="px-0 overflow-y-auto overflow-x-hidden" style={{ maxWidth: '800px', width: '100%' }}>
          <SheetHeader className="py-2 px-4">
            <SheetTitle className="text-4l font-bold dark:text-white ">Title</SheetTitle>
            <SheetDescription>
              Description here
            </SheetDescription>
          </SheetHeader>
          <div className="py-2">

            {formState.status === "error" && (
              <Alert variant={"destructive"}>
                <Terminal className="h-4 w-4" />
                <AlertTitle>Uh oh!</AlertTitle>
                <AlertDescription>{formState.errors}</AlertDescription>
              </Alert>
            )}
            <form
              ref={formRef}
              action={onUpdateServiceAction}
              className="w-full">
              <input type="hidden" name="serviceId" value={row.id} />
              <div className="mb-5 px-4">
                <Label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Add Title</Label>
                <Input type="text" name="title" id="title" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" autoFocus defaultValue={row.title} hasError={formState.status === "field-errors" && !!formState.errors.title
                } />
              </div>
              <div className="mb-5 px-4">
                <Label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Add Description</Label>
                <Textarea id="description" name="description" className={`shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light ${formState.status === "field-errors" && !!formState.errors.description ? 'border-red-500' : ''}`} placeholder="" autoFocus defaultValue={row.description} />
              </div>
              <div className="mb-5 px-4">
                <Label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Add Amount</Label>
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">

                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2" strokeLinecap="round" strokeLinecap="round">  <line x1="12" y1="1" x2="12" y2="23" />  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
                  </div>
                  <Input type="text" id="amount" name="amount" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  p-2.5 pl-10 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="" autoFocus defaultValue={row.amount} hasError={formState.status === "field-errors" && !!formState.errors.amount
                  } />
                </div>
              </div>
              <div className="mb-5 px-4">
                <Label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Add Status</Label>
                <Input type="text" id="status" name="status" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="" autoFocus defaultValue={row.status} hasError={formState.status === "field-errors" && !!formState.errors.status
                } />
              </div>

              <div className="mb-5 px-4 ">
                <hr className="my-6"></hr>
                <Label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white inline-flex items-center cursor-pointer">
                  <Input
                    type="checkbox"
                    name="recurring"
                    checked={isRecurring}
                    onChange={handleCheckboxChange}
                    className="sr-only peer"
                    autoFocus defaultValue={row.recurring}
                  />
                  <span className="mr-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Recurring
                  </span>
                  <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                </Label>
              </div>
              <div className="mb-5 px-4 inline-flex items-center" style={{ display: isRecurring ? 'flex' : 'none' }}>
                <Label className="block mr-3 mb-2 text-sm font-medium text-gray-900 dark:text-white"> Repeat</Label>
                <Input
                  type="text"
                  id="text"
                  name="repeat"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                  placeholder=""
                  autoFocus defaultValue={row.repeat}
                  hasError={formState.status === "field-errors" && !!formState.errors.repeat
                  }
                />
                <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Month</span>
              </div>

              <div className="my-5 px-4">
                <hr className="my-6"></hr>
                <UpdateButton idleText="Save" submittingText="Saving Services..."></UpdateButton>
                {/* <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Save</button> */}
              </div>
            </form>

          </div>
          {/* <SheetFooter className="px-2">
          <SheetClose asChild>
             <a href="#" className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
               Delete
            </a>
          </SheetClose>
        </SheetFooter>*/}
        </SheetContent>
      </Sheet>
    </div>
  );
};
function Error({ error }: { error?: string }) {
  return error ? <span className="text-red-400">{error}</span> : null;
}


function UpdateButton({
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
        "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
        props.className
      )}
      disabled={pending}
    >
      {pending ? submittingText : idleText}
    </Button>
  );
}


export default ServiceEdit;