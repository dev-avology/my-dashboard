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
      sizes:['twitter 1500x500','facebook 1200 x 630','youtube 2560 x 1440','Instagram 1080 x 1920','YouTube Video 1280 x 720','LinkedIn Company Page Banner 646 x 220 min','Twiter Profile 400 x 400','Facebook Cover 820 x 312' ],
      custom:[
        {
          label:'Scalable Vector Format',
          placeholder:'/services/portrate.png',
          value: 'scalable',
          type:'scalable'
        },
    ]
    }, 
    {
      heading:'Business Cards',
      value:'Business Cards',
      image:"/services/Business-Cards.jpg",
      children:'Graphics',
      brandingType:'business-card',
      bg:'',
      color:'',
      custom:[
        {
          label:'3.5" x 2"',
          value: '3.5" x 2"',
          placeholder:'/services/portrate.png',
          type:'fix'
        }
      ]
    },
    {
      heading:'Stationery Design',
      value:'Stationery Design',
      image:"/services/Stationery-Design.jpg",
      children:'Graphics',
      brandingType:'design',
      bg:'',
      color:'',
      custom:[
        {
          label:'Letterhead (8.5" x 11")',
          value: 'Letterhead (8.5" x 11")',
          placeholder:'/services/portrate.png',
          type:'Letterhead'
        },
        {
          label:'Envelope 4 1/8" x 9 1/2"',
          value: 'Envelope 4 1/8" x 9 1/2"',
          placeholder:'/services/portrate.png',
          type:'envelope'
        }
      ]
    },
    {
      heading:'Brand Guidelines',
      value:'Brand Guidelines',
      image:"/services/Brand-Guidelines.jpg",
      children:'Graphics',
      brandingType:'brand',
      bg:'',
      color:'',
      custom:[
        {
          text: 'Page Orientation Landscape',
          placeholder:'/services/landscape.png',
          label:'Page Orientation Landscape',
          value: 'Page Orientation Landscape',
          type:'fix'
        },
        {
          text: 'Page Orientation Portrait',
          placeholder:'/services/portrate.png',
          label:'Page Orientation Portrait',
          value: 'Page Orientation Portrait',
          type:'fix'
        }
      ]
    },
    {
      heading:'Brochures',
      value:'Brochures',
      image:"/services/Brochures.jpg",
      children:'Graphics',
      bg:'',
      color:'',
      custom:[
        {
          text: '8.5" x 11" (tri-fold)',
          placeholder:'/services/landscape.png',
          label:'8.5" x 11" (tri-fold)',
          value: 'tri-fold',
          type:'fix'
        },
        {
          text: '11" x 17" (bi-fold)',
          placeholder:'/services/portrate.png',
          label:'11" x 17" (bi-fold)',
          value: 'bi-fold',
          type:'fix'
        }
      ]
    },
    {
      heading:'Flyers',
      value:'Flyers',
      image:"/services/Flyers.jpg",
      children:'Graphics',
      bg:'',
      color:'',
      custom:[
        {
          text: '8.5" x 11" ',
          placeholder:'/services/landscape.png',
          label:'8.5" x 11"',
          value: '8.5" x 11" flyer',
          type:'fix'
        }
      ]
    },
    {
      heading:'Posters',
      value:'Posters',
      image:"/services/Posters.jpg",
      children:'Graphics',
      bg:'',
      color:'',
      custom:[
        {
          text: '18" x 24"',
          placeholder:'/services/landscape.png',
          label:'18" x 24"',
          value: '18" x 24" poster',
          type:'fix'
        },
        {
          text: '24" x 36" ',
          placeholder:'/services/landscape.png',
          label:'24" x 36"',
          value: '24" x 36" poster',
          type:'fix'
        }
      ]
    },
    {
      heading:'Banners and Signage',
      value:'Banners and Signage',
      image:"/services/Banners-and-Signage.jpg",
      children:'Graphics',
      bg:'',
      color:'',
      sizes:[ 'YouTube Video 1280 x 720','LinkedIn Company Page Banner 646 x 220 min','Twiter Profile 400 x 400','Facebook Cover 820 x 312' ],
      custom:[
        {
          label:'custom',
          value: 'custom',
          placeholder:'/services/portrate.png',
          type:'custom'
        }
      ]
    },
    {
      heading:'Advertisements',
      value:'Advertisements',
      image:"/services/Advertisements.jpg",
      children:'Graphics',
      bg:'',
      color:'',
      custom:[
        {
          label:'custom',
          value: 'custom',
          placeholder:'/services/portrate.png',
          type:'custom'
        }
      ]
    },
    {
      heading:'Packaging Design',
      value:'Packaging Design',
      image:"/services/Packaging-Design.jpg",
      children:'Graphics',
      bg:'',
      color:'',
      custom:[
        {
          label:'custom',
          value: 'custom',
          placeholder:'/services/portrate.png',
          type:'custom'
        }
      ]
    },
    {
      heading:'Label Design',
      value:'Label Design',
      image:"/services/Label-Design.jpg",
      children:'Graphics',
      bg:'',
      color:'',
      custom:[
        {
          label:'custom',
          value: 'custom',
          placeholder:'/services/portrate.png',
          type:'custom'
        }
      ]
    },
    {
      heading:'Book Design',
      value:'Book Design',
      image:"/services/Book-Design.jpg",
      children:'Graphics',
      bg:'',
      color:'',
      custom:[
        {
          text: '6" x 9" (standard trade)',
          placeholder:'/services/landscape.png',
          label:'6" x 9"',
          value: '6" x 9" (standard trade)',
          type:'fix'
        },
        {
          text: '8.5" x 11" (textbook)',
          placeholder:'/services/landscape.png',
          label:'8.5" x 11"',
          value: '8.5" x 11" (textbook)',
          type:'fix'
        },
        {
          label:'custom',
          value: 'custom',
          placeholder:'/services/portrate.png',
          type:'custom'
        }
      ]  
    },
    {
      heading:'Magazine Layout',
      value:'Magazine Layout',
      image:"/services/Magazine-Layout.jpg",
      children:'Graphics',
      bg:'',
      color:'',
      custom:[
        {
          text: '8.5" x 11" (standard )',
          placeholder:'/services/landscape.png',
          label:'8.5" x 11"',
          value: '8.5" x 11" (standard)',
          type:'fix'
        },
      
        {
          label:'custom',
          value: 'custom',
          placeholder:'/services/portrate.png',
          type:'size vary'
        }
      ]  

    },
    {
      heading:'Newsletter Design',
      value:'Newsletter Design',
      image:"/services/Newsletter-Design.jpg",
      children:'Graphics',
      bg:'',
      color:'',
      custom:[
        {
        text: '8.5" x 11" (print )',
        placeholder:'/services/landscape.png',
        label:'8.5" x 11"',
        value: '8.5" x 11" (print)',
        type:'fix'
        },

        {
          label:'custom',
          value: 'custom',
          placeholder:'/services/portrate.png',
          type:'variable for digital'
        }
      ]
    },
    {
      heading:'Annual Reports',
      value:'Annual Reports',
      image:"/services/Annual-Reports.jpg",
      children:'Graphics',
      bg:'',
      color:'',
      custom:[
        {
        text: '8.5" x 11"',
        placeholder:'/services/landscape.png',
        label:'8.5" x 11"',
        value: '8.5" x 11"',
        type:'fix'
        }
      ]
    },
    {
      heading:'Infographics',
      value:'Infographics',
      image:"/services/Infographics.jpg",
      children:'Graphics',
      bg:'',
      color:'',
      custom:[
        {
          label:'Scalable Vector Format',
          placeholder:'/services/portrate.png',
          value: 'scalable',
          type:'scalable'
        }
    ]
    },
    {
      heading:'UX/UI Design',
      value:'UX/UI Design',
      image:"/services/UXUI-Design.jpg",
      children:'Graphics',
      bg:'',
      color:'',
      custom:[
        {
          label:'Built to be Responsive',
          placeholder:'/services/portrate.png',
          value: 'custom',
          type:'custom'
        }
      ]
    },
    {
      heading:'Landing Page Design',
      value:'Landing Page Design',
      image:"/services/Landing-Page-Design.jpg",
      children:'Graphics',
      bg:'',
      color:'',
      custom:[
        {
          label:'Built to be Responsive',
          placeholder:'/services/portrate.png',
          value: 'custom',
          type:'custom'
        }
      ]
    },
    {
      heading:'Website Design',
      value:'Website Design',
      image:"/services/Website-Design.jpg",
      children:'Graphics',
      bg:'',
      color:'',
      custom:[
        {
          label:'Built to be Responsive',
          placeholder:'/services/portrate.png',
          value: 'custom',
          type:'custom'
        }
      ]
    },
    {
      heading:'Mobile App Design',
      value:'Mobile App Design',
      image:"/services/Mobile-App-Design.jpg",
      children:'Graphics',
      bg:'',
      color:'',
      custom:[
        {
          label:'Built to be Responsive',
          placeholder:'/services/portrate.png',
          value: 'custom',
          type:'custom'
        }
      ]
    },
    {
      heading:'Email Templates',
      value:'Email Templates',
      image:"/services/Email-Templates.jpg",
      children:'Graphics',
      bg:'',
      color:'',
      custom:[
        {
          label:'Built to be Responsive',
          placeholder:'/services/portrate.png',
          value: 'custom',
          type:'custom'
        }
      ]
    },
    {
      heading:'Presentation Design',
      value:'Presentation Design',
      image:"/services/Presentation-Design.jpg",
      children:'Graphics',
      bg:'',
      color:'',
      custom:[
        {
        text: '16" x 9"',
        placeholder:'/services/landscape.png',
        label:'16" x 9"',
        value: '16" x 9"',
        type:'fix'
        },
        {
          text: '4" x 3"',
          placeholder:'/services/landscape.png',
          label:'4" x 3"',
          value: '4" x 3"',
          type:'fix'
          }

      ]
    },
    {
      heading:'Menu Design',
      value:'Menu Design',
      image:"/services/Menu-Design.jpg",
      children:'Graphics',
      bg:'',
      color:'',
      custom:[
        {
        text: '8.5" x 11"',
        placeholder:'/services/landscape.png',
        label:'8.5" x 11"',
        value: '8.5" x 11"',
        type:'fix'
        },
        {
          text: '8.5" x 14"',
          placeholder:'/services/landscape.png',
          label:'8.5" x 14"',
          value: '8.5" x 14"',
          type:'fix'
          },
          {
            label:'custom',
            value: 'custom',
            placeholder:'/services/portrate.png',
            type:'custom'
          }
      ]   
    },
    {
      heading:'Exhibition Displays',
      value:'Exhibition Displays',
      image:"/services/Exhibition-Displays.jpg",
      children:'Graphics',
      bg:'',
      color:'',
      custom:[
        {
          text: '10" x 10"(standard)',
          placeholder:'/services/landscape.png',
          label:'8.5" x 14"',
          value: '8.5" x 14"',
          type:'fix'
        },
        {
          label:'custom',
          value: 'custom',
          placeholder:'/services/portrate.png',
          type:'custom'
        }

      ]
    },
    {
      heading:'Vehicle Wraps',
      value:'Vehicle Wraps',
      image:"/services/Vehicle-Wraps.jpg",
      children:'Graphics',
      bg:'',
      color:'',
      custom:[
        {
          label:'custom',
          value: 'custom',
          placeholder:'/services/portrate.png',
          type:'custom' 
        }
      ]
    },
    {
      heading:'T-shirt and Merchandise Design',
      value:'T-shirt and Merchandise Design',
      image:"/services/T-shirt-and-Merchandise-Design.jpg",
      children:'Graphics',
      bg:'',
      color:'',
      custom:[
        {
          label:'custom',
          value: 'custom',
          placeholder:'/services/portrate.png',
          type:'custom'
        }
      ]
    },
    {
      heading:'Invitation Design',
      value:'Invitation Design',
      image:"/services/Invitation-Design.jpg",
      children:'Graphics',
      bg:'',
      color:'',
      custom:[
      {
        
        text: '5" x 7"',
        placeholder:'/services/landscape.png',
        label:'5" x 7"',
        value: '5" x 7"',
        type:'fix'
      },
      {
        label:'custom',
        value: 'custom',
        placeholder:'/services/portrate.png',
        type:'custom'
      }
      ]
    },
    {
      heading:'Branded Giveaways',
      value:'Branded Giveaways',
      image:"/services/Branded-Giveaways.jpg",
      children:'Graphics',
      bg:'',
      color:'',
      custom:[
        {
        label:'custom',
        value: 'custom',
        placeholder:'/services/portrate.png',
        type:'custom'
        }
      ]
    },
    {
      heading:'3D Graphics',
      value:'3D Graphics',
      image:"/services/3D-Graphics.jpg",
      children:'Graphics',
      bg:'',
      color:'',
      custom:[
        {
          label:'Built to be Responsive',
          placeholder:'/services/portrate.png',
          value: 'custom',
          type:'custom'
        }
      ]
    },
    {
      heading:'Video Editing',
      value:'Video Editing',
      image:"/services/Video-Editing.jpg",
      children:'Graphics',
      bg:'',
      color:'',
      custom:[
        { 
          text: '16" x 9"',
          placeholder:'/services/landscape.png',
          label:'16" x 9"',
          value: '16" x 9"',
          type:'fix'
        },
        { 
          text: '9" x 16"',
          placeholder:'/services/portrate.png',
          label:'9" x 16"',
          value: '9" x 16"',
          type:'fix'
        },
        { 
          text: '1" x 1"',
          placeholder:'/services/square.png',
          label:'1" x 1"',
          value: '1" x 1"',
          type:'fix'
        },
        { 
          text: '4" x 5"',
          placeholder:'/services/square.png',
          label:'4" x 5"',
          value: '4" x 5"',
          type:'fix'
        },
        { 
          text: '2" x 3"',
          placeholder:'/services/square.png',
          label:'2" x 3"',
          value: '2" x 3"',
          type:'fix'
        },
        { 
          text: '3" x 4"',
          placeholder:'/services/square.png',
          label:'3" x 4"',
          value: '3" x 4"',
          type:'fix'
        },
      ]
    },
    {
      heading:'Icon Design',
      value:'Icon Design',
      image:"/services/Icon-Design.jpg",
      children:'Graphics',
      bg:'',
      color:'',
      custom:[
        {
          label:'Scalable Vector Format',
          placeholder:'/services/portrate.png',
          value: 'scalable',
          type:'scalable'
        }
    ]
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
      custom:[
        {
          label:'Scalable Vector Format',
          placeholder:'/services/portrate.png',
          value: 'scalable',
          type:'scalable'
        }
    ]

    },
    {
      heading:'Etsy',
      value:'Etsy',
      image:"/services/Etsy.jpg",
      children:'Social Media Graphics',
      bg:'',
      color:'',
      custom:[
        { 
          text: '2000" x 2000"',
          placeholder:'/services/square.png',
          label:'2000" x 2000"',
          value: '2000" x 2000"',
          type:'fix'
        },
      ]

    },
    {
      heading:'Facebook',
      value:'Facebook',
      image:"/services/Facebook.jpg",
      children:'Social Media Graphics',
      bg:'',
      color:'',
      custom:[
        { 
          text: '1200" x 630"',
          placeholder:'/services/portrate.png',
          label:'1200" x 630"',
          value: '1200" x 630"',
          type:'fix'
        },
        { 
          text: '1280" x 720"',
          placeholder:'/services/portrate.png',
          label:'1200" x 630"( 16:9 for landscape or 9:16 for portrait)',
          value: '1200" x 630"',
          type:'fix'
        }
      ]
    },
    {
      heading:'Instagram',
      value:'Instagram',
      image:"/services/Instagram.jpg",
      children:'Social Media Graphics',
      bg:'',
      color:'',
      custom:[
        { 
          text: '1080" x 1080"',
          placeholder:'/services/square.png',
          label:'1080" x 1080"',
          value: '1080" x 1080"',
          type:'fix'
        },
        { 
          text: '1080" x 1350"',
          placeholder:'/services/portrate.png',
          label:'1080" x 1350"( ratio of 4:5)',
          value: '1080" x 1350"',
          type:'fix'
        },
        { 
          text: '1080" x 566"',
          placeholder:'/services/landscape.png',
          label:'1080" x 566""( ratio of 1.91:1)',
          value: '1080" x 566"',
          type:'fix'
        },
        { 
          text: '1080" x 1920"',
          placeholder:'/services/landscape.png',
          label:'1080" x 1920""( ratio of 9:16)',
          value: '1080" x 1920"',
          type:'fix'
        }
      ]
      
    },
    {
      heading:'LinkedIn',
      value:'LinkedIn',
      image:"/services/LinkedIn.jpg",
      children:'Social Media Graphics',
      bg:'',
      color:'',
      custom:[
        { 
          text: '1200" x 1200"',
          placeholder:'/services/square.png',
          label:'1200" x 1200"',
          value: '1200" x 1200"',
          type:'fix'
        },
        { 
          text: '1080" x 1350"',
          placeholder:'/services/portrate.png',
          label:'1080" x 1350"',
          value: '1080" x 1350"',
          type:'fix'
        },
        { 
          text: '1200" x 628"',
          placeholder:'/services/portrate.png',
          label:'1200" x 628"',
          value: '1200" x 628"',
          type:'fix'
        },
        { 
          text: '2556" x 1440"',
          placeholder:'/services/landscape.png',
          label:'2556" x 1440"(ratio of 16:9)',
          value: '2556" x 1440"',
          type:'fix'
        }

      ]

    },
    {
      heading:'Other Social Media Graphics',
      value:'Other Social Media Graphics',
      image:"/services/Other-Social-Media-Graphics.jpg",
      children:'Social Media Graphics',
      bg:'',
      color:'',
      custom:[
        {
          label:'custom',
          value: 'custom',
          placeholder:'/services/portrate.png',
          type:'custom'
          }
      ]
    },
    {
      heading:'Pinterest',
      value:'Pinterest',
      image:"/services/Pinterest.jpg",
      children:'Social Media Graphics',
      bg:'',
      color:'',
      custom:[
        {
          text: '1000" x 1500"',
          placeholder:'/services/portrate.png',
          label:'1000" x 1500""(ratio of 2:3)',
          value: '1000" x 1500"',
          type:'fix'
        },
        { 
          text: '1" x 1"',
          placeholder:'/services/square.png',
          label:'1" x 1"',
          value: '1" x 1"',
          type:'fix'
        },
        { 
          text: '2" x 3"',
          placeholder:'/services/portrate.png',
          label:'2" x 3"',
          value: '2" x 3"',
          type:'fix'
        },
        { 
          text: '9" x 16"',
          placeholder:'/services/portrate.png',
          label:'9" x 16"',
          value: '9" x 16"',
          type:'fix'
        },
        { 
          text: '1080" x 1920"',
          placeholder:'/services/portrate.png',
          label:'1080" x 1920"',
          value: '1080" x 1920"',
          type:'fix'
        },
      ]
    },
    {
      heading:'Social Media Collateral',
      value:'Social Media Collateral',
      image:"/services/Social-Media-Collateral.jpg",
      children:'Social Media Graphics',
      bg:'',
      color:'',
      custom:[
        {
          text: '820" x 312"',
          placeholder:'/services/landscape.png',
          label:'820" x 312"',
          value: '820" x 312"',
          type:'fix'
        },
        { 
          text: '1500" x 1500"',
          placeholder:'/services/square.png',
          label:'1500" x 1500"',
          value: '1500" x 1500"',
          type:'fix'
        },
        {
          text: '1584" x 396"',
          placeholder:'/services/landscape.png',
          label:'1584" x 396"',
          value: '1584" x 396"',
          type:'fix'
        },
      ]
    },
    {
      heading:'Tik Tok',
      value:'Tik Tok',
      image:"/services/Tik-Tok.jpg",
      children:'Social Media Graphics',
      bg:'',
      color:'',
      custom:[
        {
          text: '1080" x 1920"',
          placeholder:'/services/landscape.png',
          label:'1080" x 1920" ( ratio of 9:16)',
          value: '1080" x 1920"',
          type:'fix'
        },   
      ]
    },
    {
      heading:'X (Twitter Post)',
      value:'X (Twitter Post)',
      image:"/services/X-twiter-post.jpg",
      children:'Social Media Graphics',
      bg:'',
      color:'',
      custom:[
        {
          text: '1200" x 675"',
          placeholder:'/services/portrate.png',
          label:'1200" x 675" ( ratio of 16:9)',
          value: '1200" x 675"',
          type:'fix'
        },
        {
          text: '1200" x 720"',
          placeholder:'/services/landscape.png',
          label:'1200" x 720" ( ratio of 16:9) ',
          value: '1200" x 720"',
          type:'fix'
        },
        {
          text: '720" x 1280"',
          placeholder:'/services/portrate.png',
          label:'720" x 1280" ( ratio of 9:16)',
          value: '720" x 1280"',
          type:'fix'
        },
        {
          text: '720" x 720"',
          placeholder:'/services/square.png',
          label:'720" x 720" ( ratio of 1:1)',
          value: '720" x 720"',
          type:'fix'
        }
      ]
    },
    {
      heading:'Youtube',
      value:'Youtube',
      image:"/services/Youtube.jpg",
      children:'Social Media Graphics',
      bg:'',
      color:'',
      custom:[
        {
          text: '1920" x 1080"',
          placeholder:'/services/portrate.png',
          label:'1920" x 1080"( ratio of 16:9)',
          value: '1920" x 1080"',
          type:'fix'
        },
        {
          text: '1280" x 720"',
          placeholder:'/services/portrate.png',
          label:'1280" x 720"',
          value: '1280" x 720"',
          type:'fix'
        }
      ]
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
      custom:[
        {
          text: '300" x 100"',
          placeholder:'/services/landscape.png',
          label:'300" x 100"',
          value: '300" x 100"',
          type:'fix'
        },
        {
          text: '750" x 300"',
          placeholder:'/services/landscape.png',
          label:'750" x 300"',
          value: '750" x 300"',
          type:'fix'
        },
        {
          text: '750" x 200"',
          placeholder:'/services/landscape.png',
          label:'750" x 200"',
          value: '750" x 200"',
          type:'fix'
        },
        {
          text: '750" x 100"',
          placeholder:'/services/landscape.png',
          label:'750" x 100"',
          value: '750" x 100"',
          type:'fix'
        },
        {
          text: '950" x 90"',
          placeholder:'/services/landscape.png',
          label:'950" x 90"',
          value: '950" x 90"',
          type:'fix'
        },
        {
          text: '88" x 31"',
          placeholder:'/services/landscape.png',
          label:'88" x 31"',
          value: '88" x 31"',
          type:'fix'
        },
        {
          text: '220" x 90"',
          placeholder:'/services/landscape.png',
          label:'220" x 90"',
          value: '220" x 90"',
          type:'fix'
        },
        {
          text: '300" x 31"',
          placeholder:'/services/landscape.png',
          label:'300" x 31"',
          value: '300" x 31"',
          type:'fix'
        },
        {
          text: '980" x90"',
          placeholder:'/services/landscape.png',
          label:'980" x90"',
          value: '980" x90"',
          type:'fix'
        },
        {
          text: '240" x 133"',
          placeholder:'/services/landscape.png',
          label:'240" x 133"',
          value: '240" x 133"',
          type:'fix'
        },

        {
          text: '200" x 446"',
          placeholder:'/services/portrate.png',
          label:'200" x 446"',
          value: '200" x 446"',
          type:'fix'
        },
        {
          text: '292" x 30"',
          placeholder:'/services/landscape.png',
          label:'292" x 30"',
          value: '292" x 30"',
          type:'fix'
        },
        {
          text: '960" x 90"',
          placeholder:'/services/landscape.png',
          label:'960" x 90"',
          value: '960" x 90"',
          type:'fix'
        },
        {
          text: '970" x 66"',
          placeholder:'/services/landscape.png',
          label:'960" x 90"',
          value: '960" x 90"',
          type:'fix'
        },
        {
          text: '300" x 57"',
          placeholder:'/services/landscape.png',
          label:'300" x 57"',
          value: '300" x 57"',
          type:'fix'
        },
        {
          text: '120" x 60"',
          placeholder:'/services/landscape.png',
          label:'120" x 60"',
          value: '120" x 60"',
          type:'fix'
        },
        {
          text: '320" x 400"',
          placeholder:'/services/portrate.png',
          label:'320" x 400"',
          value: '320" x 400"',
          type:'fix'
        },
        {
          text: '600" x 314"',
          placeholder:'/services/landscape.png',
          label:'600" x 314"',
          value: '600" x 314"',
          type:'fix'
        },
        {
          text: '468" x 60"',
          placeholder:'/services/landscape.png',
          label:'468" x 60"',
          value: '468" x 60"',
          type:'fix'
        },
        {
          text: '728" x 90"',
          placeholder:'/services/landscape.png',
          label:'728" x 90"',
          value: '728" x 90"',
          type:'fix'
        },
        {
          text: '250" x 250"',
          placeholder:'/services/square.png',
          label:'250" x 250"',
          value: '250" x 250"',
          type:'fix'
        },
        {
          text: '200" x 200"',
          placeholder:'/services/square.png',
          label:'200" x 200"',
          value: '200" x 200"',
          type:'fix'
        },
        {
          text: '336" x 280"',
          placeholder:'/services/landscape.png',
          label:'336" x 280"',
          value: '336" x 280"',
          type:'fix'
        },
        {
          text: '300" x 250"',
          placeholder:'/services/landscape.png',
          label:'300" x 250"',
          value: '300" x 250"',
          type:'fix'
        },
        {
          text: '120" x 600"',
          placeholder:'/services/portrate.png',
          label:'120" x 600"',
          value: '120" x 600"',
          type:'fix'
        },
        {
          text: '160" x 600"',
          placeholder:'/services/portrate.png',
          label:'160" x 600"',
          value: '160" x 600"',
          type:'fix'
        },
        {
          text: '320" x 50"',
          placeholder:'/services/landscape.png',
          label:'320" x 50"',
          value: '320" x 50"',
          type:'fix'
        },
        {
          text: '425" x 600"',
          placeholder:'/services/portrate.png',
          label:'425" x 600"',
          value: '425" x 600"',
          type:'fix'
        },
        {
          text: '300" x 600"',
          placeholder:'/services/portrate.png',
          label:'300" x 600"',
          value: '300" x 600"',
          type:'fix'
        },
        {
          text: '970" x 90"',
          placeholder:'/services/landscape.png',
          label:'970" x 90"',
          value: '970" x 90"',
          type:'fix'
        },
        {
          text: '240" x 400"',
          placeholder:'/services/portrate.png',
          label:'240" x 400"',
          value: '240" x 400"',
          type:'fix'
        },
        {
          text: '980" x 120"',
          placeholder:'/services/landscape.png',
          label:'980" x 120"',
          value: '980" x 120"',
          type:'fix'
        },
        {
          text: '930" x 180"',
          placeholder:'/services/landscape.png',
          label:'930" x 180"',
          value: '930" x 180"',
          type:'fix'
        },
        {
          text: '250" x 360"',
          placeholder:'/services/portrate.png',
          label:'250" x 360"',
          value: '250" x 360"',
          type:'fix'
        },
        {
          text: '580" x 400"',
          placeholder:'/services/landscape.png',
          label:'580" x 400"',
          value: '580" x 400"',
          type:'fix'
        },
        {
          text: '300" x 1050"',
          placeholder:'/services/portrate.png',
          label:'300" x 1050"',
          value: '300" x 1050"',
          type:'fix'
        },
        {
          text: '480" x 320"',
          placeholder:'/services/landscape.png',
          label:'480" x 320"',
          value: '480" x 320"',
          type:'fix'
        },
        {
          text: '320" x 480"',
          placeholder:'/services/portrate.png',
          label:'320" x 480"',
          value: '320" x 480"',
          type:'fix'
        },
        {
          text: '768" x 1024"',
          placeholder:'/services/portrate.png',
          label:'768" x 1024"',
          value: '768" x 1024"',
          type:'fix'
        },
        {
          text: '1024" x 768"',
          placeholder:'/services/landscape.png',
          label:'1024" x 768"',
          value: '1024" x 768"',
          type:'fix'
        },
        {
          text: '480" x 32"',
          placeholder:'/services/landscape.png',
          label:'480" x 32"',
          value: '480" x 32"',
          type:'fix'
        },
        {
          text: '1024" x 90"',
          placeholder:'/services/landscape.png',
          label:'1024" x 90"',
          value: '1024" x 90"',
          type:'fix'
        },
        {
          text: '970" x 250"',
          placeholder:'/services/landscape.png',
          label:'970" x 250"',
          value: '970" x 250"',
          type:'fix'
        },
        {
          text: '375" x 50"',
          placeholder:'/services/landscape.png',
          label:'375" x 50"',
          value: '375" x 50"',
          type:'fix'
        },
        {
          text: '414" x 736"',
          placeholder:'/services/portrate.png',
          label:'414" x 736"',
          value: '414" x 736"',
          type:'fix'
        },
        {
          text: '736" x 414"',
          placeholder:'/services/landscape.png',
          label:'736" x 414"',
          value: '736" x 414"',
          type:'fix'
        },
        {
          text: '1.91" x 1"',
          placeholder:'/services/landscape.png',
          label:'1.91" x 1"',
          value: '1.91" x 1"',
          type:'fix'
        },
        {
          label:'Responsive display',
          value: 'Responsive display',
          placeholder:'/services/portrate.png',
          type:'Responsive display'
        },
        {
          text: '1" x 1"',
          placeholder:'/services/square.png',
          label:'1" x 1"(300 x 300)',
          value: '1" x 1"',
          type:'fix'
        },
        {
          label:'Responsive display',
          value: 'Responsive display',
          placeholder:'/services/portrate.png',
          type:'Responsive display'
        },
        {
          text: '1" x 1"',
          placeholder:'/services/square.png',
          label:'1" x 1"(128 x 128)',
          value: '1" x 1"',
          type:'fix'
        },
        {
          text: '4" x 1"',
          placeholder:'/services/landscape.png',
          label:'4" x 1"(512 x 128)',
          value: '4" x 1"',
          type:'fix'
        },
      ]
    },
    {
      heading:'Meta Ads',
      value:'Meta Ads',
      image:"/services/Meta-Ads.jpg",
      children:'Paid Ads',
      bg:'',
      color:'',
      custom:[
        {
          text: '1200" x 628"',
          placeholder:'/services/landscape.png',
          label:'1200" x 628"(Facebook Image Ads)',
          value: '1200" x 628"',
          type:'fix'
        },
        {
          text: '1280" x 720"',
          placeholder:'/services/landscape.png',
          label:'1280" x 720"(Facebook Video Ads)',
          value: '1280" x 720"',
          type:'fix'
        },
        {
          text: '1080" x 1080"',
          placeholder:'/services/square.png',
          label:'1080" x 1080"(Instagram Image Ads)',
          value: '1080" x 1080"',
          type:'fix'
        },
        {
          text: '1200" x 628"',
          placeholder:'/services/landscape.png',
          label:'1200" x 628"(Instagram Image Ads)',
          value: '1200" x 628"',
          type:'fix'
        },
        {
          text: '1080" x 1080"',
          placeholder:'/services/square.png',
          label:'1080" x 1080"(Instagram video Ads)',
          value: '1080" x 1080"',
          type:'fix'
        },
        {
          text: '1200" x 628"',
          placeholder:'/services/landscape.png',
          label:'1200" x 628"(Instagram video Ads)',
          value: '1200" x 628"',
          type:'fix'
        },
        {
          text: '1080" x 1080"',
          placeholder:'/services/square.png',
          label:'1080" x 1080"(Carousel Ads)',
          value: '1080" x 1080"',
          type:'fix'
        },
      ]
    },
    {
      heading:'X (Twitter) Ads',
      value:'X (Twitter) Ads',
      image:"/services/X-Twitter-Ads.jpg",
      children:'Paid Ads',
      bg:'',
      color:'',
      custom:[
        {
          text: '800" x 418"',
          placeholder:'/services/landscape.png',
          label:'800" x 418"(ratio 1.91:1)',
          value: '800" x 418"',
          type:'fix'
        },
        {
          text: '800" x 800"',
          placeholder:'/services/square.png',
          label:'800" x 800"(ratio 1:1)',
          value: '800" x 800"',
          type:'fix'
        },
        {
          text: '800" x 418"',
          placeholder:'/services/landscape.png',
          label:'800" x 418"(App Card)',
          value: '800" x 418"',
          type:'fix'
        },
        {
          text: '800" x 800"',
          placeholder:'/services/square.png',
          label:'800" x 800"(App Card)',
          value: '800" x 800"',
          type:'fix'
        },
        {
          text: '800" x 418"',
          placeholder:'/services/landscape.png',
          label:'800" x 418"(Carousel Ads)',
          value: '800" x 418"',
          type:'fix'
        },
        {
          text: '800" x 800"',
          placeholder:'/services/square.png',
          label:'800" x 800"(Carousel Ads)',
          value: '800" x 800"',
          type:'fix'
        },
        {
          text: '600" x 335"',
          placeholder:'/services/landscape.png',
          label:'600" x 335"(Image Ads)',
          value: '600" x 335"',
          type:'fix'
        },
      ]
    },
    {
      heading:'Pinterst Ads',
      value:'Pinterst Ads',
      image:"/services/Pinterst-Ads.jpg",
      children:'Paid Ads',
      bg:'',
      color:'',
      custom:[
        {
          text: '1000" x 1500"',
          placeholder:'/services/landscape.png',
          label:'1000" x 1500"(Standard Pins)',
          value: '1000" x 1500"',
          type:'fix'
        },
        {
          text: '1000" x 1500"',
          placeholder:'/services/landscape.png',
          label:'1000" x 1500"(Video Pins)',
          value: '1000" x 1500"',
          type:'fix'
        },
        {
          text: '1" x 1"',
          placeholder:'/services/square.png',
          label:'1" x 1"(Video Pins)',
          value: '1" x 1',
          type:'fix'
        },
        {
          text: '1000" x 1500"',
          placeholder:'/services/landscape.png',
          label:'1000" x 1500"(Carousel Ads)',
          value: '1000" x 1500"',
          type:'fix'
        },
      ]  
    },
    {
      heading:'LinkedIn Ads',
      value:'LinkedIn Ads',
      image:"/services/LinkedIn-Ads.jpg",
      children:'Paid Ads',
      bg:'',
      color:'',
      custom:[
        {
          text: '1200" x 627"',
          placeholder:'/services/landscape.png',
          label:'1200" x 627"',
          value: '1200" x 627"',
          type:'fix'
        },
        {
          text: '300" x 250"',
          placeholder:'/services/landscape.png',
          label:'300" x 250"',
          value: '300" x 250"',
          type:'fix'
        },
        {
          text: '100" x 100"',
          placeholder:'/services/square.png',
          label:'100" x 100"',
          value: '100" x 100"',
          type:'fix'
        }
      ]
    },
    {
      heading:'Tik Tok Ads',
      value:'Tik Tok Ads',
      image:"/services/Tik-Tok-Ads.jpg",
      children:'Paid Ads',
      bg:'',
      color:'',
      custom:[
        {
          text: '1080" x 1920"',
          placeholder:'/services/landscape.png',
          label:'1080" x 1920"(In-Feed Ads)',
          value: '1080" x 1920"',
          type:'fix'
        },
        {
          text: '1080" x 1920"',
          placeholder:'/services/landscape.png',
          label:'1080" x 1920"(TopView Ads)',
          value: '1080" x 1920"',
          type:'fix'
        },
        {
          text: '1080" x 1920"',
          placeholder:'/services/landscape.png',
          label:'1080" x 1920"(Brand Takeover Ads )',
          value: '1080" x 1920"',
          type:'fix'
        },
      ]
    },
    {
      heading:'Billboard',
      value:'Billboard',
      image:"/services/Billboard.jpg",
      children:'Paid Ads',
      bg:'',
      color:'',
      custom:[
        {
        text: 'No fixed pixel size due to the variation in physical size"',
        placeholder:'/services/portrate.png',
        label:'No fixed pixel size due to the variation in physical size"(Standard Billboards )',
        value: 'Standard Billboards"',
        type:'fix'
        },
        {
          text: 'Resolution and size vary depending on the location and  billboard"',
          placeholder:'/services/landscape.png',
          label:'Resolution and size vary depending on the location and  billboard"(Digital Billboards)',
          value: 'Digital Billboards"',
          type:'fix'
          }
      ]
    },
    {
      heading:'Brand Kit',
      value:'Brand Kit',
      image:"/services/Brand-Kit.jpg",
      children:'Paid Ads',
      bg:'',
      color:'',
      custom:[
        {
          text: 'Page Orientation Landscape',
          placeholder:'/services/landscape.png',
          label:'Page Orientation Landscape',
          value: 'Page Orientation Landscape',
          type:'fix'
        },
        {
          text: 'Page Orientation Portrait',
          placeholder:'/services/portrate.png',
          label:'Page Orientation Portrait',
          value: 'Page Orientation Portrait',
          type:'fix'
        }
      ]

    },
    {
      heading:'Swag Site',
      value:'Swag Site',
      image:"/services/Swag-Site.jpg",
      children:'Paid Ads',
      bg:'',
      color:'',
      custom:[
        {
          label:'Responsive ',
          value: 'Responsive ',
          placeholder:'/services/portrate.png',
          type:'Responsive '
        }
      ]
    

    },
    {
      heading:'Corporate Merchaindise Bundle',
      value:'Corporate Merchaindise Bundle',
      image:"/services/Corporate-Merchaindise-Bundle.jpg",
      children:'Apparel',
      bg:'',
      color:'',
      custom:[
        {
          label:'custom',
          value: 'custom',
          placeholder:'/services/portrate.png',
          type:'custom'
          }
      ]

    },
    {
      heading:'Pen Design',
      value:'Pen Design',
      image:"/services/Pen-Design.jpg",
      children:'Apparel',
      bg:'',
      color:'',
      custom:[
        {
          label:'custom',
          value: 'custom',
          placeholder:'/services/portrate.png',
          type:'custom'
          }
      ]
    },
    {
      heading:'Mug Graphics',
      value:'Mug Graphics',
      image:"/services/Mug-Graphics.jpg",
      children:'Apparel',
      bg:'',
      color:'',
      custom:[
        {
          label:'custom',
          value: 'custom',
          placeholder:'/services/portrate.png',
          type:'custom'
          }
      ]
    },
    {
      heading:'Other Merchandise',
      value:'Other Merchandise',
      image:"/services/Other-Merchandise.jpg",
      children:'Apparel',
      bg:'',
      color:'',
      custom:[
        {
          label:'custom',
          value: 'custom',
          placeholder:'/services/portrate.png',
          type:'custom'
          }
      ]
    },
    {
      heading:'Shirt Graphics',
      value:'Shirt Graphics',
      image:"/services/Shirt-Graphics.jpg",
      children:'Apparel',
      bg:'',
      color:'',
      custom:[
        {
          label:'custom',
          value: 'custom',
          placeholder:'/services/portrate.png',
          type:'custom'
          }
      ]
    },
    {
      heading:'Stickers',
      value:'Stickers',
      image:"/services/Stickers.jpg",
      children:'Apparel',
      bg:'',
      color:'',
      custom:[
        {
          label:'custom',
          value: 'custom',
          placeholder:'/services/portrate.png',
          type:'custom'
          }
      ]
    },
    {
      heading:'Explainer Videos',
      value:'Explainer Videos',
      image:"/services/Explainer-Videos.jpg",
      children:'Motion Graphics',
      bg:'',
      color:'',
      custom:[
        { 
          text: '16" x 9"',
          placeholder:'/services/landscape.png',
          label:'16" x 9"',
          value: '16" x 9"',
          type:'fix'
        },
      ]
    },
    {
      heading:'Animated Logos',
      value:'Animated Logos',
      image:"/services/Animated-Logos.jpg",
      children:'Motion Graphics',
      bg:'',
      color:'',
      custom:[
        { 
          text: '16" x 9"',
          placeholder:'/services/landscape.png',
          label:'16" x 9"',
          value: '16" x 9"',
          type:'fix'
        },
        { 
          text: '1" x 1"',
          placeholder:'/services/square.png',
          label:'1" x 1"',
          value: '1" x 1"',
          type:'fix'
        }

      ]
    },
    {
      heading:'Animated Infographics',
      value:'Animated Infographics',
      image:"/services/Animated-Infographics.jpg",
      children:'Motion Graphics',
      bg:'',
      color:'',
      custom:[
        {
          label:'Responsive ',
          value: 'Responsive ',
          placeholder:'/services/portrate.png',
          type:'Responsive '
        }
      ]
    },
    {
      heading:'Animated Intro/Outro',
      value:'Animated Intro/Outro',
      image:"/services/Animated-Intro-Outro.jpg",
      children:'Motion Graphics',
      bg:'',
      color:'',
      custom:[
        { 
          text: '16" x 9"',
          placeholder:'/services/landscape.png',
          label:'16" x 9"',
          value: '16" x 9"',
          type:'fix'
        },
        { 
          text: '1" x 1"',
          placeholder:'/services/square.png',
          label:'1" x 1"',
          value: '1" x 1"',
          type:'fix'
        }

      ]
    },
    {
      heading:'Social Media Animations',
      value:'Social Media Animations',
      image:"/services/Social-Media-Animations.jpg",
      children:'Motion Graphics',
      bg:'',
      color:'',
      custom:[
        { 
          text: '16" x 9"',
          placeholder:'/services/landscape.png',
          label:'16" x 9"',
          value: '16" x 9"',
          type:'fix'
        },
        { 
          text: '1" x 1"',
          placeholder:'/services/square.png',
          label:'1" x 1"',
          value: '1" x 1"',
          type:'fix'
        },
        { 
          text: '9" x 16"',
          placeholder:'/services/portrate.png',
          label:'9" x 16',
          value: '9" x 16',
          type:'fix'
        }

      ]
    },
    {
      heading:'Event Invitations and Promotions',
      value:'Event Invitations and Promotions',
      image:"/services/Event-Invitations-and-Promotions.jpg",
      children:'Motion Graphics',
      bg:'',
      color:'',
      custom:[
        { 
          text: '16" x 9"',
          placeholder:'/services/landscape.png',
          label:'16" x 9"',
          value: '16" x 9"',
          type:'fix'
        },
        { 
          text: '1" x 1"',
          placeholder:'/services/square.png',
          label:'1" x 1"',
          value: '1" x 1"',
          type:'fix'
        },
        { 
          text: '9" x 16"',
          placeholder:'/services/portrate.png',
          label:'9" x 16',
          value: '9" x 16',
          type:'fix'
        }

      ]
    },
    {
      heading:'Product Demos',
      value:'Product Demos',
      image:"/services/Product-Demos.jpg",
      children:'Motion Graphics',
      bg:'',
      color:'',
      custom:[
        { 
          text: '16" x 9"',
          placeholder:'/services/landscape.png',
          label:'16" x 9"',
          value: '16" x 9"',
          type:'fix'
        },
      ]
    },
    {
      heading:'GIF',
      value:'GIF',
      image:"/services/GIF.jpg",
      children:'Motion Graphics',
      bg:'',
      color:'',
      custom:[
        {
          label:'custom',
          value: 'custom',
          placeholder:'/services/portrate.png',
          type:'custom'
          }
      ]
    },
    {
      heading:'Radio Scripts',
      value:'Radio Scripts',
      image:"/services/Radio-Scripts.jpg",
      children:'CopyWriting',
      bg:'',
      color:'',
      custom:[
        {
        text: 'text-script',
        placeholder:'/services/landscape.png',
        label:'text-script',
        value: 'text-script',
        type:'text-script'
        }

      ]

    },
    {
      heading:'Blog',
      value:'Blog',
      image:"/services/Blog.jpg",
      children:'CopyWriting',
      bg:'',
      color:'',
      custom:[
        {
        text: 'text-words',
        placeholder:'/services/landscape.png',
        label:'text-words',
        value: 'text-words',
        type:'text-words'
        }

      ]
    },
    {
      heading:'Product Desciptions',
      value:'Product Desciptions',
      image:"/services/Product-Desciptions.jpg",
      children:'CopyWriting',
      bg:'',
      color:'',
      custom:[
        {
        text: 'text-products',
        placeholder:'/services/landscape.png',
        label:'text-products',
        value: 'text-products',
        type:'text-products'
        }

      ]
    },
    {
      heading:'User Manuals',
      value:'User Manuals',
      image:"/services/User-Manuals.jpg",
      children:'CopyWriting',
      bg:'',
      color:'',
      custom:[
        {
        text: 'text-pages',
        placeholder:'/services/landscape.png',
        label:'text-pages',
        value: 'text-pages',
        type:'text-pages'
        }

      ]
    },
    {
      heading:'Techincal Guide',
      value:'Techincal Guide',
      image:"/services/Techincal-Guide.jpg",
      children:'CopyWriting',
      bg:'',
      color:'',
      custom:[
        {
        text: 'text-pages',
        placeholder:'/services/landscape.png',
        label:'text-pages',
        value: 'text-pages',
        type:'text-pages'
        }

      ]
    },
    {
      heading:'FAQ Section',
      value:'FAQ Section',
      image:"/services/FAQ-Section.jpg",
      children:'CopyWriting',
      bg:'',
      color:'',
      custom:[
        {
        text: 'text-questions',
        placeholder:'/services/landscape.png',
        label:'text-questions',
        value: 'text-questions',
        type:'text-questions'
        }

      ]
    },
    {
      heading:'Interview Questions',
      value:'Interview Questions',
      image:"/services/Interview-Questions.jpg",
      children:'CopyWriting',
      bg:'',
      color:'',
      custom:[
        {
        text: 'text-questions',
        placeholder:'/services/landscape.png',
        label:'text-questions',
        value: 'text-questions',
        type:'text-questions'
        }

      ]
    },
    {
      heading:'Presentation Scripts',
      value:'Presentation Scripts',
      image:"/services/Presentation-Scripts.jpg",
      children:'CopyWriting',
      bg:'',
      color:'',
      custom:[
        {
        text: 'text-slides',
        placeholder:'/services/landscape.png',
        label:'text-slides',
        value: 'text-slides',
        type:'text-slides'
        }

      ]
    },
    {
      heading:'Whitepaper',
      value:'Whitepaper',
      image:"/services/Whitepaper.jpg",
      children:'CopyWriting',
      bg:'',
      color:'',
      custom:[
        {
        text: 'text-pages',
        placeholder:'/services/landscape.png',
        label:'text-pages',
        value: 'text-pages',
        type:'text-pages'
        }

      ]
    },
    {
      heading:'Casestudies',
      value:'Casestudies',
      image:"/services/Casestudies.jpg",
      children:'CopyWriting',
      bg:'',
      color:'',
      custom:[
        {
        text: 'text-pages',
        placeholder:'/services/landscape.png',
        label:'text-pages',
        value: 'text-pages',
        type:'text-pages'
        }

      ]
    },
    {
      heading:'Internall Communciations',
      value:'Internall Communciations',
      image:"/services/Internall-Communciations.jpg",
      children:'CopyWriting',
      bg:'',
      color:'',
      custom:[
        {
        text: 'text-pages',
        placeholder:'/services/landscape.png',
        label:'text-pages',
        value: 'text-pages',
        type:'text-pages'
        }

      ]
    },
    {
      heading:'Slogans & Taglines',
      value:'Slogans & Taglines',
      image:"/services/Slogans-Taglines.jpg",
      children:'CopyWriting',
      bg:'',
      color:'',
      custom:[
        {
        text: 'text-Variations',
        placeholder:'/services/landscape.png',
        label:'text-Variations',
        value: 'text-Variations',
        type:'text-Variations'
        }

      ]
    },
    {
      heading:'Press Release',
      value:'Press Release',
      image:"/services/Press-Release.jpg",
      children:'CopyWriting',
      bg:'',
      color:'',
      custom:[
        {
        text: 'text-pages',
        placeholder:'/services/landscape.png',
        label:'text-pages',
        value: 'text-pages',
        type:'text-pages'
        }

      ]
    },
    {
      heading:'Email Campaigns',
      value:'Email Campaigns',
      image:"/services/Email-Campaigns.jpg",
      children:'CopyWriting',
      bg:'',
      color:'',
      custom:[
        {
        text: 'text-emails',
        placeholder:'/services/landscape.png',
        label:'text-emails',
        value: 'text-emails',
        type:'text-emails'
        }

      ]
    },
    {
      heading:'Direct Mailers',
      value:'Direct Mailers',
      image:"/services/Direct-Mailers.jpg",
      children:'CopyWriting',
      bg:'',
      color:'',
      custom:[
        {
        text: 'text-Variations',
        placeholder:'/services/landscape.png',
        label:'text-Variations',
        value: 'text-Variations',
        type:'text-Variations'
        }
      ]
    },  
  
  ];
  
  
  
