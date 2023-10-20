"use client";
import React from "react";
import { CldUploadWidget, CldImage } from "next-cloudinary";
import { useState } from "react";

const UploadPage = () => {
  interface CloudinaryResult {
    public_id: string;
  }

  const [publicId, setPublicId] = useState("");

  return (
    <>
      {publicId && (
        <CldImage
          src={publicId}
          width={180}
          height={270}
          alt="a picture of the developer"
        />
      )}
      <CldUploadWidget
        uploadPreset="pkixwjbv"
        options={{
          sources: ["local"],
          multiple: false,
          maxFiles: 5,
        }}
        onUpload={(result, widget) => {
          if (result.event !== "success") return;
          const info = result.info as CloudinaryResult;
          setPublicId(info.public_id);
          console.log(result);
        }}
      >
        {({ open }) => (
          <button className="btn btn-primary" onClick={() => open()}>
            Upload
          </button>
        )}
      </CldUploadWidget>
    </>
  );
};

export default UploadPage;
