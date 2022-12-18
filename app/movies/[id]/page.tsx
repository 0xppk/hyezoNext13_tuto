import { use } from "react";
import { Product } from "../layout";

export default function Page({ params }) {
  const movie = use(getMovie(params.id));
  const { title, description, brand } = movie;
  return (
    <div className="space-y-1">
      <p className="text-md">{title}</p>
      <p className="text-base">{description}</p>
      <p>{brand}</p>
    </div>
  );
}

async function getMovie(id: string) {
  const res = await (await fetch(`https://dummyjson.com/products/${id}`)).json();
  return res;
}

export async function generateStaticParams() {
  const res = await (await fetch(`https://dummyjson.com/products`)).json();
  const { products }: { products: Product[] } = res
  const paths = products.map(p => ({ id: String(p.id) }));
  console.log(paths);

  return paths
}
