import { RadioTowerIcon,GaugeIcon, DicesIcon, ShoppingBasketIcon, BrushIcon, WavesIcon , WindIcon, CopyrightIcon, BadgeDollarSignIcon } from "lucide-react";
import { TaskTypeTitle,CategoryTitle,BrandInfoType, DocFormatType,TaskSizeType } from "./global-types";
import { inter,lusitana, notoSans, openSans, roboto } from "@/app/ui/fonts";



export const taskTitles: TaskTypeTitle[] = [
    {
      heading:'Logo Design',
      value:'Logo Design',
      image:"/services/Logo-Design.jpg",
      children:'Graphics',
      bg:'',
      color:'',
      brandingType:'logo',
      sizes:['twitter 1500x500','facebook 1200 x 630','youtube 2560 x 1440','Instagram 1080 x 1920','YouTube Video 1280 x 720','LinkedIn Company Page Banner 646 x 220 min','Twiter Profile 400 x 400','Facebook Cover 820 x 312' ]
    }, 
    {
      heading:'Business Cards',
      value:'Business Cards',
      image:"/services/Business-Cards.jpg",
      children:'Graphics',
      brandingType:'business-card',
      bg:'',
      color:'',
    },
    {
      heading:'Stationery Design',
      value:'Stationery Design',
      image:"/services/Stationery-Design.jpg",
      children:'Graphics',
      brandingType:'design',
      bg:'',
      color:'',
    },
    {
      heading:'Brand Guidelines',
      value:'Brand Guidelines',
      image:"/services/Brand-Guidelines.jpg",
      children:'Graphics',
      brandingType:'brand',
      bg:'',
      color:'',
    },
    {
      heading:'Brochures',
      value:'Brochures',
      image:"/services/Brochures.jpg",
      children:'Graphics',
      bg:'',
      color:'',
    },
    {
      heading:'Flyers',
      value:'Flyers',
      image:"/services/Flyers.jpg",
      children:'Graphics',
      bg:'',
      color:'',
    },
    {
      heading:'Posters',
      value:'Posters',
      image:"/services/Posters.jpg",
      children:'Graphics',
      bg:'',
      color:'',
    },
    {
      heading:'Banners and Signage',
      value:'Banners and Signage',
      image:"/services/Banners-and-Signage.jpg",
      children:'Graphics',
      bg:'',
      color:'',
      sizes:[ 'YouTube Video 1280 x 720','LinkedIn Company Page Banner 646 x 220 min','Twiter Profile 400 x 400','Facebook Cover 820 x 312' ]
    },
    {
      heading:'Advertisements',
      value:'Advertisements',
      image:"/services/Advertisements.jpg",
      children:'Graphics',
      bg:'',
      color:'',
    },
    {
      heading:'Packaging Design',
      value:'Packaging Design',
      image:"/services/Packaging-Design.jpg",
      children:'Graphics',
      bg:'',
      color:'',
    },
    {
      heading:'Label Design',
      value:'Label Design',
      image:"/services/Label-Design.jpg",
      children:'Graphics',
      bg:'',
      color:'',
    },
    {
      heading:'Book Design',
      value:'Book Design',
      image:"/services/Book-Design.jpg",
      children:'Graphics',
      bg:'',
      color:'',
    },
    {
      heading:'Magazine Layout',
      value:'Magazine Layout',
      image:"/services/Magazine-Layout.jpg",
      children:'Graphics',
      bg:'',
      color:'',
    },
    {
      heading:'Newsletter Design',
      value:'Newsletter Design',
      image:"/services/Newsletter-Design.jpg",
      children:'Graphics',
      bg:'',
      color:'',
    },
    {
      heading:'Annual Reports',
      value:'Annual Reports',
      image:"/services/Annual-Reports.jpg",
      children:'Graphics',
      bg:'',
      color:'',
    },
    {
      heading:'Infographics',
      value:'Infographics',
      image:"/services/Infographics.jpg",
      children:'Graphics',
      bg:'',
      color:'',
    },
    {
      heading:'UX/UI Design',
      value:'UX/UI Design',
      image:"/services/UXUI-Design.jpg",
      children:'Graphics',
      bg:'',
      color:'',
    },
    {
      heading:'Landing Page Design',
      value:'Landing Page Design',
      image:"/services/Landing-Page-Design.jpg",
      children:'Graphics',
      bg:'',
      color:'',
    },
    {
      heading:'Website Design',
      value:'Website Design',
      image:"/services/Website-Design.jpg",
      children:'Graphics',
      bg:'',
      color:'',
    },
    {
      heading:'Mobile App Design',
      value:'Mobile App Design',
      image:"/services/Mobile-App-Design.jpg",
      children:'Graphics',
      bg:'',
      color:'',
    },
    {
      heading:'Email Templates',
      value:'Email Templates',
      image:"/services/Email-Templates.jpg",
      children:'Graphics',
      bg:'',
      color:'',
    },
    {
      heading:'Presentation Design',
      value:'Presentation Design',
      image:"/services/Presentation-Design.jpg",
      children:'Graphics',
      bg:'',
      color:'',
    },
    {
      heading:'Menu Design',
      value:'Menu Design',
      image:"/services/Menu-Design.jpg",
      children:'Graphics',
      bg:'',
      color:'',
    },
    {
      heading:'Exhibition Displays',
      value:'Exhibition Displays',
      image:"/services/Exhibition-Displays.jpg",
      children:'Graphics',
      bg:'',
      color:'',
    },
    {
      heading:'Vehicle Wraps',
      value:'Vehicle Wraps',
      image:"/services/Vehicle-Wraps.jpg",
      children:'Graphics',
      bg:'',
      color:'',
    },
    {
      heading:'T-shirt and Merchandise Design',
      value:'T-shirt and Merchandise Design',
      image:"/services/T-shirt-and-Merchandise-Design.jpg",
      children:'Graphics',
      bg:'',
      color:'',
    },
    {
      heading:'Invitation Design',
      value:'Invitation Design',
      image:"/services/Invitation-Design.jpg",
      children:'Graphics',
      bg:'',
      color:'',
    },
    {
      heading:'Branded Giveaways',
      value:'Branded Giveaways',
      image:"/services/Branded-Giveaways.jpg",
      children:'Graphics',
      bg:'',
      color:'',
    },
    {
      heading:'3D Graphics',
      value:'3D Graphics',
      image:"/services/3D-Graphics.jpg",
      children:'Graphics',
      bg:'',
      color:'',
    },
    {
      heading:'Video Editing',
      value:'Video Editing',
      image:"/services/Video-Editing.jpg",
      children:'Graphics',
      bg:'',
      color:'',
    },
    {
      heading:'Icon Design',
      value:'Icon Design',
      image:"/services/Icon-Design.jpg",
      children:'Graphics',
      bg:'',
      color:'',
    },
    {
      heading:'Typography',
      value:'Typography',
      image:"/services/Typography.jpg",
      children:'Graphics',
      bg:'',
      color:'',
    },
    {
      heading:'Photography Editing',
      value:'Photography Editing',
      image:"/services/Photography-Editing.jpg",
      children:'Graphics',
      bg:'',
      color:'',
    },
    {
      heading:'Interactive Design',
      value:'Interactive Design',
      image:"/services/Interactive-Design.jpg",
      children:'Graphics',
      bg:'',
      color:'',
    },
    {
      heading:'Etsy',
      value:'Etsy',
      image:"/services/Etsy.jpg",
      children:'Social Media Graphics',
      bg:'',
      color:'',
    },
    {
      heading:'Facebook',
      value:'Facebook',
      image:"/services/Facebook.jpg",
      children:'Social Media Graphics',
      bg:'',
      color:'',
    },
    {
      heading:'Instagram',
      value:'Instagram',
      image:"/services/Instagram.jpg",
      children:'Social Media Graphics',
      bg:'',
      color:'',
    },
    {
      heading:'LinkedIn',
      value:'LinkedIn',
      image:"/services/LinkedIn.jpg",
      children:'Social Media Graphics',
      bg:'',
      color:'',
    },
    {
      heading:'Other Social Media Graphics',
      value:'Other Social Media Graphics',
      image:"/services/Other-Social-Media-Graphics.jpg",
      children:'Social Media Graphics',
      bg:'',
      color:'',
    },
    {
      heading:'Pinterest',
      value:'Pinterest',
      image:"/services/Pinterest.jpg",
      children:'Social Media Graphics',
      bg:'',
      color:'',
    },
    {
      heading:'Social Media Collateral',
      value:'Social Media Collateral',
      image:"/services/Social-Media-Collateral.jpg",
      children:'Social Media Graphics',
      bg:'',
      color:'',
    },
    {
      heading:'Tik Tok',
      value:'Tik Tok',
      image:"/services/Tik-Tok.jpg",
      children:'Social Media Graphics',
      bg:'',
      color:'',
    },
    {
      heading:'X (Twitter Post)',
      value:'X (Twitter Post)',
      image:"/services/X-twiter-post.jpg",
      children:'Social Media Graphics',
      bg:'',
      color:'',
    },
    {
      heading:'Youtube',
      value:'Youtube',
      image:"/services/Youtube.jpg",
      children:'Social Media Graphics',
      bg:'',
      color:'',
    },
    {
      heading:'PPC Ads',
      value:'PPC Ads',
      image:"/services/PPC-Ads.jpg",
      children:'Paid Ads',
      bg:'',
      color:'',
    },
    {
      heading:'Display Ads',
      value:'Display Ads',
      image:"/services/Display-Ads.jpg",
      children:'Paid Ads',
      bg:'',
      color:'',
    },
    {
      heading:'Meta Ads',
      value:'Meta Ads',
      image:"/services/Meta-Ads.jpg",
      children:'Paid Ads',
      bg:'',
      color:'',
    },
    {
      heading:'X (Twitter) Ads',
      value:'X (Twitter) Ads',
      image:"/services/X-Twitter-Ads.jpg",
      children:'Paid Ads',
      bg:'',
      color:'',
    },
    {
      heading:'Pinterst Ads',
      value:'Pinterst Ads',
      image:"/services/Pinterst-Ads.jpg",
      children:'Paid Ads',
      bg:'',
      color:'',
    },
    {
      heading:'LinkedIn Ads',
      value:'LinkedIn Ads',
      image:"/services/LinkedIn-Ads.jpg",
      children:'Paid Ads',
      bg:'',
      color:'',
    },
    {
      heading:'Tik Tok Ads',
      value:'Tik Tok Ads',
      image:"/services/Tik-Tok-Ads.jpg",
      children:'Paid Ads',
      bg:'',
      color:'',
    },
    {
      heading:'Billboard',
      value:'Billboard',
      image:"/services/Billboard.jpg",
      children:'Paid Ads',
      bg:'',
      color:'',
    },
    {
      heading:'Brand Kit',
      value:'Brand Kit',
      image:"/services/Brand-Kit.jpg",
      children:'Paid Ads',
      bg:'',
      color:'',
    },
    {
      heading:'Swag Site',
      value:'Swag Site',
      image:"/services/Swag-Site.jpg",
      children:'Paid Ads',
      bg:'',
      color:'',
    },
    {
      heading:'Corporate Merchaindise Bundle',
      value:'Corporate Merchaindise Bundle',
      image:"/services/Corporate-Merchaindise-Bundle.jpg",
      children:'Apparel',
      bg:'',
      color:'',
    },
    {
      heading:'Pen Design',
      value:'Pen Design',
      image:"/services/Pen-Design.jpg",
      children:'Apparel',
      bg:'',
      color:'',
    },
    {
      heading:'Mug Graphics',
      value:'Mug Graphics',
      image:"/services/Mug-Graphics.jpg",
      children:'Apparel',
      bg:'',
      color:'',
    },
    {
      heading:'Other Merchandise',
      value:'Other Merchandise',
      image:"/services/Other-Merchandise.jpg",
      children:'Apparel',
      bg:'',
      color:'',
    },
    {
      heading:'Shirt Graphics',
      value:'Shirt Graphics',
      image:"/services/Shirt-Graphics.jpg",
      children:'Apparel',
      bg:'',
      color:'',
    },
    {
      heading:'Stickers',
      value:'Stickers',
      image:"/services/Stickers.jpg",
      children:'Apparel',
      bg:'',
      color:'',
    },
    {
      heading:'Explainer Videos',
      value:'Explainer Videos',
      image:"/services/Explainer-Videos.jpg",
      children:'Motion Graphics',
      bg:'',
      color:'',
    },
    {
      heading:'Animated Logos',
      value:'Animated Logos',
      image:"/services/Animated-Logos.jpg",
      children:'Motion Graphics',
      bg:'',
      color:'',
    },
    {
      heading:'Animated Infographics',
      value:'Animated Infographics',
      image:"/services/Animated-Infographics.jpg",
      children:'Motion Graphics',
      bg:'',
      color:'',
    },
    {
      heading:'Animated Intro/Outro',
      value:'Animated Intro/Outro',
      image:"/services/Animated-Intro-Outro.jpg",
      children:'Motion Graphics',
      bg:'',
      color:'',
    },
    {
      heading:'Social Media Animations',
      value:'Social Media Animations',
      image:"/services/Social-Media-Animations.jpg",
      children:'Motion Graphics',
      bg:'',
      color:'',
    },
    {
      heading:'Event Invitations and Promotions',
      value:'Event Invitations and Promotions',
      image:"/services/Event-Invitations-and-Promotions.jpg",
      children:'Motion Graphics',
      bg:'',
      color:'',
    },
    {
      heading:'Product Demos',
      value:'Product Demos',
      image:"/services/Product-Demos.jpg",
      children:'Motion Graphics',
      bg:'',
      color:'',
    },
    {
      heading:'GIF',
      value:'GIF',
      image:"/services/GIF.jpg",
      children:'Motion Graphics',
      bg:'',
      color:'',
    },
    {
      heading:'Radio Scripts',
      value:'Radio Scripts',
      image:"/services/Radio-Scripts.jpg",
      children:'CopyWriting',
      bg:'',
      color:'',
    },
    {
      heading:'Blog',
      value:'Blog',
      image:"/services/Blog.jpg",
      children:'CopyWriting',
      bg:'',
      color:'',
    },
    {
      heading:'Product Desciptions',
      value:'Product Desciptions',
      image:"/services/Product-Desciptions.jpg",
      children:'CopyWriting',
      bg:'',
      color:'',
    },
    {
      heading:'User Manuals',
      value:'User Manuals',
      image:"/services/User-Manuals.jpg",
      children:'CopyWriting',
      bg:'',
      color:'',
    },
    {
      heading:'Techincal Guide',
      value:'Techincal Guide',
      image:"/services/Techincal-Guide.jpg",
      children:'CopyWriting',
      bg:'',
      color:'',
    },
    {
      heading:'FAQ Section',
      value:'FAQ Section',
      image:"/services/FAQ-Section.jpg",
      children:'CopyWriting',
      bg:'',
      color:'',
    },
    {
      heading:'Interview Questions',
      value:'Interview Questions',
      image:"/services/Interview-Questions.jpg",
      children:'CopyWriting',
      bg:'',
      color:'',
    },
    {
      heading:'Presentation Scripts',
      value:'Presentation Scripts',
      image:"/services/Presentation-Scripts.jpg",
      children:'CopyWriting',
      bg:'',
      color:'',
    },
    {
      heading:'Whitepaper',
      value:'Whitepaper',
      image:"/services/Whitepaper.jpg",
      children:'CopyWriting',
      bg:'',
      color:'',
    },
    {
      heading:'Casestudies',
      value:'Casestudies',
      image:"/services/Casestudies.jpg",
      children:'CopyWriting',
      bg:'',
      color:'',
    },
    {
      heading:'Internall Communciations',
      value:'Internall Communciations',
      image:"/services/Internall-Communciations.jpg",
      children:'CopyWriting',
      bg:'',
      color:'',
    },
    {
      heading:'Slogans & Taglines',
      value:'Slogans & Taglines',
      image:"/services/Slogans-Taglines.jpg",
      children:'CopyWriting',
      bg:'',
      color:'',
    },
    {
      heading:'Press Release',
      value:'Press Release',
      image:"/services/Press-Release.jpg",
      children:'CopyWriting',
      bg:'',
      color:'',
    },
    {
      heading:'Email Campaigns',
      value:'Email Campaigns',
      image:"/services/Email-Campaigns.jpg",
      children:'CopyWriting',
      bg:'',
      color:'',
    },
    {
      heading:'Direct Mailers',
      value:'Direct Mailers',
      image:"/services/Direct-Mailers.jpg",
      children:'CopyWriting',
      bg:'',
      color:'',
    },  
  
  ];
  
  
  
