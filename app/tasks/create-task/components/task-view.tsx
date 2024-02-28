
'use client';

import { RadioTowerIcon,GaugeIcon, DicesIcon, ShoppingBasketIcon, BrushIcon, WavesIcon , WindIcon, CopyrightIcon, BadgeDollarSignIcon } from "lucide-react";
type IconProps = React.SVGProps<SVGSVGElement>;
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Image from "next/image"
import { useSearchParams, usePathname, useRouter } from 'next/navigation';

import { partition } from "lodash";
import { useDebouncedCallback } from 'use-debounce';


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
    heading:'Logo Design',
    value:'Logo Design',
    image:"https://placehold.co/600x400/png",
    children:'Graphics',
    bg:'',
    color:'',
  }, 
  {
    heading:'Business Cards',
    value:'Business Cards',
    image:"https://placehold.co/600x400/png",
    children:'Graphics',
    bg:'',
    color:'',
  },
  {
    heading:'Stationery Design',
    value:'Stationery Design',
    image:"https://placehold.co/600x400/png",
    children:'Graphics',
    bg:'',
    color:'',
  },
  {
    heading:'Brand Guidelines',
    value:'Brand Guidelines',
    image:"https://placehold.co/600x400/png",
    children:'Graphics',
    bg:'',
    color:'',
  },
  {
    heading:'Brochures',
    value:'Brochures',
    image:"https://placehold.co/600x400/png",
    children:'Graphics',
    bg:'',
    color:'',
  },
  {
    heading:'Flyers',
    value:'Flyers',
    image:"https://placehold.co/600x400/png",
    children:'Graphics',
    bg:'',
    color:'',
  },
  {
    heading:'Posters',
    value:'Posters',
    image:"https://placehold.co/600x400/png",
    children:'Graphics',
    bg:'',
    color:'',
  },
  {
    heading:'Banners and Signage',
    value:'Banners and Signage',
    image:"https://placehold.co/600x400/png",
    children:'Graphics',
    bg:'',
    color:'',
  },
  {
    heading:'Advertisements',
    value:'Advertisements',
    image:"https://placehold.co/600x400/png",
    children:'Graphics',
    bg:'',
    color:'',
  },
  {
    heading:'Packaging Design',
    value:'Packaging Design',
    image:"https://placehold.co/600x400/png",
    children:'Graphics',
    bg:'',
    color:'',
  },
  {
    heading:'Label Design',
    value:'Label Design',
    image:"https://placehold.co/600x400/png",
    children:'Graphics',
    bg:'',
    color:'',
  },
  {
    heading:'Book Design',
    value:'Book Design',
    image:"https://placehold.co/600x400/png",
    children:'Graphics',
    bg:'',
    color:'',
  },
  {
    heading:'Magazine Layout',
    value:'Magazine Layout',
    image:"https://placehold.co/600x400/png",
    children:'Graphics',
    bg:'',
    color:'',
  },
  {
    heading:'Magazine Layout',
    value:'Magazine Layout',
    image:"https://placehold.co/600x400/png",
    children:'Graphics',
    bg:'',
    color:'',
  },
  {
    heading:'Newsletter Design',
    value:'Newsletter Design',
    image:"https://placehold.co/600x400/png",
    children:'Graphics',
    bg:'',
    color:'',
  },
  {
    heading:'Annual Reports',
    value:'Annual Reports',
    image:"https://placehold.co/600x400/png",
    children:'Graphics',
    bg:'',
    color:'',
  },
  {
    heading:'Infographics',
    value:'Infographics',
    image:"https://placehold.co/600x400/png",
    children:'Graphics',
    bg:'',
    color:'',
  },
  {
    heading:'UX/UI Design',
    value:'UX/UI Design',
    image:"https://placehold.co/600x400/png",
    children:'Graphics',
    bg:'',
    color:'',
  },
  {
    heading:'Landing Page Design',
    value:'Landing Page Design',
    image:"https://placehold.co/600x400/png",
    children:'Graphics',
    bg:'',
    color:'',
  },
  {
    heading:'Website Design',
    value:'Website Design',
    image:"https://placehold.co/600x400/png",
    children:'Graphics',
    bg:'',
    color:'',
  },
  {
    heading:'Mobile App Design',
    value:'Mobile App Design',
    image:"https://placehold.co/600x400/png",
    children:'Graphics',
    bg:'',
    color:'',
  },
  {
    heading:'Email Templates',
    value:'Email Templates',
    image:"https://placehold.co/600x400/png",
    children:'Graphics',
    bg:'',
    color:'',
  },
  {
    heading:'Presentation Design',
    value:'Presentation Design',
    image:"https://placehold.co/600x400/png",
    children:'Graphics',
    bg:'',
    color:'',
  },
  {
    heading:'Menu Design',
    value:'Menu Design',
    image:"https://placehold.co/600x400/png",
    children:'Graphics',
    bg:'',
    color:'',
  },
  {
    heading:'Exhibition Displays',
    value:'Exhibition Displays',
    image:"https://placehold.co/600x400/png",
    children:'Graphics',
    bg:'',
    color:'',
  },
  {
    heading:'Vehicle Wraps',
    value:'Vehicle Wraps',
    image:"https://placehold.co/600x400/png",
    children:'Graphics',
    bg:'',
    color:'',
  },
  {
    heading:'T-shirt and Merchandise Design',
    value:'T-shirt and Merchandise Design',
    image:"https://placehold.co/600x400/png",
    children:'Graphics',
    bg:'',
    color:'',
  },
  {
    heading:'Invitation Design',
    value:'Invitation Design',
    image:"https://placehold.co/600x400/png",
    children:'Graphics',
    bg:'',
    color:'',
  },
  {
    heading:'Branded Giveaways',
    value:'Branded Giveaways',
    image:"https://placehold.co/600x400/png",
    children:'Graphics',
    bg:'',
    color:'',
  },
  {
    heading:'3D Graphics',
    value:'3D Graphics',
    image:"https://placehold.co/600x400/png",
    children:'Graphics',
    bg:'',
    color:'',
  },
  {
    heading:'Video Editing',
    value:'Video Editing',
    image:"https://placehold.co/600x400/png",
    children:'Graphics',
    bg:'',
    color:'',
  },
  {
    heading:'Icon Design',
    value:'Icon Design',
    image:"https://placehold.co/600x400/png",
    children:'Graphics',
    bg:'',
    color:'',
  },
  {
    heading:'Typography',
    value:'Typography',
    image:"https://placehold.co/600x400/png",
    children:'Graphics',
    bg:'',
    color:'',
  },
  {
    heading:'Photography Editing',
    value:'Photography Editing',
    image:"https://placehold.co/600x400/png",
    children:'Graphics',
    bg:'',
    color:'',
  },
  {
    heading:'Interactive Design',
    value:'Interactive Design',
    image:"https://placehold.co/600x400/png",
    children:'Graphics',
    bg:'',
    color:'',
  },
  {
    heading:'Etsy',
    value:'Etsy',
    image:"https://placehold.co/600x400/png",
    children:'Social Media Graphics',
    bg:'',
    color:'',
  },
  {
    heading:'Facebook',
    value:'Facebook',
    image:"https://placehold.co/600x400/png",
    children:'Social Media Graphics',
    bg:'',
    color:'',
  },
  {
    heading:'Instagram',
    value:'Instagram',
    image:"https://placehold.co/600x400/png",
    children:'Social Media Graphics',
    bg:'',
    color:'',
  },
  {
    heading:'LinkedIn',
    value:'LinkedIn',
    image:"https://placehold.co/600x400/png",
    children:'Social Media Graphics',
    bg:'',
    color:'',
  },
  {
    heading:'Other Social Media Graphics',
    value:'Other Social Media Graphics',
    image:"https://placehold.co/600x400/png",
    children:'Social Media Graphics',
    bg:'',
    color:'',
  },
  {
    heading:'Pinterest',
    value:'Pinterest',
    image:"https://placehold.co/600x400/png",
    children:'Social Media Graphics',
    bg:'',
    color:'',
  },
  {
    heading:'Social Media Collateral',
    value:'Social Media Collateral',
    image:"https://placehold.co/600x400/png",
    children:'Social Media Graphics',
    bg:'',
    color:'',
  },
  {
    heading:'Tik Tok',
    value:'Tik Tok',
    image:"https://placehold.co/600x400/png",
    children:'Social Media Graphics',
    bg:'',
    color:'',
  },
  {
    heading:'X (Twitter Post)',
    value:'X (Twitter Post)',
    image:"https://placehold.co/600x400/png",
    children:'Social Media Graphics',
    bg:'',
    color:'',
  },
  {
    heading:'Youtube',
    value:'Youtube',
    image:"https://placehold.co/600x400/png",
    children:'Social Media Graphics',
    bg:'',
    color:'',
  },
  {
    heading:'PPC Ads',
    value:'PPC Ads',
    image:"https://placehold.co/600x400/png",
    children:'Paid Ads',
    bg:'',
    color:'',
  },
  {
    heading:'Display Ads',
    value:'Display Ads',
    image:"https://placehold.co/600x400/png",
    children:'Paid Ads',
    bg:'',
    color:'',
  },
  {
    heading:'Meta Ads',
    value:'Meta Ads',
    image:"https://placehold.co/600x400/png",
    children:'Paid Ads',
    bg:'',
    color:'',
  },
  {
    heading:'X (Twitter) Ads',
    value:'X (Twitter) Ads',
    image:"https://placehold.co/600x400/png",
    children:'Paid Ads',
    bg:'',
    color:'',
  },
  {
    heading:'Pinterst Ads',
    value:'Pinterst Ads',
    image:"https://placehold.co/600x400/png",
    children:'Paid Ads',
    bg:'',
    color:'',
  },
  {
    heading:'LinkedIn Ads',
    value:'LinkedIn Ads',
    image:"https://placehold.co/600x400/png",
    children:'Paid Ads',
    bg:'',
    color:'',
  },
  {
    heading:'Tik Tok Ads',
    value:'Tik Tok Ads',
    image:"https://placehold.co/600x400/png",
    children:'Paid Ads',
    bg:'',
    color:'',
  },
  {
    heading:'Billboard',
    value:'Billboard',
    image:"https://placehold.co/600x400/png",
    children:'Paid Ads',
    bg:'',
    color:'',
  },
  {
    heading:'Brand Kit',
    value:'Brand Kit',
    image:"https://placehold.co/600x400/png",
    children:'Paid Ads',
    bg:'',
    color:'',
  },
  {
    heading:'Swag Site',
    value:'Swag Site',
    image:"https://placehold.co/600x400/png",
    children:'Paid Ads',
    bg:'',
    color:'',
  },
  {
    heading:'Corporate Merchaindise Bundle',
    value:'Corporate Merchaindise Bundle',
    image:"https://placehold.co/600x400/png",
    children:'Apparel',
    bg:'',
    color:'',
  },
  {
    heading:'Pen Design',
    value:'Pen Design',
    image:"https://placehold.co/600x400/png",
    children:'Apparel',
    bg:'',
    color:'',
  },
  {
    heading:'Mug Graphics',
    value:'Mug Graphics',
    image:"https://placehold.co/600x400/png",
    children:'Apparel',
    bg:'',
    color:'',
  },
  {
    heading:'Other Merchandise',
    value:'Other Merchandise',
    image:"https://placehold.co/600x400/png",
    children:'Apparel',
    bg:'',
    color:'',
  },
  {
    heading:'Shirt Graphics',
    value:'Shirt Graphics',
    image:"https://placehold.co/600x400/png",
    children:'Apparel',
    bg:'',
    color:'',
  },
  {
    heading:'Stickers',
    value:'Stickers',
    image:"https://placehold.co/600x400/png",
    children:'Apparel',
    bg:'',
    color:'',
  },
  {
    heading:'Explainer Videos',
    value:'Explainer Videos',
    image:"https://placehold.co/600x400/png",
    children:'Motion Graphics',
    bg:'',
    color:'',
  },
  {
    heading:'Animated Logos',
    value:'Animated Logos',
    image:"https://placehold.co/600x400/png",
    children:'Motion Graphics',
    bg:'',
    color:'',
  },
  {
    heading:'Animated Infographics',
    value:'Animated Infographics',
    image:"https://placehold.co/600x400/png",
    children:'Motion Graphics',
    bg:'',
    color:'',
  },
  {
    heading:'Animated Intro/Outro',
    value:'Animated Intro/Outro',
    image:"https://placehold.co/600x400/png",
    children:'Motion Graphics',
    bg:'',
    color:'',
  },
  {
    heading:'Social Media Animations',
    value:'Social Media Animations',
    image:"https://placehold.co/600x400/png",
    children:'Motion Graphics',
    bg:'',
    color:'',
  },
  {
    heading:'Event Invitations and Promotions',
    value:'Event Invitations and Promotions',
    image:"https://placehold.co/600x400/png",
    children:'Motion Graphics',
    bg:'',
    color:'',
  },
  {
    heading:'Product Demos',
    value:'Product Demos',
    image:"https://placehold.co/600x400/png",
    children:'Motion Graphics',
    bg:'',
    color:'',
  },
  {
    heading:'GIF',
    value:'GIF',
    image:"https://placehold.co/600x400/png",
    children:'Motion Graphics',
    bg:'',
    color:'',
  },
  {
    heading:'Radio Scripts',
    value:'Radio Scripts',
    image:"https://placehold.co/600x400/png",
    children:'CopyWriting',
    bg:'',
    color:'',
  },
  {
    heading:'Blog',
    value:'Blog',
    image:"https://placehold.co/600x400/png",
    children:'CopyWriting',
    bg:'',
    color:'',
  },
  {
    heading:'Product Desciptions',
    value:'Product Desciptions',
    image:"https://placehold.co/600x400/png",
    children:'CopyWriting',
    bg:'',
    color:'',
  },
  {
    heading:'User Manuals',
    value:'User Manuals',
    image:"https://placehold.co/600x400/png",
    children:'CopyWriting',
    bg:'',
    color:'',
  },
  {
    heading:'Techincal Guide',
    value:'Techincal Guide',
    image:"https://placehold.co/600x400/png",
    children:'CopyWriting',
    bg:'',
    color:'',
  },
  {
    heading:'FAQ Section',
    value:'FAQ Section',
    image:"https://placehold.co/600x400/png",
    children:'CopyWriting',
    bg:'',
    color:'',
  },
  {
    heading:'Interview Questions',
    value:'Interview Questions',
    image:"https://placehold.co/600x400/png",
    children:'CopyWriting',
    bg:'',
    color:'',
  },
  {
    heading:'Presentation Scripts',
    value:'Presentation Scripts',
    image:"https://placehold.co/600x400/png",
    children:'CopyWriting',
    bg:'',
    color:'',
  },
  {
    heading:'Whitepaper',
    value:'Whitepaper',
    image:"https://placehold.co/600x400/png",
    children:'CopyWriting',
    bg:'',
    color:'',
  },
  {
    heading:'Casestudies',
    value:'Casestudies',
    image:"https://placehold.co/600x400/png",
    children:'CopyWriting',
    bg:'',
    color:'',
  },
  {
    heading:'Internall Communciations',
    value:'Internall Communciations',
    image:"https://placehold.co/600x400/png",
    children:'CopyWriting',
    bg:'',
    color:'',
  },
  {
    heading:'Slogans & Taglines',
    value:'Slogans & Taglines',
    image:"https://placehold.co/600x400/png",
    children:'CopyWriting',
    bg:'',
    color:'',
  },
  {
    heading:'Press Release',
    value:'Press Release',
    image:"https://placehold.co/600x400/png",
    children:'CopyWriting',
    bg:'',
    color:'',
  },
  {
    heading:'Email Campaigns',
    value:'Email Campaigns',
    image:"https://placehold.co/600x400/png",
    children:'CopyWriting',
    bg:'',
    color:'',
  },
  {
    heading:'Direct Mailers',
    value:'Direct Mailers',
    image:"https://placehold.co/600x400/png",
    children:'CopyWriting',
    bg:'',
    color:'',
  },

];



