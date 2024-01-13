import React, { useEffect } from "react";
import abstract from "../assets/abstract-image.jpeg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function AbstractImg() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.set(".abstract-image", { y: "-45%" });

    gsap.to(".abstract-image", {
      scrollTrigger: {
        scrub: true,
        trigger: ".abstract-container",
        // markers: true,
      },
      y: "20%",
    });
  }, []);
  return (
    <div className="z-[10] min-h-[100vh] -750:min-h-[120vh] abstract-container overflow-hidden relative">
      <img
        src={abstract}
        className="abstract-image w-full h-[100%] flex relative object-cover -750:absolute top-0 left-0"
        alt=""
      />
    </div>
  );
}
