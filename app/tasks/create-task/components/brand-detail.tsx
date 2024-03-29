"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

import { taskTitles, categoryTitles, Brandprofiles } from "@/use-cases/global-data"
import Image from "next/image"
import { CheckCheckIcon, CircleFadingPlus, MinusCircleIcon, PlusCircle } from "lucide-react"
import { useEffect, useState } from "react"
import { BrandInfoType } from "@/use-cases/global-types"
import { Checkbox } from "@/components/ui/checkbox"

import CustomBrandDrawer from "./custom-brand-details"

interface BrandDetailProps {
  formRef: React.RefObject<HTMLFormElement>;
  service?: string;
  onBrandProfileChange: (value: string[]) => void; // Add a prop for handling checkbox changes
  selectedBrandProfile: string[],
}

export function BrandDetail({ formRef, service, onBrandProfileChange, selectedBrandProfile }: BrandDetailProps) {

  const selectedCategoryBrandProfiles = categoryTitles.find((item) => item.value === taskTitles.find((item) => item.value === service)?.children)?.brandType;

  const [selectedBrandProfiles, setSelectedBrandProfiles] = useState<string[]>(selectedBrandProfile);

  const handleDrawerChange = (value: string, isChecked: boolean) => {
    // Handle checkbox changes here, you can use the formRef to access the form
    // if (isChecked) {
    //   // Add the checked brand profile to the array
    //   setSelectedBrandProfiles([value]);
    //   onBrandProfileChange([value]);
    // } else {
    //   // Remove the unchecked brand profile from the array
    //   setSelectedBrandProfiles([]);
    //   onBrandProfileChange([]);
    // }

    if (value !== undefined) {
      setSelectedBrandProfiles((prevProfiles) => {
        // If checkbox is checked and value is not in selectedSizes, add it
        if (isChecked && !prevProfiles.includes(value)) {
          return [...prevProfiles, value];
        }
        // If checkbox is unchecked, remove the value from selectedSizes
        if (!isChecked) {
          return prevProfiles.filter((profile) => profile !== value);
        }
        return prevProfiles;
      });

      onBrandProfileChange(selectedBrandProfiles);

    }




  };

  useEffect(() => {
    setSelectedBrandProfiles(selectedBrandProfiles);

  }, [selectedBrandProfiles]);

  return (
    <>
      {selectedCategoryBrandProfiles?.map((brandProfile, i) => {
        const CurrentBrandProfile = Brandprofiles.find((item) => item.label === brandProfile);
        return <div key={i}>{CurrentBrandProfile?.name ?
          <CustomBrandDrawer key={i} formRef={formRef} brandProfile={CurrentBrandProfile} onDrawerChange={handleDrawerChange} checked={selectedBrandProfiles.includes(brandProfile)} ></CustomBrandDrawer> : <BrandDrawer key={i} formRef={formRef} brandProfile={CurrentBrandProfile} onDrawerChange={handleDrawerChange} checked={selectedBrandProfiles.includes(brandProfile)} ></BrandDrawer>}
        </div>;
      })}

    </>
  )
}


export default BrandDetail;

interface BrandDrawerProps {
  key: any;
  formRef: React.RefObject<HTMLFormElement>;
  brandProfile?: BrandInfoType;
  onDrawerChange: (value: string, isChecked: boolean) => void; // Add a prop for handling checkbox changes
  checked: boolean;
}

