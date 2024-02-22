"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useFormState, useFormStatus } from "react-dom";

import { HTMLAttributes, useEffect, useRef } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal } from "lucide-react";
import { createTaskAction } from "../_actions/create-task.action";
import { cn } from "@/lib/utils";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";



export function CreateTaskForm() {
  const { toast } = useToast();
  const [selectedCategory, setSelectedCategory] = useState("");

  return (
    <>
        <form className="space-y-8">
                <div className="FormGroup space-y-2">
                  <Label className=""> <strong>Title </strong> <span style={{color:"#6b7280", fontSize:'15px'}}>(Required) </span> </Label>
                  <div><Input type="text" placeholder="" /></div>
                </div>
                <div className="FormGroup space-y-6">
                   <Label className=""> <strong>Size of the design task </strong> <span style={{color:"#6b7280", fontSize:'15px'}}>(Required) </span> </Label>
                    <RadioGroup defaultValue="" name="radio" className="mb-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <RadioGroupItem   value="default" id="r1" />
                        <Label htmlFor="r1">Small · 1-2 day</Label>
                      </div>
                      <div className="flex items-center space-x-2 mb-2">
                        <RadioGroupItem value="comfortable" id="r2" />
                        <Label htmlFor="r2">Medium · 2-3 day</Label>
                      </div>
                      <div className="flex items-center space-x-2 mb-2">
                        <RadioGroupItem value="compact" id="r3" />
                        <Label htmlFor="r3">Large · 3-5 day</Label>
                      </div>
                      </RadioGroup>
                      <p style={{color:"#6b7280", fontSize:'14px'}}>The delivery time of an order depends on its size and complexity. Generally, larger tasks take more time to complete. This is an estimated delivery time, which will be confirmed by your dedicated project manager once the task is activated. If you have a project that you think will take longer than usual, don't hesitate to contact us through Slack or Live chat, and we will try our best to accommodate you. For more information on the differences between small, medium, and large tasks, please visit https://reel.unltd.li/sizes.</p>
                </div>
                <div className="FormGroup space-y-6 radio-main-selct">
                   <Label className=""> <strong>Design services category </strong> <span style={{color:"#6b7280", fontSize:'15px'}}>(Required) </span> </Label>
                   <RadioGroup  name="radioTwo" className="mb-4" >
                      <div className="flex items-center space-x-2 mb-2">
                        <RadioGroupItem   value="default1"  id="r4" />
                        <Label htmlFor="r4">Logo & Branding</Label>
                      </div>
                      <div className="flex items-center space-x-2 mb-2">
                        <RadioGroupItem value="comfortable2" id="r5" />
                        <Label htmlFor="r5">Graphic Design</Label>
                      </div>
                      <div className="flex items-center space-x-2 mb-2">
                        <RadioGroupItem value="compact3" id="r6" />
                        <Label htmlFor="r6">Motion Graphics</Label>
                      </div>
                      <div className="flex items-center space-x-2 mb-2">
                        <RadioGroupItem value="compactable3" id="r7" />
                        <Label htmlFor="r7">Website Design</Label>
                      </div>
                        <p style={{color:"#6b7280", fontSize:'14px'}}>Please select the design service category for which you want to create a task.</p>
                    </RadioGroup>
                </div>
                <div className="disabled_one space-y-6">
                  <RadioGroup name="radioTwo">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="defaultTwo" id="r3" />
                      <Label htmlFor="r3">Logo & Branding</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="comfortableTwo" id="r4" />
                      <Label htmlFor="r4">Brand style guides</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="compactTwo" id="r5" />
                      <Label htmlFor="r5">Media kit</Label>
                    </div>
                    <p style={{color:"#6b7280", fontSize:'14px'}}>Please select the type of task you need.</p>
                  </RadioGroup>
                  <div className="FormGroup space-y-2">
                    <Label className=""> <strong>Color scheme </strong> <span style={{color:"#6b7280", fontSize:'15px'}}>(Required) </span> </Label>
                    <div><Input type="text" placeholder="e.g., Royal Blue and Turquoise" /></div>
                  </div>
                </div>
                <div className="FormGroup space-y-2">
                  <div className="grid w-full items-center gap-1.5">
                    <Label className=""> <strong>Files </strong></Label>
                    <Input id="picture" type="file" style={{ border: '2px dashed #d1d5db', textAlign:'center',padding:'15px', height:'50px' }} />
                  </div>
                  <p style={{color:"#6b7280", fontSize:'14px'}}>Please upload any helpful assets, such as logos or photos, that you think may be relevant to the project.</p>
                </div>
                  
        
                  
            
               

              {/*  <FormControl className="radio-main-selct">
                  <FormLabel>
                    Design services category <span>(Required) </span>{" "}
                  </FormLabel>
                  <RadioGroup name="radioTwo"
                    defaultValue=""
                    onChange={(value) => console.log(value)}
                  >
                     <div className="flex items-center space-x-2">
                    <RadioGroupItem  value="defaultOne" id="r3" />
                    <Label htmlFor="r3">Logo & Branding</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="comfortableOne" id="r4" />
                    <Label htmlFor="r4">Graphic Design</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="compactOne" id="r5" />
                    <Label htmlFor="r5">Motion Graphics</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="compactOne" id="r6" />
                    <Label htmlFor="r6">Website Design</Label>
                  </div>
                  </RadioGroup>
                  <p>Please select the design service category for which you want to create a task.</p>
                </FormControl>

               {/*} <FormControl className={selectedCategory !== "defaultOne" ? "disabled_one" : ""}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="defaultTwo" id="r3" />
                    <Label htmlFor="r3">Logo & Branding</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="comfortableTwo" id="r4" />
                    <Label htmlFor="r4">Brand style guides</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="compactTwo" id="r5" />
                    <Label htmlFor="r5">Media kit</Label>
                  </div>
                  <p>Please select the type of task you need.</p>
                </FormControl>

               {/* <FormControl className={selectedCategory !== "comfortable" ? "disabled_two" : ""}>
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="default" id="r3" />
                    <Label htmlFor="r3">Logo & Branding</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="comfortable" id="r4" />
                    <Label htmlFor="r4">Brand style guides</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="compact" id="r5" />
                    <Label htmlFor="r5">Media kit</Label>
                  </div>
                  <p>Please select the type of task you need.</p>
                </FormControl>

                <FormControl className={selectedCategory !== "compact" ? "disabled_three" : ""}>
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="default" id="r3" />
                    <Label htmlFor="r3">Logo & Branding</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="comfortable" id="r4" />
                    <Label htmlFor="r4">Brand style guides</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="compact" id="r5" />
                    <Label htmlFor="r5">Media kit</Label>
                  </div>
                  <p>Please select the type of task you need.</p>
                </FormControl>

                <FormControl className={selectedCategory !== "compact" ? "disabled_four" : ""}>
                     <div className="flex items-center space-x-2">
                    <RadioGroupItem value="default" id="r3" />
                    <Label htmlFor="r3">Logo & Branding</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="comfortable" id="r4" />
                    <Label htmlFor="r4">Brand style guides</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="compact" id="r5" />
                    <Label htmlFor="r5">Media kit</Label>
                  </div>
                  <p>Please select the type of task you need.</p>
                </FormControl>*/}

              
          <Button type="submit">Submit</Button>
        </form>
    </>
  );
}

function Error({ error }: { error?: string }) {
  return error ? <span className="text-red-400">{error}</span> : null;
}

function SubmitButton({
  idleText,
  submittingText,
  ...props
}: HTMLAttributes<HTMLButtonElement> & {
  idleText: string;
  submittingText: string;
}) {
  const { pending } = useFormStatus();

  return (
    <Button
      {...props}
      className={cn("disabled:bg-gray-400 disabled:cursor-default", props.className)}
      disabled={pending}
    >
      {pending ? submittingText : idleText}
    </Button>
  );
}
