
import { ProductI } from "./types/types";

const Products = async () => {
  const res = await fetch(
    "https://api.api-store.workers.dev/api/bazardor/products"
  );

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  const data: ProductI[] = await res.json();

  const formatPrice = (price: number) =>
    new Intl.NumberFormat("bn-BD", {
      maximumFractionDigits: 2,
    }).format(price);

  return (
   <div id="all-products">
    <div className="text-center my-5 md:my-10">
      <h1 className="text-4xl">সব পণ্য</h1>
      <p>আপনার প্রয়োজনীয় সকল বাজারের তালিকা ও আজকের আপডেট মূল্য</p>

    </div>
     <div  className="w-100 md:w-6xl mx-auto grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 ">
      {data.map((product) => {
        const {
          id,
          nameBn,
          categoryNameBn,
          categoryIcon,
          unit,
          today,
          change,
        } = product;

        const isUp = change.dir === "up";
        const isDown = change.dir === "down";
        const isFlat = change.dir === "flat";

        const changeColor = isUp
          ? "text-green-600 bg-green-50"
          : isDown
            ? "text-red-600 bg-red-50"
            : "text-gray-500 bg-gray-100";

        const arrow = isUp ? "▲" : isDown ? "▼" : "—";

        return (
          <article
            key={id}
            className="w-full rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
          >
            {/* Product information */}
            <div className="flex items-center gap-3">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gray-50 text-2xl">
                {categoryIcon || "🛒"}
              </div>

              <div className="min-w-0 flex-1">
                <h3 className="truncate text-lg font-bold text-gray-900">
                  {nameBn}
                </h3>

                <p className="mt-0.5 text-sm text-gray-500">
                  {categoryNameBn} · প্রতি {unit}
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="my-4 border-t border-gray-100" />

            {/* Price information */}
            <div className="flex items-end justify-between gap-3">
              <div>
                <p className="mb-1 text-sm text-gray-500">
                  আজকের দাম
                </p>

                <p className="text-xl font-bold text-gray-900">
                  {formatPrice(today)} টাকা
                </p>
              </div>

              <span
                className={`inline-flex shrink-0 items-center gap-1 rounded-lg px-2.5 py-1.5 text-xs font-semibold ${changeColor}`}
                aria-label={
                  isFlat
                    ? "দামের কোনো পরিবর্তন নেই"
                    : `দাম ${isUp ? "বেড়েছে" : "কমেছে"} ${formatPrice(change.pct)} শতাংশ`
                }
              >
                {!isFlat && <span>{arrow}</span>}
                {formatPrice(change.pct)}%
              </span>
            </div>
          </article>
        );
      })}
    </div>
   </div>
  );
};

export default Products;
