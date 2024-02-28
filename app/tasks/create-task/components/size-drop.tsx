"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Checkbox } from "@/components/ui/checkbox";
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
      <PopoverContent className="w-96">
        <div className="grid gap-4">
          
          <div className="grid gap-2">

            <div className="grid  items-center gap-4">
                <div className="items-top flex space-x-2">
                  <Checkbox id="terms2" />
                  <div className="grid gap-1.5 leading-none">
                    <label
                      htmlFor="terms2"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        {/*<Image
                          src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
                          alt="Photo by Drew Beamer"
                          fill
                          className="rounded-md object-cover"
                        />*/}
                      Twitter Header Photo 
                      <p>1500x500</p>
                    </label>
                  </div>
                </div>
            </div>
            <div className="grid items-center gap-4">
                <div className="items-top flex space-x-2">
                  <Checkbox id="terms3" />
                  <div className="grid gap-1.5 leading-none">
                    <label
                      htmlFor="terms3"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      Facebook Shared Image 
                      <p>1200 x 630</p>
                    </label>
                  </div>
                </div>
            </div>
            <div className="grid items-center gap-4">
                <div className="items-top flex space-x-2">
                  <Checkbox id="terms4" />
                  <div className="grid gap-1.5 leading-none">
                    <label
                      htmlFor="terms4"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      YouTube Channel Cover Photo 
                      <p>2560 x 1440</p>
                    </label>
                  </div>
                </div>
            </div>
            <div className="grid items-center gap-4">
                <div className="items-top flex space-x-2">
                  <Checkbox id="terms5" />
                  <div className="grid gap-1.5 leading-none">
                    <label
                      htmlFor="terms5"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      Instagram Stories/ Ad 
                      <p>1080 x 1920</p>
                    </label>
                  </div>
                </div>
            </div>
            <div className="grid items-center gap-4">
                <div className="items-top flex space-x-2">
                  <Checkbox id="terms6" />
                  <div className="grid gap-1.5 leading-none">
                    <label
                      htmlFor="terms6"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      YouTube Video Upload 
                      <p>1280 x 720</p>
                    </label>
                  </div>
                </div>
            </div>
            <div className="grid items-center gap-4">
                <div className="items-top flex space-x-2">
                  <Checkbox id="terms7" />
                  <div className="grid gap-1.5 leading-none">
                    <label
                      htmlFor="terms7"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      Twitter Profile Photo 
                      <p>400 x 400</p>
                    </label>
                  </div>
                </div>
            </div>
            <div className="grid items-center gap-4">
                <div className="items-top flex space-x-2">
                  <Checkbox id="terms7" />
                  <div className="grid gap-1.5 leading-none">
                    <label
                      htmlFor="terms7"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      LinkedIn Company Page Banner 
                      <p>646 x 220 min.</p>
                    </label>
                  </div>
                </div>
            </div>
            <div className="grid items-center gap-4">
                <div className="items-top flex space-x-2">
                  <Checkbox id="terms7" />
                  <div className="grid gap-1.5 leading-none">
                    <label
                      htmlFor="terms7"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      Facebook Cover Photo  
                      <p>820 x 312</p>
                    </label>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}
export default SizeDrop;
