import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { TaskSizeType } from "@/use-cases/global-types"
import { useState } from "react"
import { useDebouncedCallback } from 'use-debounce';


  interface CustomSizeProps {

    formRef: React.RefObject<HTMLFormElement>; // Correct the type to RefObject<HTMLInputElement>
    size: TaskSizeType;
    onCheckboxChange: (value?: string, isChecked?: boolean) => void; // Add a prop for handling checkbox changes
    checked?:string;

  }
  
 export const CustomSizePopOver: React.FC<CustomSizeProps> = ({ formRef, size,onCheckboxChange,checked  }) => {

   const custom_sizes = checked?.split('|');

   const [customSizes, setcustomSizes] = useState({

    width:custom_sizes?.at(0),
    height:custom_sizes?.at(1),
    unit:custom_sizes?.at(2),

   });
   

  //  const handleChange = ({ width,height,unit }: { width?: string, height?: string, unit?: string, }) => {
  //   // Function body (currently empty)
     
  //    setcustomSizes({width,height,unit})
     

  //   onCheckboxChange(customSizes?.width+'|'+customSizes?.height+'|'+customSizes?.unit,true);
  // };


  const handleChange = useDebouncedCallback(({ width, height, unit }: { width?: string, height?: string, unit?: string }) => {
    // Function body
    setcustomSizes({ width, height, unit });
    onCheckboxChange(`${width}|${height}|${unit}`, true);
    
  }, 300);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">{size.label}</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Dimensions</h4>
            <p className="text-sm text-muted-foreground">
              Set the dimensions for the layer.
            </p>
          </div>
          <div className="grid gap-2">
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="width">Width</Label>
              <Input
                id="width"
                defaultValue={custom_sizes?.at(0)}
                className="col-span-2 h-8"
                onChange={(e) => { handleChange({width:e.target.value,height:customSizes.height,unit:customSizes.unit}); }}
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="height">Height</Label>
              <Input
                id="height"
                defaultValue={custom_sizes?.at(1)}
                className="col-span-2 h-8"
                onChange={(e) => { handleChange({width:customSizes.width,height:e.target.value,unit:customSizes.unit}); }}
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="maxHeight">Unit</Label>
              <Select onValueChange={(e) => {handleChange({width:customSizes.width,height:customSizes.height,unit:e});}}>
                        <SelectTrigger className="">
                            <SelectValue placeholder="Select a types" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>No Preference</SelectLabel>
                                <SelectItem value="inch" aria-selected={custom_sizes?.at(2) === 'inch'}>Inch</SelectItem>
                                <SelectItem value="cm" aria-selected={custom_sizes?.at(2) === 'cm'}>Centimeter</SelectItem>
                                <SelectItem value="px" aria-selected={custom_sizes?.at(2) === 'px'}>Pixcel</SelectItem>
                            </SelectGroup>
                        </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}
