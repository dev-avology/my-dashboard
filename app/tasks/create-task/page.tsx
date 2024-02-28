import { auth } from '@/auth';
import { getTasks } from "@/data-access/tasks/get-tasks.persistence";
import { CreateTaskForm } from './create-task-form';
import Search from '@/components/search';
import TaskView from './components/task-view';
export default async  function Page({
    searchParams,
  }: {
    searchParams?: {
      query?: string;
      term?: string;
      service?:string;
    };
  }) {

    let session = await auth();

    const items = await getTasks();


    const query = searchParams?.query || '';
    const term = searchParams?.term || '';
    const service = searchParams?.service || '';

    return (
        <div className="mx-auto max-w-screen-2xl">
            <div className='p-4'>
                <div className='overflow-hidden bg-white rounded-lg shadow relative' >
                    <div className='mt-6 w-full bg-white shadow-sm 2xl:rounded-md'>
                        <div className='py-5 pt-0'>
                            <div className='mx-auto w-full px-6 '>
                               {service === '' ? 
                               <>
                                <div className="mt-4 border-b-2 pb-5 mb-6">
                                    <div className="text-3xl font-bold leading-8 text-gray-900 mb-5 text-center">What are you looking to create?</div>
                                    <div className="w-full max-w-[300px] mx-auto">
                                            <Search placeholder='Search' />
                                    </div>
                                </div>
                                <TaskView query={query} term={term} />
                                </>
                                :
                                <></>
                               }

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