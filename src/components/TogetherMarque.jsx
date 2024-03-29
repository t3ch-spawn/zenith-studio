import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function TogetherMarque() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.create({
      trigger: ".subscribe-container",
      scrub: 1,
      start: "top 60%",
      endTrigger: ".marque-container",
      // end: "bottom 20%",
      // markers: true,
      animation: gsap.to(".marque", {
        x: "-50%",
      }),
    });
  }, []);
  return (
    <div className="w-full marque-container overflow-hidden relative h-[100px] marque-container z-[15] text-[#353434] bg-[#F3EEEE] pb-[150px] -950:pb-[120px] -550:pb-[110px] font-medium">
      <p className="marque w-[100%] text-6xl -950:text-4xl -500:text-2xl absolute py-10 h-full text-nowrap">
        LET’S WORK TOGETHER? - GET IN TOUCH - LET’S WORK TOGETHER? - GET IN
        TOUCH - LET’S WORK TOGETHER? - GET IN TOUCH
      </p>

      <div className="absolute w-full h-[1px] bg-[#A39E9F] bottom-0 mt-10"></div>
    </div>
  );
}
