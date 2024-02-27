"use client"
import { Task, taskSchema } from "../data/schema"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import {format} from "date-fns";
// YourComponent.tsx
interface ViewDataProps {
    row: Task; // or the correct type for viewData
  }
  
  const ViewData: React.FC<ViewDataProps> = ({ row }) => {
   
  return (
    <>
      <Sheet>
      <SheetTrigger asChild>
          <DotsHorizontalIcon className="h-4 w-4 border-0 focus:outline-none outline-none" />
      </SheetTrigger>
      <SheetContent className="px-0 overflow-auto" style={{ maxWidth: '800px', width: '100%' }}>
        <SheetHeader className="py-2 px-4">
          <SheetTitle className="text-4l font-bold dark:text-white ">{row.title}</SheetTitle>
         <SheetDescription>
            {row.description}
          </SheetDescription>
        </SheetHeader>
        <div className="grid py-4 ">
            <div className="border-b py-2 px-4 bg-[#F9FAFB]">
                <h4 className="text-sm font-medium text-gray-700 ">Type of service</h4>
                <p  className="col-span-3 prose prose-sm w-full max-w-full text-gray-500 prose-a:text-primary-600" >{row.service_type}</p>
            </div>
            <div className="border-b py-2 px-4">
                <h4 className="text-sm font-medium text-gray-700">Size of the design task</h4>
                <p  className="col-span-3 prose prose-sm w-full max-w-full text-gray-500 prose-a:text-primary-600" >{row.status}</p>
            </div>
            <div className="border-b py-2 px-4 bg-[#F9FAFB]">
                <h4 className="text-sm font-medium text-gray-700">Design services category</h4>
                <p  className="col-span-3 prose prose-sm w-full max-w-full text-gray-500 prose-a:text-primary-600" >{row.service_category}</p>
            </div>
            <div className="border-b py-2 px-4">
                <h4 className="text-sm font-medium text-gray-700">Type of website design task</h4>
                <p  className="col-span-3 prose prose-sm w-full max-w-full text-gray-500 prose-a:text-primary-600" >{row.task_service}</p>
            </div>
            <div className="border-b py-2 px-4 bg-[#F9FAFB]">
                <h4 className="text-sm font-medium text-gray-700">Type of website design service</h4>
                <p  className="col-span-3 prose prose-sm w-full max-w-full text-gray-500 prose-a:text-primary-600" >{row.task_type}</p>
            </div>
            <div className="border-b py-2 px-4 ">
                <h4 className="text-sm font-medium text-gray-700">Platform or website builder?</h4>
                <p  className="col-span-3 prose prose-sm w-full max-w-full text-gray-500 prose-a:text-primary-600" >{row.task_plateform}</p>
            </div>
            <div className="border-b py-2 px-4 bg-[#F9FAFB]">
                <h4 className="text-sm font-medium text-gray-700">Website specialization</h4>
                <p  className="col-span-3 prose prose-sm w-full max-w-full text-gray-500 prose-a:text-primary-600" >{row.task_speclization}</p>
            </div>
            <div className="border-b py-2 px-4">
                <h4 className="text-sm font-medium text-gray-700">Describe your task here</h4>
                <p  className="col-span-3 prose prose-sm w-full max-w-full text-gray-500 prose-a:text-primary-600" >{row.task_type}</p>
            </div>
            <div className="border-b py-2 px-4 bg-[#F9FAFB]">
                <h4 className="text-sm font-medium text-gray-800">When do you want to have this task completed?</h4>
                <p  className="col-span-3 prose prose-sm w-full max-w-full text-gray-500 prose-a:text-primary-600" >{format(row.duedate,'PPP')}</p>
            </div>
          {/*<div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
             Title
            </Label>
            <Input id="name" value={row.title} className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input id="username" value="@peduarte" className="col-span-3" />
          </div>*/}
        </div>
        <SheetFooter className="px-2">
          <SheetClose asChild>
             <a href="#" className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
               Delete
            </a>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
    </>
  );
  };
  
  export default ViewData;