import React, { useContext, useEffect, useRef } from "react";
import gsap from "gsap";
import heroImg from "../assets/hero-image.png";
import ParallaxImg from "./reusables/ParallaxImg";
import arrowRight from "../assets/arrow-right.svg";
import { Context } from "../App";
import GetInTouch from "./reusables/GetInTouch";

export default function Hero() {
  const [heroImgHeight, setHeroImgHeight] = useContext(Context);

  return (
    <section className="flex flex-col w-full hero bg-grayBg text-white gap-[50px] relative pb-[400px]  -950:pb-[35%]">
      {/* div containing heading and typography */}
      <div className="flex flex-col max-w-[1000px] w-full gap-[50px]">
        <h1 className="hero-heading text-8xl leading-[100%] font-medium">
          {" "}
          Crafting your dreams together.{" "}
        </h1>
        <p className="font-normal text-2xl -550:text-xl">
          Unveiling your vision: where dreams and craftmanship converge{" "}
        </p>
      </div>

      <hr className="border-none bg-white h-[1px]" />

      {/* div containing the buttons */}
      <div className="justify-between flex">
        {/* Get in touch btn */}
        <GetInTouch
          phrase="Get in touch"
          styles="-500:w-[90%] -400:mx-auto -400:w-full !justify-between !pl-4"
        />
        {/* Scroll down btn */}
        <a href="#services" className="flex items-center gap-2 -550:hidden">
          Scroll down
          <div className="border-white border-[2px] rounded-[50%] p-4 flex justify-center items-center overflow-hidden">
            <img
              className="hero-arrow-down rotate-90"
              src={arrowRight}
              alt=""
            />
          </div>
        </a>
      </div>

      <div
        className={` hero-img-cont max-w-[1300px] z-[20]  w-[95%] absolute bottom-0 translate-y-[60%] left-[50%] translate-x-[-50%]`}
      >
        <ParallaxImg
          imgSrc={heroImg}
          imgTrigger=".hero-img-cont"
          styles="w-full"
          imgStyles="object-cover max-h-[90vh] w-full !min-h-[0px]"
        />
      </div>
    </section>
  );
}
