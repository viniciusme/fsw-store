import { Product } from "@prisma/client";

interface productWithTotalPrice extends Product {
  totalPrice: number;
}

export const computeProductTotalPrice = (
  product: Product,
): productWithTotalPrice => {
  if (product.discountPercentage === 0) {
    return {
      ...product,
      totalPrice: Number(product.basePrice),
    };
  }

  const totalPrice =
    Number(product.basePrice) * (product.discountPercentage / 100);

  return {
    ...product,
    totalPrice,
  };
};
