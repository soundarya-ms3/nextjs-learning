export default function ProductDetails({
  params,
}: {
  params: { productId: string };
}) {
  return <h1>Product detail of {params.productId} </h1>;
}
