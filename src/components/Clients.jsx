import React, { useEffect, useState } from "react";
import gsap from "gsap";
import paul from "../assets/paul.svg";
import kate from "../assets/kate.svg";
import debby from "../assets/debby.svg";
import right from "../assets/slider-right.svg";
import left from "../assets/slider-left.svg";
import ParallaxImg from "./reusables/ParallaxImg";
import parlor from "../assets/slider-parlor.jpeg";
const slides = [
  {
    id: 1,
    heading: "They did absolutely amazing!",
    para: `Absolutely thrilled with Zenith! Their casual and collaborative approach turned our vision into a stunning reality. Highly recommend for a personalized and outstanding experience!"`,
    img: paul,
    name: `Steve Pau `,
    location: "Princeton, New Jersey",
  },
  {
    id: 2,
    heading: `Thrilled with Zenith`,
    para: `Their collaborative approach brought my vision to life with creativity and precision. Now my space feels uniquely mine. Highly recommend!"`,
    img: kate,
    name: `Mitchel Kate`,
    location: "Princeton, New Jersey ",
  },
  {
    id: 3,
    heading: `Incredible experience with Zenith`,
    para: `Their collaborative style brought my vision to life, creating a space that reflects me. Highly recommended for their personalized and exceptional service!"`,
    img: debby,
    name: `Debby`,
    location: "Princeton, New Jersey ",
  },
];

export default function Clients() {
  const [currSlide, setCurrSlide] = useState(0);
  useEffect(() => {
    const allSlides = gsap.utils.toArray(".slide");

    allSlides.forEach((slide, idx) => {
      gsap.set(slide, { x: `${idx * 100}%`, y: 0, scale: 0.5 });
    });
  }, []);

  useEffect(() => {
    const allSlides = gsap.utils.toArray(".slide");

    gsap.timeline().to(".slide-container", {
      x: `-${currSlide * 100}%`,
    });

    allSlides.forEach((slide, idx) => {
      gsap.to(slide, {
        opacity: idx == currSlide ? 1 : 0,
        scale: idx == currSlide ? 1 : 0.4,
      });
    });
  }, [currSlide]);

  function moveSlide(direction) {
    if (direction == "right") {
      setCurrSlide((prevSlide) => {
        if (prevSlide == slides.length - 1) {
          return 0;
        } else {
          return prevSlide + 1;
        }
      });
    } else if (direction == "left") {
      setCurrSlide((prevSlide) => {
        if (prevSlide == 0) {
          return slides.length - 1;
        } else {
          return prevSlide - 1;
        }
      });
    }
  }

  return (
    <section className="bg-grayBg">
      {/* Container for heading and line */}
      <div className="flex flex-col w-[90%] mx-auto mb-16">
        <h2 className="text-[#A39E9F] section-heading">
          What our clients say{" "}
        </h2>
        <hr className="w-full bg-[#A39E9F] border-none h-[1px] mt-[-1%]" />
      </div>

      {/* Container for image and slider */}
      <div className="slider-main-cont w-[90%] -550:w-full mx-auto">
        <div className="relative max-w-[800px] w-[70%] max-h-[85vh] -950:w-full -950:mt-[300px] -550:mt-[250px]">
          <ParallaxImg
            imgSrc={parlor}
            imgTrigger=".slider-main-cont"
            imgStyles="object-cover w-full"
          />

          {/* Container for the slider */}
          <div className="absolute top-[50%] translate-y-[-50%] right-[0%] translate-x-[50%] flex flex-col w-full -950:w-[90%] max-w-[600px] p-10 -550:p-4 items-center justify-center bg-[#434343] -950:right-[50%] -950:top-[0%]">
            <div className="  w-full relative h-[1000px] max-h-[350px] -550:max-h-[300px] flex justify-center items-center overflow-hidden">
              <div className="slide-container w-full h-full flex justify-center items-center">
                {slides.map((slide) => {
                  return (
                    <div
                      key={slide.id}
                      className="slide  w-full absolute h-full flex flex-col justify-around -750:justify-center gap-6 items-start text-white"
                    >
                      <h3 className="text-3xl -750:text-2xl -400:text-xl">{`"${slide.heading}"`}</h3>
                      <p className="text-xl -750:text-lg -550:text-sm">
                        {slide.para}
                      </p>

                      <div className="flex gap-4 items-center justify-center">
                        <img
                          src={slide.img}
                          className="border-white border-[2px] rounded-[50%] -750:w-[60px] -500:w-[35px]"
                          alt=""
                        />

                        <div className="flex flex-col items-start text-base -550:text-sm">
                          <p>{slide.name}</p>
                          <p className="text-folioGray">{slide.location}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Container for left and right arrow */}
            <div className="flex gap-4 items-center justify-center cursor-pointer">
              <img
                onClick={(e) => {
                  moveSlide("left");
                  e.target.classList.add("active");
                  setTimeout(() => {
                    e.target.classList.remove("active");
                  }, 300);
                }}
                className="-750:w-[60px] slider-arr"
                src={left}
                alt=""
              />

              <img
                className="-750:w-[60px] slider-arr"
                src={right}
                alt=""
                onClick={(e) => {
                  moveSlide("right");
                  e.target.classList.add("active");
                  setTimeout(() => {
                    e.target.classList.remove("active");
                  }, 300);
                  //   console.log(e)
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
