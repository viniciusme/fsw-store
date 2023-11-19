import Image from "next/image";
import Categories from "./components/categories";
import { prismaClient } from "@/lib/prisma";

import PromoBanner from "./components/promo.banner";
import SectionTitle from "./components/section-title";
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

  const keyboards = await prismaClient.product.findMany({
    where: {
      category: {
        slug: "keyboards",
      },
    },
  });

  return (
    <div className="">
      <PromoBanner
        src={BannerHomeMobile01}
        alt="Banner com referencia ao desconto de até 50% esse mês!"
      />

      <div className="mt-8 px-5">
        <Categories />
      </div>

      <div className="mt-8 gap-3 pl-5">
        <SectionTitle>Ofertas</SectionTitle>
        <ProductList products={deals} />
      </div>

      <PromoBanner
        src={BannerHomeMobile02}
        alt="Banner com referencia ao desconto de até 55% esse mês, em mouses!"
      />

      <div className="mt-8 gap-3 pl-5">
        <SectionTitle>Teclado</SectionTitle>
        <ProductList products={keyboards} />
      </div>
    </div>
  );
}
