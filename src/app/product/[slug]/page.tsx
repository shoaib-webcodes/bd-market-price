
import Link from "next/link";

interface MarketI {
  market: string;
  division: string;
  min: number;
  max: number;
}

interface ProductI {
  id: number;
  slug: string;
  nameBn: string;
  category: string;
  categoryNameBn: string;
  categoryIcon: string;
  unit: string;
  image: string;
  today: number;
  yesterday: number;
  lastWeek: number;
  lastMonth: number;
  change: {
    dir: "up" | "down" | "same";
    pct: number;
  };
  markets: MarketI[];
}

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

const money = (value: number) =>
  new Intl.NumberFormat("bn-BD", {
    maximumFractionDigits: 2,
  }).format(value);

export default async function ProductDetailsPage({
  params,
}: PageProps) {
  const { id } = await params;

  const res = await fetch(
    `https://api.abcz.workers.dev/api/bazardor/products/${encodeURIComponent(id)}`
  );

  if (res.status === 404) {
    return (
      <main className="mx-auto max-w-5xl px-4 py-16 text-center">
        <h1 className="text-2xl font-bold">
          পণ্যটি পাওয়া যায়নি
        </h1>
        <Link href="/" className="mt-4 inline-block text-emerald-600">
          হোম পেজে ফিরে যান
        </Link>
      </main>
    );
  }

  if (!res.ok) {
    throw new Error("Failed to fetch product details");
  }

  const product: ProductI = await res.json();

  const markets = product.markets ?? [];

  const lowestPrice = markets.length
    ? Math.min(...markets.map((market) => market.min))
    : product.today;

  const highestPrice = markets.length
    ? Math.max(...markets.map((market) => market.max))
    : product.today;

  const averagePrice = markets.length
    ? markets.reduce(
        (sum, market) => sum + (market.min + market.max) / 2,
        0
      ) / markets.length
    : product.today;

  const priceDifference = product.today - product.yesterday;

  const priceDirection =
    priceDifference > 0
      ? "up"
      : priceDifference < 0
        ? "down"
        : "same";

  const priceChangePercent =
    product.yesterday !== 0
      ? (priceDifference / product.yesterday) * 100
      : 0;

  return (
    <main className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-6xl space-y-8 px-4 py-6 md:py-8">

        {/* Breadcrumb */}
        <nav className="flex flex-wrap items-center gap-2 text-sm text-slate-500">
          <Link href="/" className="hover:text-emerald-600">
            হোম
          </Link>
          <span>›</span>
          <Link
            href={`/category/${product.category}`}
            className="hover:text-emerald-600"
          >
            {product.categoryNameBn}
          </Link>
          <span>›</span>
          <span className="font-medium text-slate-800">
            {product.nameBn}
          </span>
        </nav>

        {/* Product overview */}
        <section className="flex flex-col justify-between gap-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:flex-row md:items-center md:p-8">
          <div className="flex items-center gap-5">
            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-slate-100 text-4xl">
              {product.image || product.categoryIcon || "🛒"}
            </div>

            <div>
              <h1 className="text-2xl font-bold text-slate-900 md:text-3xl">
                {product.nameBn}
              </h1>

              <p className="mt-2 text-sm text-slate-500">
                প্রতি {product.unit} · {product.categoryNameBn}
              </p>

              <p className="mt-3 text-sm">
                {priceDirection === "up" ? (
                  <span className="text-red-500">
                    গতকালের তুলনায় আজ দাম বেড়েছে {money(Math.abs(priceDifference))} টাকা
                  </span>
                ) : priceDirection === "down" ? (
                  <span className="text-emerald-600">
                    গতকালের তুলনায় আজ দাম কমেছে {money(Math.abs(priceDifference))} টাকা
                  </span>
                ) : (
                  <span className="text-slate-500">
                    গতকালের তুলনায় আজ দাম অপরিবর্তিত
                  </span>
                )}
              </p>
            </div>
          </div>

          <div className="w-full rounded-2xl border border-slate-100 bg-slate-50 p-5 text-center md:w-40 md:shrink-0">
            <p className="text-sm text-slate-500">
              আজকের দাম
            </p>

            <p className="mt-1 text-3xl font-bold text-slate-900">
              {money(product.today)}
            </p>

            <p className="text-xs text-slate-500">
              টাকা / {product.unit}
            </p>

            <span
              className={`mt-3 inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
                priceDirection === "up"
                  ? "bg-red-50 text-red-600"
                  : priceDirection === "down"
                    ? "bg-emerald-50 text-emerald-600"
                    : "bg-slate-200 text-slate-600"
              }`}
            >
              {priceDirection === "up"
                ? "▲"
                : priceDirection === "down"
                  ? "▼"
                  : "—"}{" "}
              {money(Math.abs(priceChangePercent))}%
            </span>
          </div>
        </section>

        {/* Price summary */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-slate-900 md:text-2xl">
            দামের সারসংক্ষেপ
          </h2>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-sm text-slate-500">সর্বনিম্ন দাম</p>
              <p className="mt-2 text-3xl font-bold text-emerald-500">
                {money(lowestPrice)} টাকা
              </p>
              <p className="mt-1 text-xs text-slate-400">
                বাজারের সর্বনিম্ন মূল্য
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-sm text-slate-500">গড় দাম</p>
              <p className="mt-2 text-3xl font-bold text-blue-500">
                {money(averagePrice)} টাকা
              </p>
              <p className="mt-1 text-xs text-slate-400">
                বাজারগুলোর মধ্যবিন্দুর গড়
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-sm text-slate-500">সর্বোচ্চ দাম</p>
              <p className="mt-2 text-3xl font-bold text-red-500">
                {money(highestPrice)} টাকা
              </p>
              <p className="mt-1 text-xs text-slate-400">
                বাজারের সর্বোচ্চ মূল্য
              </p>
            </div>
          </div>
        </section>

        {/* Historical prices */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-slate-900 md:text-2xl">
            আগের দিনের দামের তুলনা
          </h2>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {[
              { label: "আজকের দাম", value: product.today },
              { label: "গতকালের দাম", value: product.yesterday },
              { label: "গত সপ্তাহের দাম", value: product.lastWeek },
              { label: "গত মাসের দাম", value: product.lastMonth },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-xl border border-slate-200 bg-white p-4"
              >
                <p className="text-sm text-slate-500">{item.label}</p>
                <p className="mt-2 text-xl font-bold text-slate-800">
                  {money(item.value)} টাকা
                </p>
                <p className="text-xs text-slate-400">
                  প্রতি {product.unit}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Market-wise prices */}
        <section className="space-y-4">
          <div className="flex flex-wrap items-end justify-between gap-2">
            <div>
              <h2 className="text-xl font-bold text-slate-900 md:text-2xl">
                বাজারভিত্তিক আজকের দাম
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                বিভিন্ন বাজারের সর্বনিম্ন ও সর্বোচ্চ মূল্য
              </p>
            </div>

            <span className="text-sm text-slate-500">
              মোট বাজার: {money(markets.length)}
            </span>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
            <table className="w-full min-w-[600px] text-left text-sm">
              <thead className="bg-slate-100 text-slate-600">
                <tr>
                  <th className="px-5 py-4 font-semibold">বাজার</th>
                  <th className="px-5 py-4 font-semibold">বিভাগ</th>
                  <th className="px-5 py-4 font-semibold">সর্বনিম্ন</th>
                  <th className="px-5 py-4 font-semibold">সর্বোচ্চ</th>
                  <th className="px-5 py-4 font-semibold">গড়</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-100">
                {markets.map((market, index) => (
                  <tr
                    key={`${market.market}-${index}`}
                    className="transition hover:bg-slate-50"
                  >
                    <td className="px-5 py-4 font-medium text-slate-800">
                      {market.market}
                    </td>

                    <td className="px-5 py-4 text-slate-500">
                      {market.division}
                    </td>

                    <td className="px-5 py-4 font-semibold text-emerald-600">
                      {money(market.min)}
                    </td>

                    <td className="px-5 py-4 font-semibold text-red-500">
                      {money(market.max)}
                    </td>

                    <td className="px-5 py-4 text-slate-700">
                      {money((market.min + market.max) / 2)}
                    </td>
                  </tr>
                ))}

                {markets.length === 0 && (
                  <tr>
                    <td
                      colSpan={5}
                      className="px-5 py-8 text-center text-slate-500"
                    >
                      কোনো বাজারের তথ্য পাওয়া যায়নি।
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          <p className="text-xs leading-5 text-slate-500">
            দ্রষ্টব্য: বাজারের গড় মূল্য সর্বনিম্ন ও সর্বোচ্চ দামের
            মধ্যবিন্দু থেকে হিসাব করা হয়েছে। এটি প্রকৃত লেনদেনের গড়
            মূল্য নাও হতে পারে।
          </p>
        </section>

        <div className="pb-6">
          <Link
            href="/"
            className="inline-flex rounded-xl bg-emerald-600 px-5 py-3 font-semibold text-white transition hover:bg-emerald-700"
          >
            ← সব পণ্যে ফিরে যান
          </Link>
        </div>
      </div>
    </main>
  );
}
