"use client"
//import { Service,ServiceSchema } from "@/app/tasks/data/schema";
import {Service,ServiceSchema} from "@/db/schema";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select";
  import SizeDrop from './size-drop';


const AddTaskService= () => {

   
  return (
    <>
    <div>
        <div className="flex">
            <div className="w-1/2 pr-5">
                <form className="mr-auto max-w-sm flex  gap-x-4">
                    <Label  className="sr-only">Email address</Label>
                    <Input id="email-address" name="email" type="text" className="bg-gray-50 border border-gray-300  text-sm rounded-lg flex-auto rounded-md  px-3.5 py-2  shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6" placeholder="Enter your email" />

                    <button type="submit" className="text-white bg-gray-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-3 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Draft</button>
                </form>
            </div>
            <div className="w-1/2 pl-5 flex justify-end">
                <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Save to my designer</button>
                <button type="button" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Save and Close</button>
            </div>
        </div>

        <div className="border-t-2 border-b-2  border-gray-200 border-dashed py-4 my-4">
            <div className="flex justify-between">
                <div className="px-2 border-r-2  border-gray-200 border-solid w-1/5">
                    <Label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Request Type*</Label>
                    <Select>
                        <SelectTrigger className="">
                            <SelectValue placeholder="Select a types" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>All Types</SelectLabel>
                                <SelectItem value="Other Social Media Graphics">Other Social Media Graphics</SelectItem>
                                <SelectItem value="Social Media Graphics">Social Media Graphics</SelectItem>
                                <SelectItem value="Paid Ads">Paid Ads</SelectItem>
                                <SelectItem value="Apparel">Apparel</SelectItem>
                                <SelectItem value="Motion Graphics">Motion Graphics</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
                <div className="px-2 border-r-2  border-gray-200 border-solid w-1/5">
                    <Label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Size(s)*</Label>
                     <SizeDrop />
                </div>
            </div>
        </div>
        <div className="flex justify-between">
            <aside id="default-sidebar" className="border-r-2 border-gray-200 border-dashed px-5 bg-gray-50 dark:bg-gray-800 sticky top-5 w-1/4 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
                <div className="h-full  pt-4 overflow-y-auto  relative pb-[110px]">
                    <div>
                        <h3 className="tracking-tight py-2 text-base font-semibold text-gray-900">Media</h3>
                        <p className="text-base text-gray-500">Upload images and/or files and use our annotation tool to provide contextual directions for your designer.</p>
                    </div>
                    <div className="mt-5 absolute bottom-0 left-0 right-0">
                         <button type="button" className="w-full py-2 px-5  mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Stock Libraries</button>
                         <div>
                            
                         <div className="mb-3">
                            <input
                                className="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
                                type="file"
                                id="formFile" placeholder="Start typing general direction" />
                            </div>
                         </div>

                    </div>
                </div>
            </aside>
            <div className="px-4 w-3/4 max-h-screen overflow-auto">
                <div className="  rounded-lg dark:border-gray-700">
                    <div>
                        <h3 className="tracking-tight py-2 text-base font-semibold text-gray-900">Directions</h3>
                        <p className="text-base text-gray-500">Type general directions for your designer below. You can also click the "+" to add exact copy and leverage our built-in Al tools to assist with your creative brief.</p>
                        <div className="flex mt-6">
                            <button className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600 hover:bg-gray-100">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-gray-500 dark:text-gray-400">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                </svg>

                            </button>
                            <input type="text" id="website-admin" className="rounded-none rounded-e-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="elonmusk" />
                        </div>
                    </div>

                </div>
            </div>
        </div>

      </div>
    </>
  );
  };
  
  export default AddTaskService;