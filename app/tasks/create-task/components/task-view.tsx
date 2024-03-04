
'use client';

import { RadioTowerIcon,GaugeIcon, DicesIcon, ShoppingBasketIcon, BrushIcon, WavesIcon , WindIcon, CopyrightIcon, BadgeDollarSignIcon } from "lucide-react";
type IconProps = React.SVGProps<SVGSVGElement>;
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {TaskTypeTitle,CategoryTitle} from "@/use-cases/global-types";
import {taskTitles,categoryTitles} from "@/use-cases/global-data";

import Image from "next/image"
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { partition } from "lodash";

import { useDebouncedCallback } from 'use-debounce';


export default function TaskView({
  query = '',
  term = ''
}: {
    query?: string;
    term?: string;
}) {

  //console.log(term);

  const [matched,allTasks] = partition(
    taskTitles,
    (titles)=> term != '' ? titles.children === term : true
  )

  const [allmatched,allremain] = partition(
    matched,
    (titles)=> query != '' ? titles.value.toUpperCase().includes(query.toUpperCase()) : true
  )
 // console.log(matched);


  return (
    <>
    <div className="flex justify-between">
      <aside id="default-sidebar" className="sticky top-5 w-1/4 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
            <ul className="space-y-2 font-medium">
              
              {categoryTitles.map((category,i)=>{
                return <li key={i}>
                  <ListIcon>{category}</ListIcon>
                </li>;
              })}

            </ul>
        </div>
      </aside>

      <div className="p-4 w-3/4 max-h-screen overflow-auto  ">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-4">
              {allmatched.map((title,i)=>{
                return < div key={i}>
                  <ListTitle>{title}</ListTitle>
                </div>;
              })}
            </div>
        </div>
      </div>
    </div>
    </>
  );
}

function ListIcon({ children }: { children: CategoryTitle }){

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();


  const handleClick = useDebouncedCallback((term) => {
    //console.log(`Searching... ${term}`);
   
    const params = (searchParams === null )? new URLSearchParams():new URLSearchParams(searchParams);
    if (term) {
      params.set('term', term);
    } else {
      params.delete('term');
    }
    replace(`${pathname}?${params.toString()}`);

  }, 300);

  return (
  <a  onClick={() => handleClick(children.value)} className="bg-white flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-sky-100 hover:text-blue-600 group">
    <children.icon />
    <span className="ms-3">{children.label}</span>
  </a>
  );
}


function ListTitle({ children }: { children: TaskTypeTitle }){

  
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  function handleClick(term: string = "") {
   // console.log(term);

   const params = (searchParams === null )? new URLSearchParams():new URLSearchParams(searchParams);
   if (term) {
      params.set('service', term);
    } else {
      params.delete('service');
    }
    replace(`${pathname}?${params.toString()}`);
  }

  return (
 
    <Card onClick={() => handleClick(children.value)} className=" rounded-lg overflow-hidden bg-gray-50 dark:bg-gray-800  transition hover:shadow-xl border">
      <div className=" dark:text-gray-500  ">
        {/* {children.children} */}
        <Image src={children.image} width="250" alt="img" height="200" />
      </div>
    <CardHeader className="p-4 bg-gray-50">
      <CardTitle className="text-sm leading-1 text-center">{children.heading}</CardTitle>
      {/*<CardDescription>Deploy your new project in one-click.</CardDescription>*/}
    </CardHeader>
    </Card>
  );
}