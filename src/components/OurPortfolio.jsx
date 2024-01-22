import React, { useRef } from "react";
import interior from "../assets/portfolio-interior.png";
import archi from "../assets/portfolio-archi.png";
import ParallaxImg from "./reusables/ParallaxImg";
import GetInTouch from "./reusables/GetInTouch";

export default function OurPortfolio() {
  return (
    <section
      id="about"
      className="bg-grayBg p-4 py-20 flex flex-col gap-16 items-start font-medium"
    >
      {/* Container for heading and line */}
      <div className="flex flex-col w-[90%] mx-auto">
        <h2 className="text-[#A39E9F] section-heading">Our Portfolio</h2>
        <hr className="w-full bg-[#A39E9F] border-none h-[1px] mt-[-1%] " />
      </div>
      <PortfolioHelper
        className="folio-archi"
        imgSrc={archi}
        heading="House Architectural Design in Trenton, New Jersey"
      />
      <PortfolioHelper
        className="folio-interior"
        imgSrc={interior}
        heading="Interior Design in Princeton, New Jersey"
      />

      {/* Container for btns */}
      <div className="flex w-full -550:flex-col justify-center items-center gap-10">
        <GetInTouch
          phrase="Get in touch"
          styles="!justify-between -550:!justify-between !pl-4 get-in-touch "
        />
        <GetInTouch
          phrase="Browse portfolio"
          arrStyles="hidden"
          styles="!bg-transparent border-white border-[1px]  !text-white p-4 !px-6"
        />
      </div>
    </section>
  );
}

function PortfolioHelper(props) {
  const line1 = useRef(null);

  function animateLines(e) {
    if (!line1.current.classList.contains("right")) {
      line1.current.classList.add("right");
    } else {
      line1.current.classList.toggle("left");
    }
  }
  return (
    <div className="flex -950:flex-col -950:items-start justify-between w-[90%] mx-auto items-center gap-10 ">
      {/* Image on the left */}
      <div className={`folio-pic-cont overflow-hidden ${props.className}`}>
        <ParallaxImg
          imgSrc={props.imgSrc}
          imgTrigger={`.${props.className}`}
          // imgStyles="object-cover !min-h-[0px]"
          // styles="-550:max-h-[260px]"
          imgStyles="-500:!min-h-[250px] -400:min-h-[220px] object-cover h-full"
          styles="-500:!max-h-[230px] -400:max-h-[200px] folio-pic-cont2"
        />
      </div>

      {/* Typography on the right */}
      <div className="flex flex-col justify-center items-start gap-8 text-white">
        <div className="flex justify-center items-center gap-3 text-folioGray">
          <p>New jersey</p> <hr className="w-[50px]" /> <p>Jan 5, 2024</p>
        </div>
        <h3 className="text-2xl max-w-[400px]">{props.heading}</h3>
        <div
          onMouseEnter={animateLines}
          onMouseLeave={animateLines}
          className="cursor-pointer relative py-2"
        >
          <p>View Project</p>
          <div
            ref={line1}
            className="line-1 absolute w-full h-[1px] bg-[#ffffff33] right-0"
          ></div>
        </div>
      </div>
    </div>
  );
}
