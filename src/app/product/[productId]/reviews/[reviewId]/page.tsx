export default function ReviewDetails({
  params,
}: {
  params: { productId: string; reviewId: string };
}) {
  return (
    <h1>
      review {params.reviewId} of product {params.productId}{" "}
    </h1>
  );
}
