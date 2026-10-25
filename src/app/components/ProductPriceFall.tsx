

import { ProductI } from "./types/types";
import ProductCard from "./ProductCard";

interface ProductPriceFallProps {
  products: ProductI[];
}

const ProductPriceFall = ({
  products,
}: ProductPriceFallProps) => {
  const fallingProducts = [...products]
    .filter((product) => product.change.pct < 0)
    .sort((a, b) => a.change.pct - b.change.pct)
    .slice(0, 6);

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
      <div>
        <h2 className="text-xl md:text-2xl font-bold">
          আজ দাম কমেছে
          <span className="ml-2 text-green-600">▼</span>
        </h2>
      </div>

      {fallingProducts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {fallingProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p className="text-gray-500">
          আজ কোনো পণ্যের দাম কমেনি।
        </p>
      )}
    </section>
  );
};

export default ProductPriceFall;
