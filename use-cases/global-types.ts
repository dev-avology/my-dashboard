import { NextFont } from "next/dist/compiled/@next/font";

type IconProps = React.SVGProps<SVGSVGElement>;


export type CategoryTitle = {
    label:string,
    value:string,
    icon:React.ForwardRefExoticComponent<IconProps & React.RefAttributes<SVGSVGElement>>,
    bg:string,
    color:string,
    brandType:string[],
  }
  
  
  export type TaskTypeTitle = {
    heading:string,
    value:string,
    image:string,
    children:string,
    bg:string,
    color:string,
    brandingType?:string,
    sizes?:string[]
  }
  
  export type TaskSizeType = {
     text:string,
     placeholder:string,
     label:string,
     value:string,
  }
  
  export type BrandInfoType = {
    label:string,
    name:boolean,
    colors: string[],
    style:string[],
    fonts:BrandFont[],
  }

  export type BrandFont = {
    name:string,
    font:NextFont,
  }

  export type DocFormatType = {
    name:string,
    icon:string,
  }