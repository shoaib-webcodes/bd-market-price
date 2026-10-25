
import { Suspense } from "react";
import Marquee from "./components/Marquee";
import { Banner } from "./components/Banner";
import Products from "./components/Products";

export default function HomePage() {
  return (
    <div>
      <Suspense
        fallback={
          <span className="loading loading-spinner text-primary" />
        }
      >
        <Marquee />
        <Banner />
        <Products />
      </Suspense>
    </div>
  );
}
