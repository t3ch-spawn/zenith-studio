import React, { useEffect, useRef, useState } from "react";
import icon from "../assets/icon.svg";
import cart from "../assets/cart.svg";
import gsap from "gsap";

const nav_links = ["Home", "About", "Services", "Journal", "Contact"];
export default function Header() {
  const [burgerClicked, setBurgerClicked] = useState(false);
  //   const [hasClickedOnce, setHasClickedOnce] = usest
  //   const []
  const animation = useRef();

  useEffect(() => {
    // This removes the 'inactive' class on initial mount
    const burger = document.querySelector(".burger");
    burger.classList.remove("inactive");

    animation.current = gsap
      .timeline({
        paused: true,
      })
      .to(".nav-main", {
        scaleY: 1,
        opacity: 1,
      })
      .to(".nav_link1-cont", {
        y: "0%",
      });
  }, []);

  useEffect(() => {
    burgerClicked ? animation.current.play() : animation.current.reverse();
  }, [burgerClicked]);

  function handleNav() {
    setBurgerClicked(!burgerClicked);
  }
  return (
    <nav className="bg-grayBg flex w-full sticky top-0 z-[80] shadow-md px-10 py-4">
      {/* Container for everything */}
      <div className="flex justify-between w-[100%] mx-auto">
        {/* icon */}
        <img src={icon} alt="" />

        {/* Container for hamburger and icon */}
        <div className="flex items-center justify-center gap-10">
          <img src={cart} className="max-w-[25px] cursor-pointer" alt="" />
          {/* Container for hamburger */}
          <div
            onClick={handleNav}
            className={`${
              burgerClicked ? "active" : "inactive"
            } burger flex flex-col bg-[#222] justify-center relative items-center gap-2 h-[40px] w-[40px] rounded-[50%] cursor-pointer z-[110] overflow-hidden`}
          >
            <div className="line-1 bg-white h-[2px] border-none absolute w-[50%] rounded-md translate-y-[-4px]"></div>
            <div className="line-2 bg-white h-[2px] border-none absolute w-[50%] rounded-md translate-y-[4px]"></div>
          </div>
        </div>
      </div>

      {/* Overlay that shows navigation */}
      <div
        className={`bg-grayBg flex flex-col items-center justify-center fixed top-0 left-0 h-[100%] scale-y-0  pointer-events-none w-full z-[100] nav-main ${
          burgerClicked ? "active" : ""
        }`}
      >
        {/* Container for navigation links */}
        <div className="flex flex-col gap-6 w-full justify-center items-center">
          {nav_links.map((link, idx) => {
            return (
              <div
                key={idx}
                className="text-8xl -950:text-5xl -550:text-3xl  text-white relative overflow-hidden cursor-pointer uppercase nav_link-cont"
              >
                <div className="nav_link1-cont flex translate-y-[-100%]">
                  <p className="text-white text-sm relative left-[4px] top-[7px]">
                    0{idx + 1}
                  </p>
                  <p className="nav_link-1 ">{link}</p>
                </div>
                <p className="nav_link-2 absolute opacity-1 bottom-0 right-0 translate-y-[100%]">
                  {link}
                </p>
              </div>
            );
          })}
        </div>

        {/* Container for social icons and location */}
        <div></div>
      </div>
    </nav>
  );
}
