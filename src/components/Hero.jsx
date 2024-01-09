import React, { useEffect } from "react";
import gsap from "gsap";
import heroImg from "../assets/hero-image.png";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Hero() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.set(".hero-image", { y: -100 });

    gsap.to(".hero-image", {
      scrollTrigger: {
        scrub: true,
        trigger: ".hero",
        // markers: true,
      },
      y: 0,
    });
  }, []);

  return (
    <section className="flex flex-col w-full hero">
      {/* div containing heading and typography */}
      <div className="flex flex-col max-w-[600px] w-full">
        <h1 className="text-4xl text-[red]"> Crafting your dreams together </h1>
        <p>Unveiling your vision: where dreams and craftmanship converge </p>
      </div>

      <hr />

      {/* div containing the buttons */}
      <div>
        {/* Get in touch btn */}
        <button>Get in touch</button>

        {/* Scroll down btn */}
        <button>Scroll down</button>
      </div>

      <div className="overflow-hidden border-black border-1px">
        <img
          className="hero-image max-w-[400px] mx-auto"
          src={heroImg}
          alt=""
        />
      </div>
    </section>
  );
}
