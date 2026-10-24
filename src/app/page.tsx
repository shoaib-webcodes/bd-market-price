import { Suspense } from "react";
import Marquee from "./components/Marquee";
import { Banner } from "./components/Banner";
import Products from "./components/Products";


export default function Home() {
  return (
    <div className=" bg-green-50">
      {/* Marquee component */}
      <Suspense fallback={<span className="loading loading-spinner text-primary"></span>}>
        <Marquee></Marquee>
        <Banner></Banner>
        <Products></Products>
      </Suspense>

    </div>
  );
}
