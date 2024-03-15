import { useState } from "react";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import { getbrandProfile } from "@/lib/utils";


interface FileUploadProps {
  
}

const FileUpload: React.FC<FileUploadProps> = async() => {

  const [uploading, setUploading] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [selectedFile, setSelectedFile] = useState<File>();

 const {dirs} = await getbrandProfile();

  const handleUpload = async () => {
    setUploading(true);
    try {
      if (!selectedFile) return;
      const formData = new FormData();
      formData.append("myImage", selectedFile);
      const { data } = await axios.post("/api/image", formData);
      console.log(data);
    } catch (error: any) {
      console.log(error.response?.data);
    }
    setUploading(false);
  };


  return (
    <div className="max-w-4xl mx-auto">
      <label>
        <input
          type="file"
          hidden
          onChange={({ target }) => {
            if (target.files) {
              const file = target.files[0];
              setSelectedImage(URL.createObjectURL(file));
              setSelectedFile(file);
            }
          }}
        />
        <div className="w-40 aspect-video rounded flex items-center justify-center border-2 border-dashed cursor-pointer" style={{position: 'relative'}}>
          {selectedImage ? (
            <Image src={selectedImage} alt="" fill={true} className="rounded-md object-contain mx-auto mb-4 scale-80"/>
          ) : (
            <span>Select Image</span>
          )}
        </div>
      </label>

      <button
        onClick={handleUpload}
        disabled={uploading}
        style={{ opacity: uploading ? ".5" : "1" }}
        className="bg-red-600 p-3 w-32 text-center rounded text-white"
      >
        {uploading ? "Uploading.." : "Upload"}
      </button>

      <div className="mt-20 flex flex-col space-y-3">
        {dirs.map((item) => (
          <Link key={item} href={"/brand-style/" + item}>
            <a className="text-blue-500 hover:underline">{item}</a>
          </Link>
        ))}
      </div>
    </div>
  );
};



export default FileUpload;