import { UpdateTask,DeleteTask } from '@/app/ui/tasks/buttons';
import TaskStatus from '@/app/ui/tasks/status';
import TaskPriority from '@/app/ui/tasks/priority';
import { formatDateToLocal, formatCurrency } from '@/app/lib/utils';
import { fetchFilteredTasks } from '@/app/lib/data';
import TaskAssigned from '@/app/ui/tasks/assigned';

export default async function TasksTable({
  query,
  currentPage,
}: {
  query: string|null;
  currentPage: number|null;
}) {
  const tasks = await fetchFilteredTasks(query, currentPage);

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            {tasks?.map((task) => (
              <div
                key={task.id}
                className="mb-2 w-full rounded-md bg-white p-4"
              >
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <div className="mb-2 flex items-center">
                     
                      <p>{task.title}</p>
                    </div>
                  </div>
                  <TaskStatus status={task.status} />
                </div>
                <div className="flex w-full items-center justify-between pt-4">
                    <p className="text-xl font-medium">

                    <TaskAssigned users={task.assignedTo}/>
                  </p>

                  <p className="text-xl font-medium">{task.due_date}</p>
                  <p className="text-xl font-medium">{task.due_date}</p>
                  <p className="text-xl font-medium">{task.due_date}</p>


                  <div className="flex justify-end gap-2">
                    <UpdateTask id={task.id} />
                    <DeleteTask id={task.id} />
                  </div>

                </div>
              </div>
            ))}
          </div>
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Title
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Status
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Assigned To
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Priority
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Due Date
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Submitted
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Updated
                </th>
                <th scope="col" className="relative py-3 pl-6 pr-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {tasks?.map((task) => (
                <tr
                  key={task.id}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex items-center gap-3">
                      
                      <p>{task.title}</p>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    <TaskStatus status={task.status} />
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                      <TaskAssigned users={task.assignedTo}/>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    <TaskPriority status={task.priority}/>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                  <p>{task.due_date}</p>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                  <p>{task.due_date}</p>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                  <p>{task.due_date}</p>
                  </td>
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex justify-end gap-3">
                    <UpdateTask id={task.id} />
                    <DeleteTask id={task.id} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}