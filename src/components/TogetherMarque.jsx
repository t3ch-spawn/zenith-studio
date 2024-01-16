import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function TogetherMarque() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.create({
      trigger: ".categories-cont",
      scrub: 1,
      start: "bottom 50%",
      endTrigger: ".marque-container",
      //   end: "bottom 50%",
        // markers: true,
      animation: gsap.to(".marque", {
        x: "-60%",
      }),
    });
  }, []);
  return (
    <div className="w-full overflow-hidden relative h-[100px] marque-container py-10">
      <div className="marque w-[100%] text-6xl -950:text-4xl -500:text-2xl absolute translate-x-[-20%] -500:translate-x-[-50px] h-full text-nowrap">
        LET’S WORK TOGETHER? - GET IN TOUCH - LET’S WORK TOGETHER? - GET IN TOUCH
      </div>
    </div>
  );
}
