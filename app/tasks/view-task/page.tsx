import { auth } from '@/auth';
import { getTasks } from "@/data-access/tasks/get-tasks.persistence";
import { ViewModal } from './view-modal';
export default async  function Page() {
    let session = await auth();

    const items = await getTasks();

    return (
        <div className="mx-auto max-w-screen-2xl">
            <div className='p-4'>
                <div className='overflow-hidden bg-white rounded-lg shadow'>
                    <div className='mt-6 w-full bg-white shadow-sm 2xl:rounded-md'>
                        <div className='py-5 pt-0'>
                            <div className='mx-auto max-w-3xl'>
                                <ViewModal></ViewModal>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="bg-white rounded-lg shadow overflow-visible">
                <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
                    
                    <div className="flex items-center ">
                       
                    </div>
                    
                </div>
            </div> */}
        </div>
    );
}