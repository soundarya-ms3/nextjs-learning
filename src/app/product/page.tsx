import Link from "next/link";

export default function Product() {
  return (
    <>
      <Link href="/">Home</Link>
      <h2>Product list</h2>
      <h2>
        {" "}
        <Link href="product/1">Product list 1</Link>
      </h2>
      <h2>
        <Link href="product/2">Product list 2</Link>
      </h2>
    </>
  );
}