const BrandDrawer: React.FC<BrandDrawerProps> = ({ formRef, brandProfile, onDrawerChange, checked }) => {

  const CurrentBrandProfile = brandProfile;

  const [isChecked, setIsChecked] = useState(checked);

  const handleClick = () => {
    const newValue = CurrentBrandProfile?.label;

    setIsChecked(!isChecked);
    onDrawerChange(newValue ?? '', !isChecked);
  };


  useEffect(() => {
    // Update the isChecked state when the checked prop changes
    setIsChecked(checked);
  }, [checked]);

  return <>
    {CurrentBrandProfile !== undefined &&
        <div  className={`flex items-center justify-between py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none rounded-lg border border-gray-200 hover:text-blue-700 focus:z-10 focus:ring-4 ${
          isChecked ? 'bg-green-400' : ''
        }`}>
   
  
    <Drawer >
          <DrawerTrigger asChild>
                 <div className="flex items-center justify-between gap-x-8"> 
                 <span className="">{CurrentBrandProfile.label}</span>
                  <span className="flex items-center justify-between">
                      <span className=" m-1 inline-block w-[20px] h-[20px] rounded-full bg-[#d33938]" ></span>
                      <span className="m-1 inline-block w-[20px] h-[20px] rounded-full bg-[#ec8023]"></span>
                      <span className="m-1 inline-block w-[20px] h-[20px] rounded-full bg-[#457c60]"></span>
                  </span>
                  </div>
          </DrawerTrigger>
          <Checkbox id={CurrentBrandProfile.label} checked={isChecked} onCheckedChange={handleClick} className="shirnk"/>
          <DrawerContent className="overflow-auto">
            <div className="mx-auto w-full overflow-auto h-[70vh]">
              <DrawerHeader>
                <DrawerTitle>{CurrentBrandProfile.label}

                  {/* <Button onClick={handleClick} disabled={isChecked} className={`float-right ${
        isChecked ? 'bg-green-400' : ''
      }`} >
              <CheckCheckIcon></CheckCheckIcon>
            </Button> */}
                  <Checkbox id={CurrentBrandProfile.label}  checked={isChecked} onCheckedChange={handleClick} className={`float-right ${isChecked ? 'bg-green-400' : ''
                    }`} />
                </DrawerTitle>
                {/*<DrawerDescription>Set your daily activity goal.</DrawerDescription>*/}
              </DrawerHeader>
              <div className="p-4 pb-0">
                <div className="grid">
                  <div className="mb-4">
                    <h3 className="tracking-tight py-2 text-base font-semibold text-gray-900 mb-2">Brand Colors</h3>
                    <div className="flex items-center flex-wrap">
                      {CurrentBrandProfile.colors.map((color, i) => {
                        return <span key={i}><span className={`m-1 inline-block w-[20px] h-[20px] rounded-full`} style={{ backgroundColor: color }}></span></span>;
                      })}
                    </div>
                  </div>
                  <div className="mb-4">
                    <h3 className="tracking-tight py-2 text-base font-semibold text-gray-900 mb-2">Brand Styles</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
                      {CurrentBrandProfile.style.map((style, i) => {
                        return <div key={i}>
                          <div className="p-2 text-gray-900 rounded border border-gray-200 bg-gray-100 dark:border-gray-600" >
                            <div className="w-[100px] h-[100px] mx-auto" style={{ position: 'relative' }}><Image fill={true} src={`/services/${style}`} alt="img" className="w-full h-[100%] max-w-[100%] block mx-auto object-contain"></Image></div>
                            <p className="text-base text-gray-500 text-center mt-2">{style}</p>
                          </div>
                        </div>;
                      })}
                    </div>
                  </div>
                  <div className="mb-4">
                    <h3 className="tracking-tight py-2 text-base font-semibold text-gray-900 mb-2">Brand Fonts</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">

                      {CurrentBrandProfile.fonts.map((font, i) => {
                        return <div key={i}>
                          <div className="p-2 text-gray-900 rounded border border-gray-200 bg-gray-100 dark:border-gray-600">
                            <h2 className={`block text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight dark:text-slate-200 text-center ${font.font.className}`}>Preview Text</h2>
                            <p className="text-base text-gray-500 text-center mt-2">{font.name}</p>
                          </div>
                        </div>;
                      })}

                    </div>
                  </div>
                </div>
              </div>
              <DrawerFooter>
                <DrawerClose asChild>
                  <Button variant="outline" className="text-white bg-gray-800  font-medium rounded-lg text-sm px-5 py-2.5  mb-2  max-w-[150px] mx-auto w-full">Close</Button>
                </DrawerClose>
              </DrawerFooter>
            </div>
          </DrawerContent>
        </Drawer></div>}
  </>

}