export const categoryTitles: CategoryTitle[] = [
    {
      label: "Graphics",
      value: "Graphics",
      icon:BrushIcon,
      bg:"bg-green-100 ",
      color:"text-green-800",
      brandType:['7 - Eleven','7 - Eleven Other set','7 - Eleven with name']
    },
    {
      label: "Social Media Graphics",
      value: "Social Media Graphics",
      icon:RadioTowerIcon,
      bg:"bg-yellow-100",
      color:"text-yellow-800",
      brandType:['7 - Eleven','7 - Eleven Other set','7 - Eleven with name']
    },
    {
      label: "Paid Ads",
      value: "Paid Ads",
      icon:BadgeDollarSignIcon,
      bg:"bg-yellow-100",
      color:"text-yellow-800",
      brandType:['7 - Eleven','7 - Eleven Other set','7 - Eleven with name']
    },
    {
      label: "Apparel",
      value: "Apparel",
      icon:WavesIcon,
      bg:"bg-yellow-100",
      color:"text-yellow-800",
      brandType:['7 - Eleven','7 - Eleven Other set','7 - Eleven with name']
    },
    {
      label: "Motion Graphics",
      value: "Motion Graphics",
      icon:WindIcon,
      bg:"bg-yellow-100",
      color:"text-yellow-800",
      brandType:['7 - Eleven','7 - Eleven Other set','7 - Eleven with name']
    },
    {
      label: "CopyWriting",
      value: "CopyWriting",
      icon:CopyrightIcon,
      bg:"bg-yellow-100",
      color:"text-yellow-800",
      brandType:['7 - Eleven','7 - Eleven Other set','7 - Eleven with name']
    },
    {
      label: "All",
      value: "",
      icon:CopyrightIcon,
      bg:"bg-yellow-100",
      color:"text-yellow-800",
      brandType:['7 - Eleven','7 - Eleven Other set','7 - Eleven with name']
    },
    
  ];