export const categoryTitles: CategoryTitle[] = [
    {
      label: "Graphics",
      value: "Graphics",
      icon:BrushIcon,
      bg:"bg-green-100 ",
      color:"text-green-800",
      brandType:['7 - Eleven','7 - Eleven Other set','7 - Eleven with name','Create Custom Profile']
    },
    {
      label: "Social Media Graphics",
      value: "Social Media Graphics",
      icon:RadioTowerIcon,
      bg:"bg-yellow-100",
      color:"text-yellow-800",
      brandType:['7 - Eleven','7 - Eleven Other set','7 - Eleven with name','Create Custom Profile']
    },
    {
      label: "Paid Ads",
      value: "Paid Ads",
      icon:BadgeDollarSignIcon,
      bg:"bg-yellow-100",
      color:"text-yellow-800",
      brandType:['7 - Eleven','7 - Eleven Other set','7 - Eleven with name','Create Custom Profile']
    },
    {
      label: "Apparel",
      value: "Apparel",
      icon:WavesIcon,
      bg:"bg-yellow-100",
      color:"text-yellow-800",
      brandType:['7 - Eleven','7 - Eleven Other set','7 - Eleven with name','Create Custom Profile']
    },
    {
      label: "Motion Graphics",
      value: "Motion Graphics",
      icon:WindIcon,
      bg:"bg-yellow-100",
      color:"text-yellow-800",
      brandType:['7 - Eleven','7 - Eleven Other set','7 - Eleven with name','Create Custom Profile']
    },
    {
      label: "CopyWriting",
      value: "CopyWriting",
      icon:CopyrightIcon,
      bg:"bg-yellow-100",
      color:"text-yellow-800",
      brandType:['7 - Eleven','7 - Eleven Other set','7 - Eleven with name','Create Custom Profile']
    },
    {
      label: "All",
      value: "",
      icon:CopyrightIcon,
      bg:"bg-yellow-100",
      color:"text-yellow-800",
      brandType:['7 - Eleven','7 - Eleven Other set','7 - Eleven with name','Create Custom Profile']
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
  name:false,
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
 },
 { 
  label:'Create Custom Profile',
  name:true,
  colors: [],
  style:['brand-one.png','brand-two.png','brand-three.png','brand-four.png'],
  fonts:[
    {name:'Roboto',font:roboto},
    {name:'Lusitana',font:lusitana},
    {name:'Inter',font:inter},
    {name:'Open Sans',font:openSans},
    {name:'Noto Sans',font:notoSans},
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
  },
  {
    text: 'Scalable Vector Format',
    placeholder:'/services/portrate.png',
    label:'Scalable Vector Format',
    value: 'scalable vector',
    type:'scalable-vector' 
  },
  {
    text: '3.5" x 2"',
    placeholder:'/services/portrate.png',
    label:'3.5" x 2"',
    value: '3.5" x 2"',
    type:'size' 
  },
  {
    text: 'Letterhead (8.5" x 11")',
    placeholder:'/services/portrate.png',
    label:'Letterhead (8.5" x 11")',
    value: 'Letterhead (8.5" x 11")',
    type:'size'  
  },
  {
    text: 'Envelopes (4 1/8" x 9 1/2")',
    placeholder:'/services/portrate.png',
    label:'Envelopes (4 1/8" x 9 1/2")',
    value: 'Envelopes (4 1/8" x 9 1/2")' ,
    type:'size' 
  },
  {
    text: '8.5" x 11" (tri-fold)',
    placeholder:'/services/portrate.png',
    label:'8.5" x 11" (tri-fold)',
    value: '8.5" x 11" (tri-fold)' ,
    type:'size' 
  },
  {
    text: '11" x 17" (bi-fold)',
    placeholder:'/services/portrate.png',
    label:'11" x 17" (bi-fold)',
    value: '11" x 17" (bi-fold)',
    type:'size'  
  }, 
  {
    text: '8.5" x 11"',
    placeholder:'/services/portrate.png',
    label:'8.5" x 11"',
    value: '8.5" x 11"',
    type:'size'  
  }, 
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