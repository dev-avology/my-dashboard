import Image from 'next/image';

interface User {
    id:number;
    email: string;
    first_name: string;
    last_name: string;
    avatar:string;
  }

export default function TaskAssigned({ users }: {  users: User[] }) {
    return (
    <>
    {users.map((user)=>(
        <TaskUserIcon user={user}></TaskUserIcon>
    ))}
    </>);
}



function TaskUserIcon({user}:{user:User}){
    return (
        <>
    <span><Image
        src={user.avatar}
        className="rounded-full"
        width={28}
        height={28}
        alt={`${user.first_name}'s profile picture`}
      /></span>
      </>
      );
}
