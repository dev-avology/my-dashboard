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

export function BrandDetail() {
  return (
    <>
    <Drawer>
        <DrawerTrigger asChild>
            <div  className="flex items-center justify-between py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                7 - Eleven
                <span className="flex items-center justify-between">
                    <span className=" m-1 inline-block w-[20px] h-[20px] rounded-full bg-[#d33938]"></span>
                    <span className="m-1 inline-block w-[20px] h-[20px] rounded-full bg-[#ec8023]"></span>
                    <span className="m-1 inline-block w-[20px] h-[20px] rounded-full bg-[#457c60]"></span>
                </span>
                
            </div>
        </DrawerTrigger>
      <DrawerContent className="overflow-auto">
        <div className="mx-auto w-full overflow-auto h-[70vh]">
          <DrawerHeader>
            <DrawerTitle>7 - Eleven</DrawerTitle>
            {/*<DrawerDescription>Set your daily activity goal.</DrawerDescription>*/}
          </DrawerHeader>
          <div className="p-4 pb-0">
          <div className="grid">
            <div className="mb-4">
                <h3 className="tracking-tight py-2 text-base font-semibold text-gray-900 mb-2">Brand Colors</h3>
                <div className="flex items-center flex-wrap">
                    <span className="m-1 inline-block w-[20px] h-[20px] rounded-full bg-[#fb6d02]"></span>
                    <span className="m-1 inline-block w-[20px] h-[20px] rounded-full bg-[#057452]"></span>
                    <span className="m-1 inline-block w-[20px] h-[20px] rounded-full bg-[#f10e2a]"></span>
                    <span className="m-1 inline-block w-[20px] h-[20px] rounded-full bg-[#ffc71d]"></span>
                    <span className="m-1 inline-block w-[20px] h-[20px] rounded-full bg-[#ff9903]"></span>
                    <span className="m-1 inline-block w-[20px] h-[20px] rounded-full bg-[#00e483]"></span>
                    <span className="m-1 inline-block w-[20px] h-[20px] rounded-full bg-[#0cae4d]"></span>
                    <span className="m-1 inline-block w-[20px] h-[20px] rounded-full bg-[#ff62b3]"></span>
                    <span className="m-1 inline-block w-[20px] h-[20px] rounded-full bg-[#c70104]"></span>
                </div>
            </div>
            <div className="mb-4">
                <h3 className="tracking-tight py-2 text-base font-semibold text-gray-900 mb-2">Brand Assets</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    <div className="p-2 text-gray-900 rounded border border-gray-200 bg-gray-100 dark:border-gray-600">
                       <img src="/services/brand-one.png" alt="img" className="w-full h-[100px] max-w-[150px] block mx-auto object-contain" />
                       <p className="text-base text-gray-500 text-center mt-2">brand-one.png</p>
                    </div>
                    <div className="p-2 text-gray-900 rounded border border-gray-200 bg-gray-100 dark:border-gray-600">
                       <img src="/services/brand-two.png" alt="img" className="ww-full h-[100px] max-w-[150px] block mx-auto object-contain" />
                       <p className="text-base text-gray-500 text-center mt-2">brand-two.png</p>
                    </div>
                    <div className="p-2 text-gray-900 rounded border border-gray-200 bg-gray-100 dark:border-gray-600">
                       <img src="/services/brand-three.png" alt="img" className="w-full h-[100px] max-w-[150px] block mx-auto object-contain" />
                       <p className="text-base text-gray-500 text-center mt-2">brand-three.png</p>
                    </div>
                    <div className="p-2 text-gray-900 rounded border border-gray-200 bg-gray-100 dark:border-gray-600">
                       <img src="/services/brand-four.png" alt="img" className="w-full h-[100px] max-w-[150px] block mx-auto object-contain" />
                       <p className="text-base text-gray-500 text-center mt-2">brand-four.png</p>
                    </div>
                </div>
            </div>
            <div className="mb-4">
                <h3 className="tracking-tight py-2 text-base font-semibold text-gray-900 mb-2">Brand Fonts</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    <div className="p-2 text-gray-900 rounded border border-gray-200 bg-gray-100 dark:border-gray-600">
                       <h2 className="block text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight dark:text-slate-200 text-center">Aa</h2>
                       <p className="text-base text-gray-500 text-center mt-2">ui-sans-serif.zip</p>
                    </div>
                    <div className="p-2 text-gray-900 rounded border border-gray-200 bg-gray-100 dark:border-gray-600">
                    <h2 className="block text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight dark:text-slate-200 text-center">Aa</h2>
                       <p className="text-base text-gray-500 text-center mt-2">ui-sans-serif.zip</p>
                    </div>
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
    </Drawer>
    </>
  )
}
export default BrandDetail;
