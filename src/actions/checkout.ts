"use server";

import { CartProduct } from "@/providers/cart";
import Stripe from "stripe";

export const createCheckout = async (products: CartProduct[]) => {
  // Create a Stripe client.
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: "2023-10-16",
  });

  // Create a Checkout Session.
  const checkout = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    mode: "payment",
    success_url: process.env.HOST_URL,
    cancel_url: process.env.HOST_URL,

    line_items: products.map((product) => ({
      price_data: {
        currency: "brl",
        product_data: {
          name: product.name,
          description: product.description,
          images: product.imageUrls,
        },
        unit_amount: product.totalPrice * 100,
      },
      quantity: product.quantity,
    })),
  });

  // Redirect to Checkout.

  return checkout;
};
