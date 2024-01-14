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
    <section className="flex flex-col w-full hero bg-grayBg text-white gap-[50px] relative ">
      {/* div containing heading and typography */}
      <div className="flex flex-col max-w-[600px] w-full gap-[50px]">
        <h1 className="section-heading leading-[100%]">
          {" "}
          Crafting your dreams together{" "}
        </h1>
        <p>Unveiling your vision: where dreams and craftmanship converge </p>
      </div>

      <hr className="border-none bg-white h-[1px]" />

      {/* div containing the buttons */}
      <div className="justify-between flex">
        {/* Get in touch btn */}
        <GetInTouch phrase="Get in touch" styles="-500:w-[90%] -500:mx-auto -400:w-full"/>
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
        className={` hero-img-cont max-w-[1000px] w-full translate-y-[10%]  -950:translate-y-[20%] relative max-h-[40vh]  -550:max-h-[22vh] left-[50%]  translate-x-[-50%]`}
      >
        <ParallaxImg
          imgSrc={heroImg}
          imgTrigger=".hero-img-cont"
          styles=""
          imgStyles="object-contain max-h-[75vh] !min-h-[0px]"
        />
      </div>
    </section>
  );
}
