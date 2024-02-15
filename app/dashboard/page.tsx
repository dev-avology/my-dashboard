import TasksTable from "../ui/tasks/tables";

export default function Page() {
    return ( 
            <>
            <TasksTable query={null} currentPage={null}></TasksTable>
            </>
             );
  }