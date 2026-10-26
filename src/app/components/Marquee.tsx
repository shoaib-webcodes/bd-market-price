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
    <div className="w-full mx-auto  flex items-center overflow-hidden bg-green-100 text-black">
     

      {/* Animated Content */}
      <div className="min-w-0 flex-1 overflow-hidden py-3">
        <MarqueeContent data={data} />
      </div>
    </div>
  );
};

export default Marquee;