import TasksTable from "../ui/tasks/tables";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { auth } from '@/auth';
import { DataTable } from "../tasks/components/data-table";
import { columns } from "../tasks/components/columns"
import { getTasks } from "@/data-access/tasks/get-tasks.persistence";
import { partition } from "lodash";

export default async  function Page() {
    let session = await auth();

    const items = await getTasks();
    
    const [completed,allTasks] = partition(
        items,
        (item)=>item.status === 'completed'
    )
   

    return (
        <div className="mx-auto max-w-screen-2xl">

            <div className="min-w-0">
                <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl">Welcome, {session?.user?.name}</h2>
            </div>

            <Accordion type="single" collapsible className="border bg-white md:rounded-md my-6">
                <AccordionItem value="item-1" className="border-0 hover:no-underline">
                    <AccordionTrigger className="p-6 ">
                        <div className="flex cursor-pointer justify-between ">
                            <h4 className="text-xl font-bold leading-5 text-gray-900">👋 Welcome to your dashboard</h4>
                        </div>
                    </AccordionTrigger>
                    <AccordionContent>
                     <hr className="my-6"/>
                     <div>
                     <div className="md:px-6 md:py-4">
                        <h3 className="text-lg font-bold text-gray-900">First steps</h3>
                        <div className="flex flex-col py-4 lg:flex-row">
                            <div className="w-full grow pr-3 lg:w-auto">
                                <h4 className="text-base font-bold text-gray-900">✅ Create a task</h4>
                                <p className="mt-5 text-sm font-normal leading-5 text-gray-500">Watch our 30 second video to get started. We will show you how to create and submit your first task.</p>
                                </div>
                            </div>
                            <hr className="mt-6"/>
                        </div>
                        <div className="md:px-6 md:py-4">
                            <h3 className="text-lg font-bold text-gray-900">Helpful tips</h3>
                         
                            <div className="flex flex-wrap gap-4 py-4">
                                <div className="rounded-md border p-4 lg:w-[calc(50%-8px)]">
                                    <div className="flex gap-x-2">
                                        <div>
                                            <div className="rounded-md bg-primary-600 p-1.5 text-white">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true" className="h-6 w-6">
                                                    <path strokeLinecap="round" stroke-linejoin="round" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                                                </svg>
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className="text-base font-bold leading-5 text-gray-900">🗂️ Share brand assets</h4>
                                            <p className="mt-2 text-sm leading-5 text-gray-500">
                                                Do you have brand guidelines or logo images you need to share? Instead of attaching them individually to all tasks, you can share them in a centralized location for easy access by designers or writers to work on your
                                                task.
                                            </p>
                                            <p className="mt-6 cursor-pointer text-xs leading-4 text-blue-500"><a href="#" target="_blank">Create a brand profile</a></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="rounded-md border p-4 lg:w-[calc(50%-8px)]">
                                    <div className="flex gap-x-2">
                                        <div>
                                            <div className="rounded-md bg-primary-600 p-1.5 text-white">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true" className="h-6 w-6">
                                                    <path strokeLinecap="round" stroke-linejoin="round" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                                                </svg>
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className="text-base font-bold leading-5 text-gray-900">🤔 Frequently Asked Questions</h4>
                                            <p className="mt-2 text-sm leading-5 text-gray-500">We answer all your questions related billing, plans, scope of service, process and more.</p>
                                            <p className="mt-6 cursor-pointer text-xs leading-4 text-blue-500"><a href="#" target="_blank">View FAQs</a></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                          
                            <hr className="mt-6" />
                        </div>
                        {/*<div className="md:px-6 md:py-4">
                            <h3 className="text-lg font-bold text-gray-900">Popular solutions</h3>

                            <div className="flex flex-wrap gap-4 py-4">
                                <div className="rounded-md border p-4 lg:w-[calc(33.33%_-_16px)]">
                                    <div className="flex gap-x-2">
                                        <div>
                                            <h4 className="text-base font-bold leading-5 text-gray-900">☑️ Create a task</h4>
                                            <p className="mt-2 text-sm leading-5 text-gray-500">Create and submit a request to get started.</p>
                                            <p className="mt-6 cursor-pointer text-xs leading-4 text-blue-500"><a href="/tasks/create-task" target="_blank">Create a new task</a></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="rounded-md border p-4 lg:w-[calc(33.33%_-_16px)]">
                                    <div className="flex gap-x-2">
                                        <div>
                                            <h4 className="text-base font-bold leading-5 text-gray-900">🧑&zwj;💻 Add new team member</h4>
                                            <p className="mt-2 text-sm leading-5 text-gray-500">Add team members so they can create, follow and collaborate on tasks.</p>
                                            <p className="mt-6 cursor-pointer text-xs leading-4 text-blue-500">Add team member</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="rounded-md border p-4 lg:w-[calc(33.33%_-_16px)]">
                                    <div className="flex gap-x-2">
                                        <div>
                                            <h4 className="text-base font-bold leading-5 text-gray-900">💳 Manage billing</h4>
                                            <p className="mt-2 text-sm leading-5 text-gray-500">View and update your subscription and billing information at any time.</p>
                                            <p className="mt-6 cursor-pointer text-xs leading-4 text-blue-500"><a href="#" target="_blank">Go to billing information</a></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>*/}
                        


                     </div>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
            <div className="mb-5">
                <div className="flex flex-col space-y-2 lg:flex-row lg:space-y-0 lg:space-x-[10px]">
                    <div className="grow lg:max-w-[calc(33.33%_-_5px)]">
                        <div className="rounded-t-md border border-b-0 bg-white p-6">
                            <div className="flex">
                                <div className="shrink-0">
                                    <div className="rounded-md bg-black p-1.5 text-white">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon-tabler icon-tabler-list h-6 w-6" width="24px"
                                            height="24px"
                                            viewBox="0 0 24 24"
                                            strokeWidth="2"
                                            stroke="currentColor"
                                            fill="none"
                                            strokeLinecap="round"
                                            stroke-linejoin="round"
                                            aria-hidden="true"
                                        >
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                            <path d="M9 6l11 0"></path>
                                            <path d="M9 12l11 0"></path>
                                            <path d="M9 18l11 0"></path>
                                            <path d="M5 6l0 .01"></path>
                                            <path d="M5 12l0 .01"></path>
                                            <path d="M5 18l0 .01"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div className="grow pl-3">
                                    <div className="text-sm font-medium leading-5 text-gray-500">Tasks</div>
                                    <div className="text-2xl font-semibold leading-8 text-gray-900">150</div>
                                </div>
                            </div>
                        </div>
                        <a href="/tasks"><div className="cursor-pointer rounded-b-md border bg-gray-50 p-4 text-sm font-medium text-primary-400 hover:bg-gray-200 hover:text-primary-500">View all</div></a>
                    </div>
                </div>
            </div>
            <div className="bg-white rounded-lg shadow overflow-visible">
                <div className="pt-6">
                   {/* <div className="p-6 sm:flex text-sm font-medium "> Search area here </div>*/}
                    <Tabs defaultValue="account" className="overflow-x-auto border-gray-200 sm:border-b md:px-6 !sm:border-b-0">
                        <TabsList className="border-b border-transparent">
                            <TabsTrigger value="account" >Open</TabsTrigger>
                            <TabsTrigger value="password">Close</TabsTrigger>
                        </TabsList>
                        <TabsContent value="account"><DataTable data={allTasks} columns={columns}></DataTable></TabsContent>
                        <TabsContent value="password"> <DataTable data={completed} columns={columns}></DataTable></TabsContent>
                    </Tabs>
                </div>
            </div>
        </div>
    );
}