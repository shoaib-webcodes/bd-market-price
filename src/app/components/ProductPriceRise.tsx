import { ProductI } from "./types/types";
import ProductCard from "./ProductCard";

interface ProductPriceRiseProps {
  products?: ProductI[];
}

const ProductPriceRise = ({
  products = [],
}: ProductPriceRiseProps) => {
  const risingProducts = [...products]
    .filter((product) => product.change.pct > 0)
    .sort((a, b) => b.change.pct - a.change.pct)
    .slice(0, 6);

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
      <h2 className="text-xl md:text-2xl font-bold">
        আজ দাম বেড়েছে <span className="text-red-500">▲</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {risingProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductPriceRise;