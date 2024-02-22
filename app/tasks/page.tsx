import TasksTable from "../ui/tasks/tables";
import { auth } from '@/auth';
import { DataTable } from "./components/data-table"
import { columns } from "./components/columns"
import { getTasks } from "@/data-access/tasks/get-tasks.persistence";
import Link from 'next/link';

export default async  function Page() {
    let session = await auth();

    const items = await getTasks();

    return (
        <div className="mx-auto max-w-screen-2xl">
            <div className="bg-white rounded-lg shadow overflow-visible">
                <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
                    
                    <div className="flex items-center justify-between space-y-2">
                        <div></div>
                        <div className="flex items-center space-x-2">
                            <Link href="/tasks/create-task" className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base">
                                Add new 
                            </Link>
                        </div>
                    </div>
                    <DataTable data={items} columns={columns}></DataTable>
                </div>
            </div>
        </div>
    );
}