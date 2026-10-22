import { Suspense } from "react";
import Marquee from "./components/Marquee";


export default function Home() {
  return (
    <div>
      {/* Marquee component */}
      <Suspense fallback={<span className="loading loading-spinner text-primary"></span>}>
        <Marquee></Marquee>
      </Suspense>

    </div>
  );
}
