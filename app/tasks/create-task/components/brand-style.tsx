"use client"
import { useRef, useState } from "react";
import Image from "next/image";
import { CrossIcon, MinusCircleIcon } from "lucide-react";
import { Cross1Icon, UploadIcon } from "@radix-ui/react-icons";
import { FileUploader } from "react-drag-drop-files"; 

interface BrandStyleProps {

}

const fileTypes = ["JPG", "PNG", "GIF"]; 


const BrandStyle: React.FC<BrandStyleProps> = () => {

    const [dragActive, setDragActive] = useState<boolean>(false);
    const inputRef = useRef<any>(null);
    
    const [files, setFiles] = useState<any>([]);

    function handleChange(e: any) {
        e.preventDefault();
        console.log("File has been added");
        if (e.target.files && e.target.files[0]) {
            console.log(e.target.files);
            for (let i = 0; i < e.target.files["length"]; i++) {
                setFiles((prevState: any) => [...prevState, e.target.files[i]]);
            }
        }
    }

    async function handleSubmitFile(fileName: any, idx: any) {


       // const file = files[idx];

        const formData = new FormData();
        for (const file of files) {
            formData.append('files', file);
          }
            
             const response = await fetch('/api/brand-style', {
              method: 'POST',
              body: formData,
            })
         
            if (response.ok) {
              console.log(response.body);
            } else {
              // Handle errors
            }
    }



    async function handleSubmitFiles(e: any) {
        if (files.length === 0) {
        
        } else {
           
            const formData = new FormData();
            formData.append("files", files);
            
             const response = await fetch('/api/brand-style', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({files}),
            })
         
            if (response.ok) {
              console.log(response.body);
            } else {
              // Handle errors
            }
        }
    }


    function handleDrop(e: any) {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            for (let i = 0; i < e.dataTransfer.files["length"]; i++) {
                setFiles((prevState: any) => [...prevState, e.dataTransfer.files[i]]);
            }
        }
    }

    function handleDragLeave(e: any) {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
    }

    function handleDragOver(e: any) {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(true);
    }

    function handleDragEnter(e: any) {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(true);
    }

    function removeFile(fileName: any, idx: any) {
        const newArr = [...files];
        newArr.splice(idx, 1);
        setFiles([]);
        setFiles(newArr);
    }

    function openFileExplorer() {
        inputRef.current.value = "";
        inputRef.current.click();
    }



    return <aside id="default-sidebar" className={`border-r-2 border-gray-200 border-dashed px-5 bg-gray-50 dark:bg-gray-800 sticky top-5 w-full transition-transform ${dragActive ? "bg-blue-400" : "bg-blue-100"
        }`} aria-label="Sidebar"
        onDragEnter={handleDragEnter}
        onDrop={handleDrop}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
    >
        <div className="h-full  pt-4 overflow-y-auto  relative pb-[110px]">
            <div>
                <p className="text-base text-gray-500">Upload your Brand Style </p>
            </div>
            <div className="mt-5  relative left-0 right-0 text-base text-gray-500" >
              
                <div>

                    <div className="mb-3">
                        <p>
                            Drag & Drop files or{" "}
                            <span
                                className=""
                                onClick={openFileExplorer}
                            >
                                <u>Select files</u>
                            </span>{" "}
                            to upload
                        </p>

                        <div className="grid grid-cols-4 gap-2 grid-flow-row mt-4  ">
                            {files.map((file: any, idx: any) => (
                                <div key={idx} className="relative mb-4 group">
                                     <div className="hidden absolute -mt-4 right-0 group-hover:block z-10 ">
                                        <span
                                            className="text-red-500 cursor-pointer"
                                            onClick={() => handleSubmitFile(file.name, idx)}
                                        >
                                            <UploadIcon></UploadIcon>
                                        </span>
                                    </div>

                                    <div className="hidden absolute -mt-4 left-0 group-hover:block z-10 ">
                                        <span
                                            className="text-red-500 cursor-pointer"
                                            onClick={() => removeFile(file.name, idx)}
                                        >
                                            <MinusCircleIcon className="h-5 w-5"></MinusCircleIcon>
                                        </span>
                                    </div>

                                    <div className="flex flex-col items-center space-y-2 rounded-md">
                                    <div className="w-[60px] h-[60px] mx-auto" style={{position: 'relative'}}>
                                    {file.type.startsWith('image/') || file.type === 'application/pdf' || file.type === 'application/postscript' ? (
                                        <Image
                                            src={file.type === 'application/pdf' ? '/services/pdf.png' : file.type === 'application/postscript' ? '/services/ai.png' : URL.createObjectURL(file)}
                                            fill={true}
                                            alt={file.name}
                                            className="rounded-md object-contain mx-auto mb-4 scale-80"
                                        />
                                    ) : <span className="scale-80 display-block">{file.name}</span>}
                                    
                                        </div>
                                    </div>
                                   
                                </div>
                            ))}
                        </div>


                        <input
                            placeholder="fileInput"
                            className="hidden"
                            ref={inputRef}
                            name="assets[]"
                            type="file"
                            multiple={true}
                            onChange={handleChange}
                            accept="image/*,.psd, .pdf,.ai"
                        />
                       
                       {files.length > 0 && <span onClick={handleSubmitFiles}><UploadIcon></UploadIcon></span>  }
                    </div>
                </div>
            </div>
        </div>
    </aside>;
}

export default BrandStyle;