const categoryTitles: CategoryTitle[] = [
  {
    label: "Graphics",
    value: "Graphics",
    icon:BrushIcon,
    bg:"bg-green-100 ",
    color:"text-green-800"
  },
  {
    label: "Social Media Graphics",
    value: "Social Media Graphics",
    icon:RadioTowerIcon,
    bg:"bg-yellow-100",
    color:"text-yellow-800"
  },
  {
    label: "Paid Ads",
    value: "Paid Ads",
    icon:BadgeDollarSignIcon,
    bg:"bg-yellow-100",
    color:"text-yellow-800"
  },
  {
    label: "Apparel",
    value: "Apparel",
    icon:WavesIcon,
    bg:"bg-yellow-100",
    color:"text-yellow-800"
  },
  {
    label: "Motion Graphics",
    value: "Motion Graphics",
    icon:WindIcon,
    bg:"bg-yellow-100",
    color:"text-yellow-800"
  },
  {
    label: "CopyWriting",
    value: "CopyWriting",
    icon:CopyrightIcon,
    bg:"bg-yellow-100",
    color:"text-yellow-800"
  },
  {
    label: "All",
    value: "",
    icon:CopyrightIcon,
    bg:"bg-yellow-100",
    color:"text-yellow-800"
  },
  
]

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

    const params =  new URLSearchParams();
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
      <CardTitle className="text-lg text-center">{children.heading}</CardTitle>
      {/*<CardDescription>Deploy your new project in one-click.</CardDescription>*/}
    </CardHeader>
    </Card>
  );
}