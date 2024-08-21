"use client";

import { useContext, useState } from "react";
import Button from "../Button/Button";
import { MerchantFormContext } from "@/contexts/MerchantFormContext";

const UploadCard = ({ title, id }) => {
  const merchantContext = useContext(MerchantFormContext)
  const { setValue } = merchantContext
  const [files, setFiles] = useState([]);

  const initFileSystem = () => {
    document.getElementById(id)?.click();
  };

  const handleFileChange = (e) => {
    if (e.target.files) {
    const filesArr = [...e.target.files]
      setFiles(filesArr);
    }
  };

  const uploadFile = async () => {
    if(!files || files.length === 0) {
        alert('No file select selected')
        return
    }
    const formData = new FormData();
    formData.append(id, files)

    try {
        // const response = await fetch('/api/documents', {
        //     method: 'POST',
        //     body: formData
        // })
        // if(response.status === 200) {
        //     alert('File uploaded successfully')
        // }
        alert('File uploaded successfully')
        
        // update with react-hook-form so form can be validated and allowed to move to next step
        setValue(id, files)
    } catch (error) {
        console.log(error)
        alert('Error uploading file')
    }
  }


  return (
    <div className="rounded-lg p-4 border-[1px] border-gray-500 mb-8">
      <h2 className="font-bold">{title}:</h2>
      <div className="flex justify-start items-center py-4">
        <div className="basis-[45%] flex justify-start items-center">
            <button
            onClick={initFileSystem}
            className="outline-none px-4 py-2 bg-[#e2eafc] text-blue-500 rounded-xl"
            >
            Choose File
            </button>
            <div className="px-8">
            {files.length !== 0 ? files.map((el, i) => <p key={i} className="text-gray-400 font-medium mt-3">{el.name}{files.length === (i + 1) ? '' : ','}</p>) : (
                <p className="text-gray-400 font-medium mt-3">No files chosen</p>
            )}
            </div>
        </div>

        <div className="ml-20 flex-1">
            <Button variant={'primary'} onClick={uploadFile}>Upload</Button>
        </div>
      </div>
      <input
        type="file"
        id={id}
        multiple
        onChange={handleFileChange}
        hidden
        name="cv"
      />
    </div>
  );
};

export default UploadCard;
