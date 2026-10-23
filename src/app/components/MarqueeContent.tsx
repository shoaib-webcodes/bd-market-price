
"use client";

import Link from "next/link";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import MarqueeText from "react-marquee-text";
import "react-marquee-text/dist/styles.css";

interface MI {
  nameBn: string;
  slug: string;
  categoryIcon: string;
  today: number;
  change: {
    dir: string;
    pct: number;
  };
}

export default function MarqueeContent({ data }: { data: MI[] }) {
  return (
    <MarqueeText
      duration={8}
      pauseOnHover={true}
      textSpacing="2.5rem"
      direction="right"
    >
      {data.map((n) => (
        <Link
          key={n.slug}
          href={n.slug}
          className="inline-block whitespace-nowrap"
        >
          {n.categoryIcon} {n.nameBn} | {n.today} টাকা / কেজি{" "}
          {n.change.dir === "up" ? (
            <FaArrowUp className="inline-block text-red-600" />
          ) : (
            <FaArrowDown className="inline-block text-green-600" />
          )}
          {" "}{n.change.pct}
        </Link>
      ))}
    </MarqueeText>
  );
}