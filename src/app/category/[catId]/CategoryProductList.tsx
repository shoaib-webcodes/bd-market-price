
"use client";

import { useMemo, useState } from "react";
import ProductCard from "../../components/ProductCard";
import { ProductI } from "../../components/types/types";
import { ChevronDown } from "lucide-react";

interface Props {
  catId: string;
  products: ProductI[];
}

type SortOption = "default" | "price-asc" | "price-desc";

function normalizeBengaliNumber(value: string | number): number {
  const bengaliDigits = "০১২৩৪৫৬৭৮৯";

  const normalized = String(value)
    .replace(/[০-৯]/g, (digit) =>
      String(bengaliDigits.indexOf(digit))
    )
    .replace(/,/g, "")
    .replace(/৳|টাকা|Tk\.?/gi, "")
    .trim();

  const number = Number(normalized);

  return Number.isFinite(number) ? number : 0;
}

export default function CategoryProductList({
  catId,
  products,
}: Props) {
  const [sortOption, setSortOption] =
    useState<SortOption>("default");

  const sortedProducts = useMemo(() => {
    const result = [...products];

    if (sortOption === "price-asc") {
      result.sort(
        (a, b) =>
          normalizeBengaliNumber(a.today) -
          normalizeBengaliNumber(b.today)
      );
    } else if (sortOption === "price-desc") {
      result.sort(
        (a, b) =>
          normalizeBengaliNumber(b.today) -
          normalizeBengaliNumber(a.today)
      );
    }

    return result;
  }, [products, sortOption]);

  return (
    <>
      <div className="flex flex-wrap items-center justify-between gap-4 pb-5">
        <h1 className="text-2xl font-bold">
          ক্যাটাগরি: {catId}
        </h1>

        <div className="relative">
          <select
            value={sortOption}
            onChange={(e) =>
              setSortOption(e.target.value as SortOption)
            }
            aria-label="পণ্য সাজান"
            className="appearance-none cursor-pointer rounded-lg border border-gray-300 bg-white py-2 pl-4 pr-10 text-sm font-medium text-gray-700 outline-none transition hover:border-emerald-500 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
          >
            <option value="default">সাজান: ডিফল্ট</option>
            <option value="price-asc">
              দাম: কম থেকে বেশি
            </option>
            <option value="price-desc">
              দাম: বেশি থেকে কম
            </option>
          </select>

          <ChevronDown
            size={18}
            className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
          />
        </div>
      </div>

      {sortedProducts.length > 0 ? (
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {sortedProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      ) : (
        <p>এই ক্যাটাগরিতে কোনো পণ্য পাওয়া যায়নি।</p>
      )}
    </>
  );
}