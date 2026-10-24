import React from "react";
import Image from "next/image";
import imageURL from "../../images/bazar-hero.png";

interface BannerProps {
  badgeText?: string;
  titleLine1?: string;
  titleLine2?: string;
  description?: string;
  buttonText?: string;
  onButtonClick?: () => void;
  imageUrl?: string;
}

export const Banner: React.FC<BannerProps> = ({
  badgeText = "বাজারের সেরা দাম",
  titleLine1 = "প্রতিদিনের বাজার",
  titleLine2 = "দর এক নজরে",
  description = "চাল, ডাল, তেল থেকে শুরু করে সবজি ও মাছ-মাংসের সর্বশেষ খুচরা মূল্য জেনে নিন খুব সহজেই। আপনার প্রতিদিনের বাজারের হিসাব হোক আরও সহজ।",
  buttonText = "আজকের দাম দেখুন",
  onButtonClick,
  imageUrl,
}) => {
  const heroImage = imageUrl ?? imageURL;

  return (
    <section className="w-full bg-[#f4fbf7] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="flex-1 space-y-6 text-left">
          <div className="inline-flex items-center gap-2 bg-[#e2f8ec] px-3 py-1.5 rounded-full">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span className="text-emerald-700 text-sm font-semibold">
              {badgeText}
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight leading-snug">
            <span className="block text-[#111827]">{titleLine1}</span>
            <span className="block text-emerald-600 mt-1">
              {titleLine2}
            </span>
          </h1>

          <p className="text-gray-600 text-base sm:text-lg max-w-xl leading-relaxed">
            {description}
          </p>

          <a className="bg-emerald-500 hover:bg-violet-500 rounded-xl text-white font-bold px-5 py-3"  href="#all-products">আজকের দাম দেখুন</a>
        </div>

        <div className="flex-1 w-full flex justify-center lg:justify-end">
          <div className="relative bg-white p-3 rounded-2xl shadow-lg border border-gray-100 max-w-lg w-full overflow-hidden">
            <Image
              src={heroImage}
              alt="Bazar Banner Hero"
              width={800}
              height={600}
              className="w-full h-auto rounded-xl object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};