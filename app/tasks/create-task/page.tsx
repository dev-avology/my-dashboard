import { auth } from '@/auth';
import { getTasks } from "@/data-access/tasks/get-tasks.persistence";
import { CreateTaskForm } from './create-task-form';
export default async  function Page() {
    let session = await auth();

    const items = await getTasks();

    return (
        <div className="mx-auto max-w-screen-2xl">
            <div className="bg-white rounded-lg shadow overflow-visible">
                <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
                    
                    <div className="flex items-center justify-between space-y-2">
                        <div> Create new Task</div>
                        <CreateTaskForm></CreateTaskForm>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}