
import { RadioTowerIcon,GaugeIcon, DicesIcon, ShoppingBasketIcon } from "lucide-react";

type IconProps = React.SVGProps<SVGSVGElement>;

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Image from "next/image"

type CategoryTitle = {
  label:string,
  value:string,
  icon:React.ForwardRefExoticComponent<IconProps & React.RefAttributes<SVGSVGElement>>,
  bg:string,
  color:string,
}


type TaskTypeTitle = {
  heading:string,
  value:string,
  image:string,
  children:string,
  bg:string,
  color:string,
}

const taskTitles: TaskTypeTitle[] = [
  {
    heading:'Facebook',
    value:'',
    image:"https://placehold.co/600x400/png",
    children:'',
    bg:'',
    color:'',
  }, 
  {
    heading:'Instagram',
    value:'',
    image:"https://placehold.co/600x400/png",
    children:'',
    bg:'',
    color:'',
  },
  {
    heading:'TikTok',
    value:'',
    image:"https://placehold.co/600x400/png",
    children:'',
    bg:'',
    color:'',
  },
  {
    heading:'Snapchat',
    value:'',
    image:"https://placehold.co/600x400/png",
    children:'',
    bg:'',
    color:'',
  },
  {
    heading:'Twiter',
    value:'',
    image:"https://placehold.co/600x400/png",
    children:'<><Image src="https://placehold.co/600x400/png" width="100" alt="img" height="100" /></>',
    bg:'',
    color:'',
  },
  {
    heading:'Twitch',
    value:'',
    image:"https://placehold.co/600x400/png",
    children:'<><Image src="https://placehold.co/600x400/png" width="100" alt="img" height="100" /></>',
    bg:'',
    color:'',
  },
  {
    heading:'Linkedin',
    value:'',
    image:"https://placehold.co/600x400/png",
    children:'<><Image src="https://placehold.co/600x400/png" width="100" alt="img" height="100" /></>',
    bg:'',
    color:'',
  },
  {
    heading:'Pinterest',
    value:'',
    image:"https://placehold.co/600x400/png",
    children:'<><Image src="https://placehold.co/600x400/png" width="100" alt="img" height="100" /></>',
    bg:'',
    color:'',
  },
  {
    heading:'YouTube',
    value:'',
    image:"https://placehold.co/600x400/png",
    children:'<><Image src="https://placehold.co/600x400/png" width="100" alt="img" height="100" /></>',
    bg:'',
    color:'',
  },
  {
    heading:'Vemio',
    value:'',
    image:"https://placehold.co/600x400/png",
    children:'<><Image src="https://placehold.co/600x400/png" width="100" alt="img" height="100" /></>',
    bg:'',
    color:'',
  },
  {
    heading:'ShareChat',
    value:'',
    image:"https://placehold.co/600x400/png",
    children:'<><Image src="https://placehold.co/600x400/png" width="100" alt="img" height="100" /></>',
    bg:'',
    color:'',
  },
  {
    heading:'Telegram',
    value:'',
    image:"https://placehold.co/600x400/png",
    children:'<><Image src="https://placehold.co/600x400/png" width="100" alt="img" height="100" /></>',
    bg:'',
    color:'',
  },
  {
    heading:'Whatsapp',
    value:'',
    image:"https://placehold.co/600x400/png",
    children:'<><Image src="https://placehold.co/600x400/png" width="100" alt="img" height="100" /></>',
    bg:'',
    color:'',
  },
];



const categoryTitles: CategoryTitle[] = [
  {
    label: "Most Used",
    value: "most used",
    icon:RadioTowerIcon,
    bg:"bg-green-100 ",
    color:"text-green-800"
  },
  {
    label: "Social Media ",
    value: "social-media",
    icon:GaugeIcon,
    bg:"bg-yellow-100",
    color:"text-yellow-800"
  },
  {
    label: "Others",
    value: "orthers",
    icon:DicesIcon,
    bg:"bg-yellow-100",
    color:"text-yellow-800"
  },
  {
    label: "Products",
    value: "medium",
    icon:ShoppingBasketIcon,
    bg:"bg-yellow-100",
    color:"text-yellow-800"
  }
]

export default function TaskView() {
  return (
    <>
    <div className="flex justify-between">
      <aside id="default-sidebar" className="sticky top-5 w-1/4 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
            <ul className="space-y-2 font-medium">
              
              {categoryTitles.map((category,i)=>{
                return <li key={i}>
                  <ListIcon children={category}></ListIcon>
                </li>;
              })}

            </ul>
        </div>
      </aside>

      <div className="p-4 w-3/4 max-h-screen overflow-auto  ">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-4">
              {taskTitles.map((title,i)=>{
                return < div key={i}>
                  <ListTitle children={title}></ListTitle>
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
  return (
  <a href="#" className="bg-white flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-sky-100 hover:text-blue-600 group">
    <children.icon />
    <span className="ms-3">{children.label}</span>
  </a>
  );
}


function ListTitle({ children }: { children: TaskTypeTitle }){
  return (
 
    <Card className=" rounded-lg overflow-hidden bg-gray-50 dark:bg-gray-800  transition hover:shadow-xl border">
      <div className=" dark:text-gray-500  ">
        {/* {children.children} */}
        <Image src={children.image} width="250" alt="img" height="200" />
      </div>
    <CardHeader className="p-4 bg-gray-50">
      <CardTitle className="text-lg text-center">{children.heading}</CardTitle>
      {/*<CardDescription>Deploy your new project in one-click.</CardDescription>*/}
    </CardHeader>
    </Card>
  );
}