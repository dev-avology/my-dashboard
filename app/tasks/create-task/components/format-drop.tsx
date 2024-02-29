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

export function FormatDrop() {
  return (
    <Popover>
      <PopoverTrigger asChild>
          <Button variant="outline" className="flex h-10 w-full items-center justify-between rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 dark:border-slate-800 dark:bg-slate-950 dark:ring-offset-slate-950 dark:placeholder:text-slate-400 dark:focus:ring-slate-300">
            <span>Select Format</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down h-4 w-4 opacity-50" aria-hidden="true"><path d="m6 9 6 6 6-6"></path></svg>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[100%] max-w-[800px] overflow-auto h-96">
        <div className="grid gap-4">
          
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className=" flex justify-center text-6xl  bg-gray-100">
                <div className="items-top w-full py-2.5 px-5  text-gray-900  rounded border border-gray-200 bg-gray-100dark:border-gray-600 ">
                <div className="w-[60px] h-[60px] mx-auto "><img src="/services/jpg.png" alt="Photo by Drew Beamer" className="rounded-md object-contain w-[100%] h-[100%] mx-auto mb-4"/></div>
                    <h4 className="text-center text-sm font-medium leading-none my-3">.jpg</h4>
                </div>
            </div>
            <div className="flex justify-center text-6xl  bg-gray-100">
                <div className="items-top w-full py-2.5 px-5 text-gray-900 rounded border border-gray-200 bg-gray-100 dark:border-gray-600">
                <div className="w-[60px] h-[60px] mx-auto "><img src="/services/png.png" alt="Photo by Drew Beamer" className="rounded-md object-contain w-[100%] h-[100%] mx-auto mb-4"/></div>
                  <h4  className="text-center  text-sm font-medium leading-none my-3">.png</h4>
                </div>
            </div>
            <div className="flex justify-center text-6xl bg-gray-100">
                <div className="items-top w-full py-2.5 px-5 text-gray-900 rounded border border-gray-200 bg-gray-100 dark:border-gray-600">
                <div className="w-[60px] h-[60px] mx-auto "><img src="/services/canva.png" alt="Photo by Drew Beamer" className="rounded-md object-contain w-[100%] h-[100%] mx-auto mb-4"/></div>
                  <h4  className=" text-center text-sm font-medium leading-none my-3">canva</h4>     
                </div>
            </div>
            <div className="flex justify-center text-6xl bg-gray-100">
                <div className="items-top w-full py-2.5 px-5 text-gray-900 rounded border border-gray-200 bg-gray-100 dark:border-gray-600">
                <div className="w-[60px] h-[60px] mx-auto "><img src="/services/psd.png" alt="Photo by Drew Beamer"className="rounded-md object-contain w-[100%] h-[100%] mx-auto mb-4"/></div>
                  <h4  className=" text-center text-sm font-medium leading-none my-3">.psd</h4>
                </div>
            </div>
            <div className="flex justify-center text-6xl bg-gray-100">
            <div className="items-top w-full py-2.5 px-5 text-gray-900 rounded border border-gray-200 bg-gray-100 dark:border-gray-600">
                <div className="w-[60px] h-[60px] mx-auto "><img src="/services/ai.png" alt="Photo by Drew Beamer"className="rounded-md object-contain w-[100%] h-[100%] mx-auto mb-4"/></div>
                  <h4 className=" text-center text-sm font-medium leading-none my-3">.ai</h4>
                </div>
            </div>
            <div className="flex justify-center text-6xl  bg-gray-100">
                <div className="items-top w-full py-2.5 px-5 text-gray-900 rounded border border-gray-200 bg-gray-100 dark:border-gray-600">
                <div className="w-[60px] h-[60px] mx-auto "><img src="/services/pdf.png" alt="Photo by Drew Beamer" className="rounded-md object-contain w-[100%] h-[100%] mx-auto mb-4"/></div>
                  <h4  className=" text-center text-sm font-medium leading-none my-3">.pdf</h4>
                </div>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}
export default FormatDrop;
