


import Link from "next/link";
import { ProductI } from "./types/types";

interface ProductCardProps {
    product: ProductI;
}

const ProductCard = ({ product }: ProductCardProps) => {
    const {
        nameBn,
        categoryNameBn,
        categoryIcon,
        unit,
        today,
        change,
    } = product;

    const formatPrice = (price: number) =>
        new Intl.NumberFormat("bn-BD", {
            maximumFractionDigits: 2,
        }).format(price);

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
        <>
            <Link href={`/products/${product.id}` }>
                <article className="w-full rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
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

                    <div className="my-4 border-t border-gray-100" />

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
            </Link>
        </>
    );
};

export default ProductCard;
