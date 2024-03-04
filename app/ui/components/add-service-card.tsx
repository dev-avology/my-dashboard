   "use client"
    //import { Service,ServiceSchema } from "@/app/tasks/data/schema";
    import {Service,ServiceSchema} from "@/db/schema";
    import { Button } from "@/components/ui/button";
    import { Input } from "@/components/ui/input";
    import { Label } from "@/components/ui/label";
    import { Textarea } from "@/components/ui/textarea";
    import { useFormState, useFormStatus } from "react-dom";
    import { useToast } from "@/components/ui/use-toast";
    import { createServiceAction } from "@/app/services/_actions/create-service.action";
    import { HTMLAttributes, useEffect,useState, useRef } from "react";

    import {
      Sheet,
      SheetClose,
      SheetContent,
      SheetDescription,
      SheetFooter,
      SheetHeader,
      SheetTitle,
      SheetTrigger,
    } from "@/components/ui/sheet";

    import { cn } from "@/lib/utils";


    const AddServiceCard = () => {

        const { toast } = useToast();


        const [formState, onCreateServiceAction] = useFormState(createServiceAction, {
          form: {
            title: '',
            description: '',
            amount:0,
            recurring:0,
            repeat:0,
            image_url:null,
            status:'active',
            date:'',
          },
          status: "default",
        });

        const formRef = useRef<HTMLFormElement>(null);

        const [isRecurring, setIsRecurring] = useState(false);
      
        const handleCheckboxChange = () => {
          setIsRecurring((prev) => !prev);
        };
      
      return (
        <>
          <Sheet>
          <SheetTrigger asChild>
            <div className="flex items-center justify-end space-x-2 p-4">
                <a className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base cursor-pointer">Add new</a>
            </div>
          </SheetTrigger>
          <SheetContent className="px-0 overflow-y-auto overflow-x-hidden" style={{ maxWidth: '800px', width: '100%' }}>
            <SheetHeader className="py-2 px-4">
              <SheetTitle className="text-4l font-bold dark:text-white ">Title</SheetTitle>
            <SheetDescription>
                Description here
              </SheetDescription>
            </SheetHeader>
            <div className="py-2">
                <form 
                ref={formRef}
                action={onCreateServiceAction}            
                className="w-full">
                    
                    <div className="mb-5 px-4">
                        <Label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Add Title</Label>
                        <Input type="text" id="title" name="title" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" autoFocus  defaultValue={formState.form.title} />
                    </div>
                    <div className="mb-5 px-4">
                        <Label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Add Description</Label>
                        <Textarea id="description" name="description" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="" autoFocus  defaultValue={formState.form.description} />
                    </div>
                    <div className="mb-5 px-4">
                        <Label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Add Amount</Label>
                        <div className="relative">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"  viewBox="0 0 24 24"  fill="none"  stroke="#6b7280" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">  <line x1="12" y1="1" x2="12" y2="23" />  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
                            </div>
                            <Input type="text" id="amount" name="amount" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  p-2.5 pl-10 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="" autoFocus  defaultValue={formState.form.amount} />
                        </div>
                    </div>
                    <div className="mb-5 px-4">
                        <Label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Add Status</Label>
                        <Input type="text" id="status" name="status" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="" autoFocus  defaultValue={formState.form.status} />
                    </div>
                    
                    <div className="mb-5 px-4 ">
                        <hr className="my-6"></hr>
                        <Label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white inline-flex items-center cursor-pointer">
                            <Input
                            type="checkbox"
                            name="recurring"
                            checked={isRecurring}
                            onChange={handleCheckboxChange}
                            className="sr-only peer"
                            autoFocus  defaultValue={formState.form.recurring}
                            />
                            <span className="mr-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                            Recurring
                            </span>
                            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                        </Label>
                    </div>
                    <div className="mb-5 px-4 inline-flex items-center" style={{ display: isRecurring ? 'flex' : 'none' }}>
                        <Label className="block mr-3 mb-2 text-sm font-medium text-gray-900 dark:text-white"> Repeat</Label>
                        <Input
                        type="text"
                        id="text"
                        name="repeat"
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                        placeholder=""
                        autoFocus  defaultValue={formState.form.repeat}
                        />
                        <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Month</span> 
                    </div>
                    

                    <div className="my-5 px-4">
                        <hr className="my-6"></hr>
                        <SubmitButton idleText="Add Service" submittingText="Adding Service..."></SubmitButton>
                        {/* <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Save</button> */}
                    </div>
                </form>
          
            </div>
          {/* <SheetFooter className="px-2">
              <SheetClose asChild>
                <a href="#" className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                  Delete
                </a>
              </SheetClose>
            </SheetFooter>*/}
          </SheetContent>
        </Sheet>
        </>
      );
      };
      

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
            className={cn(
              "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
              props.className
            )}
            disabled={pending}
          >
            {pending ? submittingText : idleText}
          </Button>
        );
      }

      export default AddServiceCard;