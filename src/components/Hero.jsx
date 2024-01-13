import React, { useContext, useEffect, useRef } from "react";
import gsap from "gsap";
import heroImg from "../assets/hero-image.png";
import ParallaxImg from "./reusables/ParallaxImg";
import arrowRight from "../assets/arrow-right.svg";
import { Context } from "../App";

export default function Hero() {
  const [heroImgHeight, setHeroImgHeight] = useContext(Context);

  return (
    <section className="flex flex-col w-full hero bg-grayBg text-white gap-[50px] relative min-h-[100vh] -950:min-h-[70vh]">
      {/* div containing heading and typography */}
      <div className="flex flex-col max-w-[600px] w-full gap-[50px]">
        <h1 className="text-6xl -950:text-4xl -500:text-4xl">
          {" "}
          Crafting your dreams together{" "}
        </h1>
        <p>Unveiling your vision: where dreams and craftmanship converge </p>
      </div>

      <hr className="border-none bg-white h-[1px]" />

      {/* div containing the buttons */}
      <div className="justify-between flex">
        {/* Get in touch btn */}
        <button className="flex items-center justify-center text-3xl -950:text-2xl gap-4 text-grayBg bg-white rounded-[40px] p-2 pl-3">
          Get in touch
          <div className="flex p-3 -550:p-1 rounded-[50%] bg-grayBg">
            <img src={arrowRight} className="-950:w-[30px]" alt="" />
          </div>
        </button>

        {/* Scroll down btn */}
        <button className="flex items-center gap-2 -550:hidden">
          Scroll down
          <div className="border-white border-[2px] rounded-[50%] p-4 flex justify-center items-center overflow-hidden">
            <img
              className="hero-arrow-down rotate-90"
              src={arrowRight}
              alt=""
            />
          </div>
        </button>
      </div>

      <div
        className={` hero-img-cont max-w-[1000px] w-[90%] bottom-[0%] translate-y-[50%] absolute left-[50%] translate-x-[-50%]`}
      >
        <ParallaxImg imgSrc={heroImg} imgTrigger=".hero-img-cont" styles="" />
      </div>
    </section>
  );
}
