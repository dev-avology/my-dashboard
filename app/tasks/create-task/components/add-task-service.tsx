"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useFormState, useFormStatus } from "react-dom";

import SizeDrop from './size-drop';
import FormatDrop from './format-drop';
import BrandDrop from './brand-drop'
import React, { HTMLAttributes, useEffect, useRef, useState } from 'react';
import { taskTitles } from "@/use-cases/global-data";
import { createTaskAction } from "../../_actions/create-task.action";
import { useToast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";
import  AssetsUpload  from "./assets-upload";
import Link from 'next/link';



interface AddTaskServiceProps {
    service?: string;
  }

const AddTaskService: React.FC<AddTaskServiceProps> = ({ service }) => {

 const selectedTaskSizes = taskTitles.find((item) => item.value === service);


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
  const sizeRef = useRef<HTMLInputElement>(null)
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
    <div>
        
    <form className=""  ref={formRef} action={onCreateTaskAction}>
        <div className="flex">
            <div className="w-1/2 pr-5">
            <div className="mr-auto max-w-sm flex  gap-x-4">

                    <Label  className="sr-only">Task Title</Label>
                    <Input id="title" name="title" type="text" className="bg-gray-50 border border-gray-300  text-sm rounded-lg flex-auto rounded-md  px-3.5 py-2  shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6" placeholder="Enter task title" />

                    <button type="submit" className="text-white bg-gray-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-3 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Save</button>
               
            </div>
            </div>

            <div className="w-1/2 pl-5 flex justify-end">
                {/* <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Save to my designer</button> */}
                {/* <button type="button" className="">Save and Close</button> */}
                <Link href="/tasks/create-task" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                                Go Back
                  </Link>
                <SaveButton idleText="Save and Close" submittingText="Saving task..."></SaveButton>
            </div>
        </div>

        <div className="border-t-2 border-b-2  border-gray-200 border-dashed py-4 mt-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                <div className="px-2">
                    <Label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Request Type*</Label>
                    <div  className="flex h-10 w-full items-center justify-between rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 dark:border-slate-800 dark:bg-slate-950 dark:ring-offset-slate-950 dark:placeholder:text-slate-400 dark:focus:ring-slate-300">
                    {/* <Input id="service_type" disabled name="service_type" defaultValue={service} type="text" className="bg-gray-50 border border-gray-300  text-sm rounded-lg flex-auto rounded-md  px-3.5 py-2  shadow-sm ring-1 ring-white/10 sm:text-sm sm:leading-6" /> */}
                    {service}
                    <input type="hidden" name="service_type" value={service}></input>
                    <input type="hidden" name="service_category" value={selectedTaskSizes?.children}></input>
                    </div>
                </div>
                {selectedTaskSizes?.custom?.length &&
                <div className="px-2" >
                      <SizeDrop formRef={sizeRef} service={service} />
                </div>
                }




                <div className="px-2">
                    <Label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Format(s)*</Label>
                    <FormatDrop formRef={formRef}/>
                </div>
                <div className="px-2">
                    <Label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Brand Profile</Label>
                    <BrandDrop formRef={formRef} service={service}/>
                </div>

                {/* <div className="px-2">
                    <Label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Preferred Designer</Label>
                    <Select>
                        <SelectTrigger className="">
                            <SelectValue placeholder="Select a types" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>No Preference</SelectLabel>
                                <SelectItem value="Other Social Media Graphics">Designer one</SelectItem>
                                <SelectItem value="Social Media Graphics">Designer tTwo</SelectItem>
                                <SelectItem value="Paid Ads">Designer Three</SelectItem>
                                <SelectItem value="Apparel">Designer Four</SelectItem>
                                <SelectItem value="Motion Graphics">Designer Five</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div> */}

            </div>
        </div>
        <div className="flex justify-between flex-wrap">

            
              <AssetsUpload></AssetsUpload>

            <div className="px-4 w-full xl:w-3/4 max-h-screen overflow-auto">
                <div className="  rounded-lg dark:border-gray-700">
                    <div>
                        <h3 className="tracking-tight py-2 text-base font-semibold text-gray-900">Directions</h3>
                    <p className="text-base text-gray-500">Type general directions for your designer below. You can also click the{'"+"'} to add exact copy.</p>
                       <Directions />
                    </div>

                </div>
            </div>
        </div>
        </form>
      </div>
    </>
   );
  };
  
  export default AddTaskService;




  interface DirectionsProps {}

  const Directions: React.FC<DirectionsProps> = () => {
    const [rowValues, setRowValues] = useState<string[]>(['Add Directions....']); // Initialize with a default value
  
    const handleClick = (index: number) => {
      // Create a new row with an empty value
      setRowValues((prevValues) => [...prevValues.slice(0, index + 1), '', ...prevValues.slice(index + 1)]);
    };
  
    const handleInputChange = (index: number, value: string) => {
      // Update the input value for the specified row
      setRowValues((prevValues) => {
        const newValues = [...prevValues];
        newValues[index] = value;
        return newValues;
      });
    };
  
    return (
      <div>
        {rowValues.map((value, index) => (
          <div key={index} className="flex mt-6">
            <button
              onClick={() => handleClick(index)}
              className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600 hover:bg-gray-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-gray-500 dark:text-gray-400"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
            </button>
            <input
              type="text"
              name={`directions[${index}]`}
              id={`website-admin-${index}`}
              className="rounded-none rounded-e-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder={`Row ${index}`}
              value={value}
              onChange={(e) => handleInputChange(index, e.target.value)}
            />
          </div>
        ))}
      </div>
    );
  };


  function SaveButton({
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
          "py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700",
          props.className
        )}
        disabled={pending}
      >
        {pending ? submittingText : idleText}
      </Button>
    );
  };