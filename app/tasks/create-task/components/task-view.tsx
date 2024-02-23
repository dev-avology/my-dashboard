
import { RadioTowerIcon,GaugeIcon, DicesIcon, ShoppingBasketIcon } from "lucide-react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";



type CategoryTitle = {
  label:string,
  value:string,
  icon:React.ReactNode,
  bg:string,
  color:string,
}


type TaskTypeTitle = {
  heading:string,
  value:string,
  children:React.ReactNode,
  bg:string,
  color:string,
}

const taskTitles: TaskTypeTitle[] = [
  {
    heading:'Facebook',
    value:'',
    children:<><img src="https://placehold.co/600x400/png"/></>,
    bg:'',
    color:'',
  }, 
  {
    heading:'Instagram',
    value:'',
    children:<><img src="https://placehold.co/600x400/png"/></>,
    bg:'',
    color:'',
  },
  {
    heading:'TikTok',
    value:'',
    children:<><img src="https://placehold.co/600x400/png"/></>,
    bg:'',
    color:'',
  },
  {
    heading:'Snapchat',
    value:'',
    children:<><img src="https://placehold.co/600x400/png"/></>,
    bg:'',
    color:'',
  },
  {
    heading:'Twiter',
    value:'',
    children:<><img src="https://placehold.co/600x400/png"/></>,
    bg:'',
    color:'',
  },
  {
    heading:'Twitch',
    value:'',
    children:<><img src="https://placehold.co/600x400/png"/></>,
    bg:'',
    color:'',
  },
  {
    heading:'Linkedin',
    value:'',
    children:<><img src="https://placehold.co/600x400/png"/></>,
    bg:'',
    color:'',
  },
  {
    heading:'Pinterest',
    value:'',
    children:<><img src="https://placehold.co/600x400/png"/></>,
    bg:'',
    color:'',
  },
  {
    heading:'YouTube',
    value:'',
    children:<><img src="https://placehold.co/600x400/png"/></>,
    bg:'',
    color:'',
  },
  {
    heading:'Vemio',
    value:'',
    children:<><img src="https://placehold.co/600x400/png"/></>,
    bg:'',
    color:'',
  },
  {
    heading:'ShareChat',
    value:'',
    children:<><img src="https://placehold.co/600x400/png"/></>,
    bg:'',
    color:'',
  },
  {
    heading:'Telegram',
    value:'',
    children:<><img src="https://placehold.co/600x400/png"/></>,
    bg:'',
    color:'',
  },
  {
    heading:'Whatsapp',
    value:'',
    children:<><img src="https://placehold.co/600x400/png"/></>,
    bg:'',
    color:'',
  },
];



const categoryTitles: CategoryTitle[] = [
  {
    label: "Most Used",
    value: "most used",
    icon:<RadioTowerIcon/>,
    bg:"bg-green-100 ",
    color:"text-green-800"
  },
  {
    label: "Social Media ",
    value: "social-media",
    icon:<GaugeIcon/>,
    bg:"bg-yellow-100",
    color:"text-yellow-800"
  },
  {
    label: "Others",
    value: "orthers",
    icon:<DicesIcon/>,
    bg:"bg-yellow-100",
    color:"text-yellow-800"
  },
  {
    label: "Products",
    value: "medium",
    icon:<ShoppingBasketIcon/>,
    bg:"bg-yellow-100",
    color:"text-yellow-800"
  },
  
]

export default function TaskView() {
  return (
    <>
    <div className="flex justify-between">
      <aside id="default-sidebar" className="sticky top-5 w-1/4 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
            <ul className="space-y-2 font-medium">
              
              {categoryTitles.map((category)=>{
                return <li>
                  <ListIcon children={category}></ListIcon>
                </li>;
              })}

            </ul>
        </div>
      </aside>

      <div className="p-4 w-3/4 max-h-screen overflow-auto  ">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
            <div className="grid grid-cols-4 gap-4 mb-4">
            {taskTitles.map((title)=>{
                return <>
                  <ListTitle children={title}></ListTitle>
                </>;
              })}
             </div>
        </div>
      </div>
    </div>
    </>
  );
}

function ListIcon({ children }: { children: CategoryTitle }){
  return (<a href="#" className="bg-white flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-sky-100 hover:text-blue-600 group">
  {children.icon}
  <span className="ms-3">{children.label}</span>
</a>);
}


function ListTitle({ children }: { children: TaskTypeTitle }){
  return (
 
  <Card className=" rounded-lg overflow-hidden bg-gray-50 dark:bg-gray-800  transition hover:shadow-xl border">
    <div className=" dark:text-gray-500  ">
       {children.children}
    </div>
    <CardHeader className="p-4 bg-gray-50">
      <CardTitle className="text-lg text-center">{children.heading}</CardTitle>
      {/*<CardDescription>Deploy your new project in one-click.</CardDescription>*/}
    </CardHeader>
  </Card>
);
}