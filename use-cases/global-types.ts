
type IconProps = React.SVGProps<SVGSVGElement>;


export type CategoryTitle = {
    label:string,
    value:string,
    icon:React.ForwardRefExoticComponent<IconProps & React.RefAttributes<SVGSVGElement>>,
    bg:string,
    color:string,
  }
  
  
  export type TaskTypeTitle = {
    heading:string,
    value:string,
    image:string,
    children:string,
    bg:string,
    color:string,
    brandingType?:string,
    sizes?:TaskSizes[]
  }
  
  export type TaskSizes = {
     text:string,
     placeholder:string,
     label:string,
     value:string,
  }
  
  