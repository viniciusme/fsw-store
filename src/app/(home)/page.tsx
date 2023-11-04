import Image from "next/image";

import BannerHomeMobile01 from "public/images/banners/banner-home-mobile-01.png";

export default function Home() {
  return (
    <div className="p-5">
      <Image
        src={BannerHomeMobile01}
        width={0}
        height={0}
        sizes="(max-width: 640px) 100vw, 640px"
        alt="Banner com referencia ao desconto de até 50% esse mês!"
        className="h-auto w-full"
      />
    </div>
  );
}
