import { Button } from "@/components/ui/button";
import { Drawer, DrawerClose, DrawerContent, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CheckCheckIcon, MinusCircleIcon, PlusCircle } from "lucide-react";
import ColorPicker from "./color-input";
import { useEffect, useState } from "react";
import { BrandInfoType } from "@/use-cases/global-types";
import Image from "next/image";
import BrandStyle from "./brand-style";
import BrandFontStyle from "./brand-font-style";

import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { FontPicker } from "@/components/FontPicker";
import Uploader from "@/components/uploader";
import { Checkbox } from "@/components/ui/checkbox"
import { Toaster } from "@/components/toaster";
import { ListBlobResult, list } from '@vercel/blob';
import { getItem } from "@/lib/utils";
import getBlobs from "./get-Blobs";


interface CustomBrandDrawerProps {
    formRef: React.RefObject<HTMLFormElement>;
    brandProfile: BrandInfoType;
    onDrawerChange: (value: string, isChecked: boolean) => void; // Add a prop for handling checkbox changes
    checked: boolean;
}

const CustomBrandDrawer: React.FC<CustomBrandDrawerProps> =  ({ formRef, brandProfile, onDrawerChange, checked }) => {


    const CurrentBrandProfile = brandProfile;

    const [isChecked, setIsChecked] = useState(checked);

    const handleClick = async () => {
        const newValue = CurrentBrandProfile?.label;

        setIsChecked(!isChecked);
        onDrawerChange(newValue ?? '', !isChecked);

        let customBrandStyle =await getBlobs({prefix:'test'});
    
        setDirs(customBrandStyle);

    };



   

    const [selectedColors, setSelectedColors] = useState<string[]>(CurrentBrandProfile.colors);

    const [selectedStyles, setSelectedStyles] = useState<string[]>([]);
    const [selectedFonts, setSelectedFonts] = useState<string[]>([]);
    const [dirs, setDirs] = useState<ListBlobResult>();
   

    const [customStyle, setCustomStyle] = useState<boolean>(false);
    const [customFont, setCustomFont] = useState<boolean>(false);

    const handleCustomColor = (value?: string, isChecked?: boolean) => {

        if (value !== undefined) {
            setSelectedColors((prevColors) => {
                // If checkbox is checked and value is not in selectedSizes, add it
                if (isChecked && !prevColors.includes(value)) {
                    return [...prevColors, value];
                }
                // If checkbox is unchecked, remove the value from selectedSizes
                if (!isChecked) {
                    return prevColors.filter((color) => color !== value);
                }
                return prevColors;
            });
        }

    }




    const handleCustomStyle = (value?: string, isChecked?: boolean) => {

        if (value !== undefined) {
            setSelectedStyles((prevStyles) => {
                // If checkbox is checked and value is not in selectedSizes, add it
                if (isChecked && !prevStyles.includes(value)) {
                    return [...prevStyles, value];
                }
                // If checkbox is unchecked, remove the value from selectedSizes
                if (!isChecked) {
                    return prevStyles.filter((style) => style !== value);
                }
                return prevStyles;
            });
        }

    }



    const handleCustomFonts = (value?: string, isChecked?: boolean) => {

        if (value !== undefined) {
            setSelectedFonts((prevFonts) => {
                // If checkbox is checked and value is not in selectedSizes, add it
                if (isChecked && !prevFonts.includes(value)) {
                    return [...prevFonts, value];
                }
                // If checkbox is unchecked, remove the value from selectedSizes
                if (!isChecked) {
                    return prevFonts.filter((font) => font !== value);
                }
                return prevFonts;
            });
        }

    }



    const handleCustomUpload = async (uploaded?: boolean) => {
        // Your async logic here
        try {
            const response = await fetch("/api/brand-list");
            if (!response.ok) {
                throw new Error("Failed to fetch data");
            }
            const data = await response.json(); // Parse JSON response
            console.log(data);
            setDirs(data); // Assuming data is an array of strings
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };


          

    useEffect(() => {
        // Update the isChecked state when the checked prop changes
        setIsChecked(checked);

        async function fetchData() {
      
            let customBrandStyle =await getBlobs({prefix:'test'});
            setDirs(customBrandStyle);
             
            }
            if(dirs === undefined){
              fetchData();        
            }  
        

    }, [checked,dirs]);

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
                <DrawerContent>
                    <div className="mx-auto w-full overflow-auto h-[70vh]">
                        <DrawerHeader>
                            <DrawerTitle>{CurrentBrandProfile.label}

                                {/* <Button onClick={handleClick} disabled={isChecked} className={`float-right ${isChecked ? 'bg-green-400' : ''
                                    }`} >
                                    <CheckCheckIcon></CheckCheckIcon>
                                </Button> */}
                                <Checkbox  id={CurrentBrandProfile.label}  checked={isChecked} onCheckedChange={handleClick} className={`float-right ${isChecked ? 'bg-green-400' : ''
                                    }`} />
                            </DrawerTitle>
                            {/*<DrawerDescription>Set your daily activity goal.</DrawerDescription>*/}
                        </DrawerHeader>
                        <div className="p-4 pb-0">
                            <div className="grid">
                                <div className="mb-4">
                                    <h3 className="tracking-tight py-2 text-base font-semibold text-gray-900 mb-2">Brand Colors</h3>
                                    <div className="flex items-center flex-wrap">

                                        {selectedColors?.map((color, i) => {
                                            return <><span className={`m-1 inline-block w-[20px] h-[20px] rounded-full relative group`} style={{ backgroundColor: color }}>
                                                <span className="hidden absolute -inset-2 group-hover:inline" onClick={() => handleCustomColor(color, false)}><MinusCircleIcon width={15} height={15}></MinusCircleIcon></span>
                                            </span></>;
                                        })}
                                        <Popover >
                                            <PopoverTrigger asChild>
                                                <Button variant="outline" className="">
                                                    <PlusCircle></PlusCircle>
                                                </Button>
                                            </PopoverTrigger>
                                            <PopoverContent className="w-[100%] min-w-[200px]  max-h-[400px] overflow-auto">

                                                <ColorPicker onCheckboxChange={handleCustomColor}></ColorPicker>

                                            </PopoverContent>
                                        </Popover>


                                        {/* {CurrentBrandProfile.colors.map((color,i)=>{
                            return <><span className={`m-1 inline-block w-[20px] h-[20px] rounded-full`} style={{backgroundColor:color}}></span></>;
                           })} */}
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <h3 className="tracking-tight py-2 text-base font-semibold text-gray-900 mb-2">Brand Styles  <div className="float-right flex items-center space-x-2">
                                        <Switch id="custom-style" checked={customStyle} onCheckedChange={() => setCustomStyle(!customStyle)} />
                                        <Label htmlFor="airplane-mode">Custom Style</Label>
                                    </div></h3>
                                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
                                        <Toaster></Toaster>
                                        {dirs?.blobs.map((style) => {
                                            return <>
                                                <div className={`p-2 text-gray-900 rounded border border-gray-200 bg-gray-100 dark:border-gray-600 ${selectedStyles.includes(style.pathname)?`bg-green-500`:``}`} onClick={()=>handleCustomStyle(style.pathname,!selectedStyles.includes(style.pathname))} >
                                                    <div className="w-[100px] h-[100px] mx-auto" style={{ position: 'relative' }}>
                                                        <Image key={style.pathname} fill={true} src={style.url} alt="img" className="w-full h-[100%] max-w-[100%] block mx-auto object-contain"></Image></div>
                                                </div>
                                            </>;
                                        })}
                                        {/* <FileUpload onFileUploadChange={handleCustomUpload} ></FileUpload> */}
                                        <Uploader />
                                        {/* {customStyle && <BrandStyle></BrandStyle>} */}
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <h3 className="tracking-tight py-2 text-base font-semibold text-gray-900 mb-2">Brand Fonts <div className="float-right flex items-center space-x-2">
                                        <Switch id="custom-font" checked={customFont} onCheckedChange={() => setCustomFont(!customFont)} />
                                        <Label htmlFor="airplane-mode">Custom Font</Label>
                                    </div></h3>
                                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">

                                       <FontPicker></FontPicker>

                                       {customFont && <BrandFontStyle></BrandFontStyle>}
                                      
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

export default CustomBrandDrawer;