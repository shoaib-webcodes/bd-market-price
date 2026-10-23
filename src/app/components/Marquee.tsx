import MarqueeContent from "./MarqueeContent";

interface MarqueeI {
  nameBn: string;
  slug: string;
  categoryIcon: string;
  today: number;
  change: {
    dir: string;
    pct: number;
  };
}

const Marquee = async () => {
  const res = await fetch(
    "https://api.abcz.workers.dev/api/bazardor/products"
  );

  if (!res.ok) {
    throw new Error("Failed to fetch bazar prices");
  }

  const data: MarqueeI[] = await res.json();

  return (
    <div className="flex items-center overflow-hidden bg-green-50">
      {/* Fixed Label */}
      <div className="z-10 flex shrink-0 items-center bg-green-500 px-3 py-3 text-xl text-white">
        <span>বাজার দর</span>
      </div>

      {/* Animated Content */}
      <div className="min-w-0 flex-1 overflow-hidden py-3">
        <MarqueeContent data={data} />
      </div>
    </div>
  );
};

export default Marquee;