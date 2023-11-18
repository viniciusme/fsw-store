import Image from "next/image";
import Categories from "./components/categories";
import { prismaClient } from "@/lib/prisma";

import ProductList from "./components/product-list";
import BannerHomeMobile01 from "public/images/banners/banner-home-mobile-01.png";
import BannerHomeMobile02 from "public/images/banners/banner-home-mobile-02.png";

export default async function Home() {
  const deals = await prismaClient.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
  });

  return (
    <div className="">
      <Image
        src={BannerHomeMobile01}
        width={0}
        height={0}
        sizes="(max-width: 640px) 100vw, 640px"
        alt="Banner com referencia ao desconto de até 50% esse mês!"
        className="h-auto w-full px-5"
      />

      <div className="mt-8 px-5">
        <Categories />
      </div>

      <div className="mt-8 gap-3 pl-5">
        <p className="mb-3 pl-5 font-bold font-semibold uppercase">Ofertas</p>
        <ProductList products={deals} />
      </div>

      <Image
        src={BannerHomeMobile02}
        width={0}
        height={0}
        sizes="(max-width: 640px) 100vw, 640px"
        alt="Banner com referencia ao desconto de até 55% esse mês, em mouses!"
        className="h-auto w-full p-5"
      />
    </div>
  );
}
