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
import Image from "next/image"

export function SizeDrop() {
  return (
    <Popover>
      <PopoverTrigger asChild>
          <Button variant="outline" className="flex h-10 w-full items-center justify-between rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 dark:border-slate-800 dark:bg-slate-950 dark:ring-offset-slate-950 dark:placeholder:text-slate-400 dark:focus:ring-slate-300">
            <span>Select Sizes</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down h-4 w-4 opacity-50" aria-hidden="true"><path d="m6 9 6 6 6-6"></path></svg>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-96 overflow-auto h-96">
        <div className="grid gap-4">
          
          <div className="grid gap-2">

            <div className="grid  items-center gap-4">
                <div className="items-top py-2.5 px-5  text-gray-900  rounded border border-gray-200 bg-gray-100   dark:border-gray-600 ">
              
                <img
                          src="/services/portrate.png"
                          alt="Photo by Drew Beamer"
                         
                          className="rounded-md object-cover w-[80px] mx-auto mb-4"
                        />
                    <h4  className="text-center text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        
                      Twitter Header Photo 
                      <p className="text-base text-gray-500 text-sm text-center">1500x500</p>
                    </h4>
                 
                </div>
            </div>
            <div className="grid items-center gap-4">
                <div className="items-top  py-2.5 px-5  text-gray-900  rounded border border-gray-200 bg-gray-100   dark:border-gray-600">
                
                <img
                          src="/services/portrate.png"
                          alt="Photo by Drew Beamer"
                         
                          className="rounded-md object-cover w-[80px] mx-auto mb-4"
                        />
                  <h4  className="text-center  text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        
                      Facebook Shared Image 
                      <p className="text-base text-gray-500 text-sm text-center">1200 x 630</p>
                    </h4>
                 
                </div>
            </div>
            <div className="grid items-center gap-4">
                <div className="items-top  py-2.5 px-5  text-gray-900  rounded border border-gray-200 bg-gray-100   dark:border-gray-600">
                  
                <img
                          src="/services/portrate.png"
                          alt="Photo by Drew Beamer"
                        
                          className="rounded-md object-cover w-[80px] mx-auto mb-4"
                        />
                  <h4  className=" text-center text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        
                      YouTube Channel Cover Photo 
                      <p className="text-base text-gray-500 text-sm text-center">2560 x 1440</p>
                    </h4>
                  
                </div>
            </div>
            <div className="grid items-center gap-4">
                <div className="items-top  py-2.5 px-5  text-gray-900  rounded border border-gray-200 bg-gray-100   dark:border-gray-600">
                <img
                          src="/services/landscape.png"
                          alt="Photo by Drew Beamer"
                          
                          className="rounded-md object-cover w-[50px] mx-auto mb-4"
                        />
                  
                  <h4  className=" text-center text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        
                      Instagram Stories/ Ad 
                      <p className="text-base text-gray-500 text-sm text-center">1080 x 1920</p>
                    </h4>
                 
                </div>
            </div>
            <div className="grid items-center gap-4">
                <div className="items-top  py-2.5 px-5  text-gray-900  rounded border border-gray-200 bg-gray-100   dark:border-gray-600">
                  
                <img
                          src="/services/portrate.png"
                          alt="Photo by Drew Beamer"
                         
                          className="rounded-md object-cover w-[80px] mx-auto mb-4"
                        />
                  <h4  className=" text-center text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        
                      YouTube Video Upload 
                      <p className="text-base text-gray-500 text-sm text-center">1280 x 720</p>
                    </h4>
                  
                </div>
            </div>
            <div className="grid items-center gap-4">
                <div className="items-top  py-2.5 px-5  text-gray-900  rounded border border-gray-200 bg-gray-100   dark:border-gray-600">
                  
                <img
                          src="/services/portrate.png"
                          alt="Photo by Drew Beamer"
                          
                          className="rounded-md object-cover w-[80px] mx-auto mb-4"
                        />
                  <h4  className=" text-center text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        
                      LinkedIn Company Page Banner 
                      <p className="text-base text-gray-500 text-sm text-center">646 x 220 min.</p>
                    </h4>
                
                </div>
            </div>
            <div className="grid items-center gap-4">
                <div className="items-top py-2.5 px-5  text-gray-900  rounded border border-gray-200 bg-gray-100   dark:border-gray-600">
                  
                <img
                          src="/services/portrate.png"
                          alt="Photo by Drew Beamer"
                        
                          className=" text-center rounded-md object-cover w-[80px] mx-auto mb-4"
                        />
                    <h4  className="text-center w-full text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        
                      Facebook Cover Photo  
                      <p className="text-base text-gray-500 text-sm text-center">820 x 312</p>
                    </h4>
                 
                </div>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}
export default SizeDrop;
