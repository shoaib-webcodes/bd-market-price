
import { ProductI } from "./types/types";
import ProductCard from "./ProductCard";

interface AllProductsProps {
  products: ProductI[];
}

const AllProducts = ({ products }: AllProductsProps) => {
  return (
    <section id="all-products" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
      <div className="text-center">
        <h2 className="text-2xl md:text-3xl font-bold">
          সব পণ্য
        </h2>

        <p className="mt-2 text-gray-500">
          আপনার প্রয়োজনীয় সকল বাজারের তালিকা ও আজকের আপডেট মূল্য
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default AllProducts;
