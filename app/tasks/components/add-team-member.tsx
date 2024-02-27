"use client"
import { Task, taskSchema } from "../data/schema"
//import { Button } from "@/components/ui/button";
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
//import { DotsHorizontalIcon } from "@radix-ui/react-icons";
//import {format} from "date-fns";

  
  const AddTeam = () => {
   
  return (
    <>
      <Sheet>
      <SheetTrigger asChild>
          <p>Add team member</p>
      </SheetTrigger>
      <SheetContent className="px-0 overflow-auto" style={{ maxWidth: '800px', width: '100%' }}>
        <SheetHeader className="py-2 px-4">
            <SheetTitle className="text-4l font-bold dark:text-white ">Title Here</SheetTitle>
            <SheetDescription>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </SheetDescription>
        </SheetHeader>
        <div className="grid p-4 ">
          <div className="grid items-center gap-4">
            <form action="#" method="POST" className="grid grid-cols-1 gap-y-6">
                <div>
                    <Label className="sr-only">First name</Label>
                    <Input type="text" name="first-name" id="full-name" className="block w-full rounded-md border-gray-300 px-4 py-3 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" placeholder="First name" />
                </div>
                <div>
                    <Label className="sr-only">Last name</Label>
                    <Input type="text" name="last-name" id="full-name" className="block w-full rounded-md border-gray-300 px-4 py-3 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" placeholder="Last name" />
                </div>
                <div>
                    <Label className="sr-only">Email</Label>
                    <Input id="email" name="email" type="email" className="block w-full rounded-md border-gray-300 px-4 py-3 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" placeholder="Email" />
                </div>
                <div>
                    <Label className="sr-only">Phone</Label>
                    <Input type="text" name="phone" id="phone" className="block w-full rounded-md border-gray-300 px-4 py-3 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" placeholder="Phone" />
                </div>
                <div>
                  <button type="submit" className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Submit</button>
                </div>
            </form>
          </div>
        </div>
        {/* <SheetFooter className="px-2">
          <SheetClose asChild>
            <a href="#" className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
               Delete
            </a>
          </SheetClose>
        </SheetFooter> */}
      </SheetContent>
    </Sheet>
    </>
  );
  };
  
  export default AddTeam;