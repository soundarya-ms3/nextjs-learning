"use client";

import { notFound } from "next/navigation";
export default function ReviewDetails({
  params,
}: {
  params: { productId: string; reviewId: string };
}) {
  const random = Math.floor(Math.random() * 2);
  if (random === 1) {
    throw new Error("Error loading review");
  }

  if (parseInt(params.reviewId) > 1000) {
    notFound();
  }
  return (
    <h1>
      review {params.reviewId} of product {params.productId}{" "}
    </h1>
  );
}
