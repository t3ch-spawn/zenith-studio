import React, { useEffect, useRef, useState } from "react";
import icon from "../assets/icon.svg";
import cart from "../assets/cart.svg";
import gsap from "gsap";
import linkedIn from "../assets/nav-linkedIn.svg";
import twitter from "../assets/nav-twitter.svg";
import youtube from "../assets/nav-youtube.svg";
import instagram from "../assets/nav-instagram.svg";
import location from "../assets/location.svg";
const icons = [linkedIn, twitter, youtube, instagram];

const nav_links = ["Home", "About", "Services", "Journal", "Contact"];
export default function Header() {
  const [burgerClicked, setBurgerClicked] = useState(false);
  const [isNavShown, setIsNavShown] = useState(false);
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
        onComplete: () => {
          setIsNavShown(true);
        },
      })
      .to(".nav_link1-cont", {
        y: "0%",
        onReverseComplete: () => {
          setIsNavShown(false);
        },
      });
  }, []);

  useEffect(() => {
    const body = document.querySelector("body");
    if (burgerClicked) {
      animation.current.play();
    } else {
      animation.current.reverse();
    }
  }, [burgerClicked]);

  function handleNav() {
    setBurgerClicked(!burgerClicked);
  }

  function scrollToSection(e) {
    setBurgerClicked(!burgerClicked);

    const id = e.currentTarget.getAttribute("id").replace("#", "");
    const element = document.getElementById(id);
    if (id == "home") {
      window.scroll({
        top: 0,
        behavior: "smooth",
      });
      return;
    }
    element.scrollIntoView({
      behavior: "smooth",
    });
  }
  return (
    <nav className="bg-grayBg flex w-full sticky top-0 z-[80] shadow-md px-10 -850:px-5 py-4 nav-cont">
      {/* Container for everything */}
      <div className="flex justify-between w-[100%] mx-auto">
        {/* icon */}
        <img
          src={icon}
          onClick={() => {
            window.scroll({
              top: 0,
              behavior: "smooth",
            });
          }}
          className="z-[110]"
          alt=""
        />

        {/* Container for hamburger and icon */}
        <div className="flex items-center justify-center gap-10 -550:gap-6">
          <img src={cart} className="max-w-[25px] cursor-pointer" alt="" />
          {/* Container for hamburger */}
          <div
            onClick={handleNav}
            className={`${
              burgerClicked ? "active" : "inactive"
            } burger flex flex-col bg-[#222] justify-center relative items-center gap-2 h-[40px] w-[40px] p-5 rounded-[50%] cursor-pointer z-[110] overflow-hidden`}
          >
            <div className="line-1 bg-white h-[2px] border-none absolute w-[50%] rounded-md translate-y-[-4px]"></div>
            <div className="line-2 bg-white h-[2px] border-none absolute w-[50%] rounded-md translate-y-[4px]"></div>
          </div>
        </div>
      </div>

      {/* Overlay that shields reveal bug */}
      <div
        className={`z-[90] bg-grayBg h-[150%] w-full fixed top-0 left-0 ${
          isNavShown ? "block" : "hidden"
        }`}
      ></div>

      {/* Overlay that shows navigation */}
      <div
        className={`bg-grayBg flex flex-col items-center justify-center gap-10 -950:gap-16 fixed top-0 left-0 h-[100%] scale-y-0  pointer-events-none w-full z-[100] nav-main ${
          burgerClicked ? "active" : ""
        }`}
      >
        {/* Container for navigation links */}
        <div className="flex flex-col gap-6 w-full justify-center items-center">
          {nav_links.map((link, idx) => {
            return (
              <div
                key={idx}
                id={`#${link.toLocaleLowerCase()}`}
                onClick={scrollToSection}
                className="text-8xl -950:text-5xl -550:text-3xl  text-white relative overflow-hidden cursor-pointer uppercase font-medium nav_link-cont"
              >
                <div className="nav_link1-cont flex translate-y-[-100%]">
                  <p className="text-white text-sm -550:text-xs relative left-[1px] top-[7px] -950:top-[0px] -550:left-[0px]">
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
        <div className="flex justify-between w-full px-10 overflow-hidden -750:flex-col gap-8 -550:px-6">
          {/* Container for social icons*/}
          <div className="flex gap-4 items-center justify-center overflow-hidden ">
            {icons.map((icon, idx) => {
              return (
                <img
                  className="cursor-pointer nav_link1-cont translate-y-[100%]"
                  key={idx}
                  src={icon}
                  alt=""
                />
              );
            })}
          </div>

          <div className="text-white flex justify-center items-center gap-3 nav_link1-cont translate-y-[100%] text-center -400:text-sm">
            <img src={location} alt="" />
            <p>PRINCETON, NEW JERSEY</p>
          </div>
        </div>
      </div>
    </nav>
  );
}
