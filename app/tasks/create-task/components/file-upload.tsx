import { useState,useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";

interface FileUploadProps {
  onFileUploadChange: (uploaded?: boolean) => void; // Add a prop for handling checkbox changes
}

const FileUpload: React.FC<FileUploadProps> = ({onFileUploadChange}) =>  {
  const [uploading, setUploading] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [selectedFile, setSelectedFile] = useState<File>();

  const handleUpload = async () => {
    setUploading(true);
    try {
      if (!selectedFile) return;
      const formData = new FormData();
      formData.append("myImage", selectedFile);
      const { data } = await axios.post("/api/image", formData);
      console.log(data);
      onFileUploadChange(true);
      setSelectedImage("");
      setSelectedFile(undefined);
    } catch (error: any) {
      console.log(error.response?.data);
    }
    setUploading(false);
  };

  // useEffect(() => {
  //   // Fetch data or perform any side effects that don't cause page refresh
  //   const fetchData = async () => {
  //     try {
  //       // Perform the asynchronous operation here
  //       const { data } = await axios.get("/api/data");
  //       setDirs(data.dirs);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   fetchData(); // Call the function to initiate the data fetching

  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []); // Empty dependency array means this effect runs only once, after initial render

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
        <div className="w-40 aspect-video rounded flex items-center justify-center border-2 border-dashed cursor-pointer" style={{ position: 'relative' }}>
          {selectedImage ? (
            <Image src={selectedImage} alt="" fill={true} className="rounded-md object-contain mx-auto mb-4 scale-80" />
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

    </div>
  );
};

export default FileUpload;