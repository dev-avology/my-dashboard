"use client"
import { useRef, useState } from "react";
import Image from "next/image";
import { CrossIcon, MinusCircleIcon } from "lucide-react";
import { Cross1Icon } from "@radix-ui/react-icons";

interface AssetsUploadProps {

}

const AssetsUpload: React.FC<AssetsUploadProps> = () => {
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

    function handleSubmitFile(e: any) {
        if (files.length === 0) {
            // no file has been submitted
        } else {
            // write submit logic here
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



    return <aside id="default-sidebar" className={`border-r-2 border-gray-200 border-dashed px-5 bg-gray-50 dark:bg-gray-800 sticky top-5 w-full xl:w-1/4 h-screen transition-transform ${dragActive ? "bg-blue-400" : "bg-blue-100"
        }`} aria-label="Sidebar"
        onDragEnter={handleDragEnter}
        onDrop={handleDrop}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}

    >
        <div className="h-full  pt-4 overflow-y-auto  relative pb-[110px]">
            <div>
                <h3 className="tracking-tight py-2 text-base font-semibold text-gray-900">Media</h3>
                <p className="text-base text-gray-500">Upload images and/or files and use our annotation tool to provide contextual directions for your designer.</p>
            </div>
            <div className="mt-5  relative left-0 right-0 text-base text-gray-500" >
                {/* <button type="button" className="w-full py-2 px-5  mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Stock Libraries</button> */}
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
                                    
                                  
                                        {/* <span>{file.name}</span> */}
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
                        {/* <input
                        className="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
                        type="file"
                        id="formFile" placeholder="Start typing general direction" /> */}
                    </div>
                </div>
            </div>
        </div>
    </aside>;
}

export default AssetsUpload;