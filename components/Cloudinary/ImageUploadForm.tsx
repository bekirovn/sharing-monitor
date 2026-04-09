// ImageUploadForm.tsx

import { CldUploadWidget, CldUploadButton } from "next-cloudinary";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { CloudinaryImages } from "@prisma/client";
// import { uploadToCloudinary } from '../../util/uploadToCloudinary';

// const validationSchema = Yup.object().shape({
//   image: Yup.mixed().required('You must select an image to upload'),
// });

type Props = {
  setImageUrl: (id: string) => void;
};

const ImageUploadForm = ({ setImageUrl }: Props) => {
  const [assetId, setAssetId] = useState<string>();
  const [url, setUrl] = useState<string>();
  const [thumbnailUrl, setThumbnailUrl] = useState<string>();

  return (
    <CldUploadWidget
      options={{
        sources: [
          "local",
          "url",
          "camera",
          "google_drive",
          "image_search",
          "unsplash",
        ],
        cropping: true,
        showUploadMoreButton: false,
        singleUploadAutoClose: true,
      }}
      onUpload={(results) => {
        const { asset_id, url, thumbnail_url } = results.info as any;

        console.log("UPLOADED", asset_id, url, thumbnail_url);
        setAssetId(asset_id);
        setUrl(url);
        setThumbnailUrl(thumbnail_url);
      }}
      uploadPreset="hnhl8izv"
      onClose={() => {
        // Handle form submission, e.g., saving to the database using Prisma
        //console.log(formData);
        fetch(`/api/image/upload`, {
          method: "POST",
          body: JSON.stringify({
            asset_id: assetId,
            url: url,
            thumbnail_url: thumbnailUrl,
          }),
        })
          .then((res) => res.json())
          .then((data) => {
            setImageUrl(data.url);
          });
      }}
    >
      {({ open }) => {
        function handleOnClick(e: any) {
          e.preventDefault();
          open();
        }
        return (
          <div className="flex flex-col items-center">
            <button
              className="w-[200px] p-2 inline-block button uppercase border-[2px] border-primary-light"
              onClick={handleOnClick}
            >
              Upload an Image
            </button>
          </div>
        );
      }}
    </CldUploadWidget>
  );
};

export default ImageUploadForm;