export const Brandprofiles: BrandInfoType[] = [
 { 
  label:'7 - Eleven',
  name:false,
  colors: ['#fb6d02','#057452','#f10e2a','#ffc71d','#ff9903','#00e483','#0cae4d','#ff62b3','#c70104'],
  style:['brand-one.png','brand-two.png','brand-three.png','brand-four.png'],
  fonts:[
         {name:'Roboto',font:roboto},
         {name:'Lusitana',font:lusitana},
         {name:'Inter',font:inter}
         ]
 },
 { 
  label:'7 - Eleven Other set',
  name:false,
  colors: ['#fb6d02','#057452','#f10e2a','#0cae4d','#ff62b3','#c70104'],
  style:['brand-one.png','brand-two.png','brand-three.png','brand-four.png'],
  fonts:[
    {name:'Open Sans',font:openSans},
    {name:'Noto Sans',font:notoSans},
    ]
 },
 { 
  label:'7 - Eleven with name',
  name:true,
  colors: ['#fb6d02','#057452','#f10e2a','#ffc71d'],
  style:['brand-one.png','brand-two.png','brand-three.png','brand-four.png'],
  fonts:[
    {name:'Roboto',font:roboto},
    {name:'Lusitana',font:lusitana},
    {name:'Inter',font:inter},
    {name:'Open Sans',font:openSans},
    {name:'Noto Sans',font:notoSans},
    ]
 },
 { 
  label:'7 - Eleven 2',
  name:false,
  colors: ['#fb6d02','#057452','#f10e2a','#ffc71d','#ff9903','#00e483','#0cae4d','#ff62b3','#c70104'],
  style:['brand-one.png','brand-two.png','brand-three.png','brand-four.png'],
  fonts:[
    {name:'Roboto',font:roboto},
    {name:'Lusitana',font:lusitana},
    {name:'Inter',font:inter}
    ]
 },
 { 
  label:'7 - Eleven 3',
  name:false,
  colors: ['#fb6d02','#057452','#f10e2a','#ffc71d','#ff9903','#00e483','#0cae4d','#ff62b3','#c70104'],
  style:['brand-one.png','brand-two.png','brand-three.png','brand-four.png'],
  fonts:[
    {name:'Roboto',font:roboto},
    {name:'Lusitana',font:lusitana},
    {name:'Inter',font:inter}
    ]
 }

] ;


