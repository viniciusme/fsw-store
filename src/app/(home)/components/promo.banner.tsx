import Image, { ImageProps } from "next/image";

export default function PromoBanner({ alt, ...props }: ImageProps) {
  return (
    <>
      <Image
        width={0}
        height={0}
        sizes="(max-width: 640px) 100vw, 640px"
        className="h-auto w-full p-5"
        alt={alt}
        {...props}
      />
    </>
  );
}
