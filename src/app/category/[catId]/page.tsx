import { Suspense } from "react";
import CategoryProductList from "./CategoryProductList";
import { ProductI } from "../../components/types/types";

interface Props {
  params: Promise<{
    catId: string;
  }>;
}

async function CategoryContent({ params }: Props) {
  const { catId } = await params;

  const res = await fetch(
    `https://api.abcz.workers.dev/api/bazardor/products?category=${encodeURIComponent(catId)}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch category products");
  }

  const products: ProductI[] = await res.json();

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-5 md:pt-10 min-h-screen">
      <CategoryProductList
        catId={catId}
        products={products}
      />
    </section>
  );
}

export default function CategoryWiseProduct({ params }: Props) {
  return (
    <Suspense fallback={<p className="p-6">পণ্য লোড হচ্ছে...</p>}>
      <CategoryContent params={params} />
    </Suspense>
  );
}