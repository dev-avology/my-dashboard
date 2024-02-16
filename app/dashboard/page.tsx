import TasksTable from "../ui/tasks/tables";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { auth } from '@/auth';

export default async  function Page() {
    let session = await auth();

    return (
        <div className="mx-auto max-w-screen-2xl">

            <div className="min-w-0">
                <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl">Welcome, {session?.user?.name}</h2>
            </div>

            <Accordion type="single" collapsible className="border bg-white md:rounded-md my-6 md:my-0">
                <AccordionItem value="item-1">
                    <AccordionTrigger >
                        <div className="flex cursor-pointer justify-between p-6">
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
                     </div>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
            <div className="bg-white rounded-lg shadow overflow-visible">
                <div>
                    <div className="p-6 sm:flex"> Search area here </div>
                    <Tabs defaultValue="account" className="overflow-x-auto border-gray-200 sm:border-b md:px-6 !sm:border-b-0">
                        <TabsList className="border-b border-transparent">
                            <TabsTrigger value="account" >Open</TabsTrigger>
                            <TabsTrigger value="password">Close</TabsTrigger>
                        </TabsList>
                        <TabsContent value="account"><TasksTable query={null} currentPage={null}></TasksTable></TabsContent>
                        <TabsContent value="password">closed tasks</TabsContent>
                    </Tabs>
                </div>
            </div>
        </div>
    );
}