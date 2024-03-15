"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
//import { Checkbox } from "@/components/ui/checkbox";
import { taskTitles, sizes } from "@/use-cases/global-data";
import { TaskSizeType } from "@/use-cases/global-types";

import Image from "next/image"
import { useRef, useState } from "react";
import { CustomSizePopOver } from "./custom-size-popover";


interface SizeDropProps {
  formRef: React.RefObject<HTMLInputElement>;
  service?: string;
}


export function SizeDrop({ formRef, service }: SizeDropProps) {


  const selectedTask = taskTitles.find((item) => item.value === service);
  const selectedTaskSizes = selectedTask?.custom;

  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [selectedCustomSizes, setSelectedCustomSizes] = useState<string>('100|100|cm');

  const [selectedWords, setselectedWords] = useState<string>();

  const frmRef = useRef<HTMLFormElement>(null);

  const handleCheckboxChange = (value?: string, isChecked?: boolean) => {
    // Handle checkbox changes here, you can use the formRef to access the form
    if (value !== undefined) {
      setSelectedSizes((prevSizes) => {
        // If checkbox is checked and value is not in selectedSizes, add it
        if (isChecked && !prevSizes.includes(value)) {
          return [...prevSizes, value];
        }
        // If checkbox is unchecked, remove the value from selectedSizes
        if (!isChecked) {
          return prevSizes.filter((size) => size !== value);
        }
        return prevSizes;
      });
    }

    console.log(`Checkbox with value ${value} is ${isChecked ? 'checked' : 'unchecked'}`);
  };



  const handleCustomSize = (value?: string, isChecked?: boolean) => {

    const updatedValue = value || "";

    setSelectedCustomSizes(updatedValue);

    console.log(`Checkbox with value ${value} is ${isChecked ? 'checked' : 'unchecked'}`);
  };


  const numberWordValidate = () => {

   

  }



  return (
    <>
      {selectedTask?.children !== 'CopyWriting' && <Label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Size(s)*</Label>}

      {
        selectedTask?.children === 'CopyWriting' && (
          <div className="grid grid-cols-2 gap-4 mt-6">
            <div className="text-center">
              <Label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                {selectedTaskSizes?.at(0)?.type?.split('-').at(1) === 'script'
                  ? 'Length of Script'
                  : 'Number of ' + selectedTaskSizes?.at(0)?.type?.split('-').at(1)}
              </Label>
            </div>
            <div>
              <Input
                id="tasksize"
                name="tasksize"
                defaultValue={''}
                type="text"
                className="bg-gray-50 border border-gray-300 text-sm flex-auto px-3.5 py-2 shadow-sm ring-1 ring-white/10 sm:text-sm sm:leading-6 w-16"
              />
            </div>
          </div>
        )
      }

      {selectedTask?.children !== 'CopyWriting' && <><Popover >
        <PopoverTrigger asChild>
          <Button variant="outline" className="flex h-10 w-full items-center justify-between rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 dark:border-slate-800 dark:bg-slate-950 dark:ring-offset-slate-950 dark:placeholder:text-slate-400 dark:focus:ring-slate-300">
            <span>Select Sizes</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down h-4 w-4 opacity-50" aria-hidden="true"><path d="m6 9 6 6 6-6"></path></svg>
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[100%] min-w-[200px]  max-h-[400px] overflow-auto" ref={formRef}>
          <div className="grid gap-4">

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {selectedTaskSizes?.map((title, i) => {
                const type = title.type;

                if (type === 'custom' || type === 'scalable') {

                  return <CustomSizePopOver key={i} formRef={frmRef} size={title} onCheckboxChange={handleCustomSize} checked={selectedCustomSizes} />;

                } else {

                  return (
                    <div className="flex justify-center text-6xl bg-gray-100" key={i}>
                      <SizeIcon
                        formRef={formRef}
                        onCheckboxChange={handleCheckboxChange}
                        checked={selectedSizes.includes(title.value)}
                      >
                        {title}
                      </SizeIcon>
                    </div>
                  );

                }
              })}
            </div>
          </div>
        </PopoverContent>
      </Popover>
        {selectedSizes?.map((size, i) => (
          <input key={i} type="hidden" name={`tasksize[${i}]`} value={size} />
        ))}
      </>
      }


    </>
  )
}





interface SizeIconProps {
  formRef: React.RefObject<HTMLInputElement>; // Correct the type to RefObject<HTMLInputElement>
  children: TaskSizeType;
  onCheckboxChange: (value?: string, isChecked?: boolean) => void; // Add a prop for handling checkbox changes
  checked?: boolean;
}

const SizeIcon: React.FC<SizeIconProps> = ({ formRef, children, onCheckboxChange, checked }) => {

  const [isChecked, setIsChecked] = useState(checked);

  const handleClick = () => {
    const newValue = children?.value;
    setIsChecked(!isChecked);
    onCheckboxChange(newValue, !isChecked);
  };

  return (
    <> <div onClick={handleClick} className={`items-top w-full py-2.5 px-5 text-gray-900 rounded border border-gray-200 bg-gray-100 dark:border-gray-600 ${isChecked ? 'bg-green-200' : ''
      }`}>
      <div className="w-[60px] h-[60px] mx-auto " style={{ position: 'relative' }}>
        <Image fill={true} src={children.placeholder} alt="Photo by Drew Beamer" className="rounded-md object-contain w-[100%] h-[100%] mx-auto mb-4" />
      </div>
      <h4 className="text-center text-sm font-medium leading-none my-3">{children.label}</h4>
      <p className="text-base text-gray-500 text-sm text-center">{children.text}</p>
      <input ref={formRef} type="checkbox" name="tasksizes[]" onChange={handleClick} checked={isChecked} value={children.value} style={{ display: 'none' }} />
    </div>
    </>
  );
};




interface CustomSizeProps {
  formRef: React.RefObject<HTMLInputElement>; // Correct the type to RefObject<HTMLInputElement>
  children: TaskSizeType;
  onCheckboxChange: (value?: string, isChecked?: boolean) => void; // Add a prop for handling checkbox changes
  checked?: boolean;
}

const CustomSize: React.FC<CustomSizeProps> = ({ formRef, children, onCheckboxChange, checked }) => {

  const [isChecked, setIsChecked] = useState(checked);

  const handleClick = () => {
    const newValue = children?.value;
    setIsChecked(!isChecked);
    onCheckboxChange(newValue, !isChecked);
  };

  return (
    <> <div onClick={handleClick} className={`items-top w-full py-2.5 px-5 text-gray-900 rounded border border-gray-200 bg-gray-100 dark:border-gray-600 ${isChecked ? 'bg-green-200' : ''
      }`}>
      <div className="w-[60px] h-[60px] mx-auto " style={{ position: 'relative' }}>
        <Image fill={true} src={children.placeholder} alt="Photo by Drew Beamer" className="rounded-md object-contain w-[100%] h-[100%] mx-auto mb-4" />
      </div>
      <h4 className="text-center text-sm font-medium leading-none my-3">{children.label}</h4>
      <p className="text-base text-gray-500 text-sm text-center">{children.text}</p>
      <input ref={formRef} type="checkbox" name="tasksizes[]" onChange={handleClick} checked={isChecked} value={children.value} style={{ display: 'none' }} />
    </div>
    </>
  );
};









export default SizeDrop;
