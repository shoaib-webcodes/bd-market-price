
import { ProductI } from "./types/types";
import ProductPriceFall from "./ProductPriceFall";
import ProductPriceRise from "./ProductPriceRise";
import AllProducts from "./AllProducts";

const Products = async () => {
  const res = await fetch(
    "https://api.abcz.workers.dev/api/bazardor/products"
  );

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  const data: ProductI[] = await res.json();

  return (
    <main className="container mx-auto space-y-12 px-4 py-8">
      <ProductPriceRise products={data} />
      <ProductPriceFall products={data} />
      <AllProducts products={data} />
    </main>
  );
};

export default Products;
