"use client";

import Image from "next/image";
import { useState } from "react";

interface ProductImagesProps {
  name: string;
  imageUrls: string[];
}

const ProductImages = ({ imageUrls, name }: ProductImagesProps) => {
  const [currentImage, setCurrentImage] = useState(imageUrls[0]);

  const handleImageClick = (imageUrl: string) => {
    setCurrentImage(imageUrl);
  };

  return (
    <div className="flex flex-col">
      <div className="flex h-96 w-full items-center justify-center bg-accent">
        <Image
          src={currentImage}
          alt={name}
          width={0}
          height={0}
          sizes="(max-width: 640px) 100vw, 640px"
          style={{ objectFit: "contain" }}
          className="h-auto max-h-[70%] w-auto max-w-[80%]"
        />
      </div>

      <div className="mt-8 grid grid-cols-4 gap-4 px-5">
        {imageUrls.map((imageUrls) => (
          <button
            key={imageUrls}
            className={`flex h-24 items-center justify-center rounded-lg bg-accent
              ${
                imageUrls === currentImage &&
                "border-2 border-solid border-primary"
              }
            `}
            onClick={() => handleImageClick(imageUrls)}
          >
            <Image
              src={imageUrls}
              alt={name}
              width={0}
              height={0}
              sizes="(max-width: 640px) 100vw, 640px"
              style={{ objectFit: "contain" }}
              className="h-auto max-h-[70%] w-auto max-w-[80%]"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
