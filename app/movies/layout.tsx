import Link from "next/link";
import React, { use } from "react";

async function getMovies() {
  const res = await (await fetch("https://dummyjson.com/products")).json();
  return res;
}

export interface Product {
  id: string;
  title: string;
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const { products }: { products: Product[] } = use(getMovies());

  return (
    <div className="flex">
      <ul className="pr-10">
        {products.map(p => (
          <li key={p.id}>
            <Link href={`/movies/${p.id}`}>{p.title}</Link>
          </li>
        ))}
      </ul>
      <div>{children}</div>
    </div>
  );
}