export const sizes:TaskSizeType[] = [
  {
    text: '1500x500',
    placeholder:'/services/portrate.png',
    label:'Twitter Header Photo',
    value: 'twitter 1500x500'
  },
  {
    text: '1200 x 630',
    placeholder:'/services/portrate.png',
    label:'Facebook Shared Image',
    value: 'facebook 1200 x 630'
  },
  {
    text: '2560 x 1440',
    placeholder:'/services/portrate.png',
    label:'YouTube Channel Cover Photo',
    value: 'youtube 2560 x 1440'
  },
  {
    text: '1080 x 1920',
    placeholder:'/services/landscape.png',
    label:'Instagram Stories/ Ad',
    value: 'Instagram 1080 x 1920'
  },
  {
    text: '1280 x 720',
    placeholder:'/services/portrate.png',
    label:'YouTube Video Upload',
    value: 'YouTube Video 1280 x 720'
  },
  {
    text: '646 x 220 min',
    placeholder:'/services/portrate.png',
    label:'LinkedIn Company Page Banner',
    value: 'LinkedIn Company Page Banner 646 x 220 min'
  },
  {
    text: '400 x 400',
    placeholder:'/services/square.png',
    label:'Twiter Profile Photo',
    value: 'Twiter Profile 400 x 400'
  },
  {
    text: '820 x 312',
    placeholder:'/services/portrate.png',
    label:'Facebook Cover Photo',
    value: 'Facebook Cover 820 x 312'
  }
]



export const DocFormats:DocFormatType[] = [
  {
    name:'.jpg',
    icon:'jpg.png',
  },
  {
    name:'.png',
    icon:'png.png',
  },
  {
    name:'canva',
    icon:'canva.png',
  },
  {
    name:'.psd',
    icon:'psd.png',
  },
  {
    name:'.ai',
    icon:'ai.png',
  },
  {
    name:'.pdf',
    icon:'pdf.png',
  }
]