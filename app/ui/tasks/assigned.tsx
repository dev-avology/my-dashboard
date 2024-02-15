import Image from 'next/image';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";

interface User {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
}

export default function TaskAssigned({ users }: { users: User[] }) {
    return (
        <>
            {users.map((user) => (
                <TaskUserIcon key={user.id} user={user}></TaskUserIcon>
            ))}
        </>);
}



function TaskUserIcon({ user }: { user: User }) {
    return (
        <>
            <span>

                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger> <Image
                            src={user.avatar}
                            className="rounded-full"
                            width={28}
                            height={28}
                            alt={`${user.first_name}'s profile picture`}
                        /></TooltipTrigger>
                        <TooltipContent>
                            <p>{user.first_name}</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>

            </span>
        </>
    );
}
