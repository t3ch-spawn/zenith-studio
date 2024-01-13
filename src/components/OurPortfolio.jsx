import React from "react";
import interior from "../assets/portfolio-interior.png";
import archi from "../assets/portfolio-archi.png";
import ParallaxImg from "./reusables/ParallaxImg";
import GetInTouch from "./reusables/GetInTouch";

export default function OurPortfolio() {
  return (
    <div className="bg-grayBg p-4 py-20 flex flex-col gap-16 items-start">
      {/* Container for heading and line */}
      <div className="flex flex-col text-6xl w-[90%] mx-auto gap-4">
        <h2 className="text-[#A39E9F]">Our Portfolio</h2>
        <hr className="w-full bg-[#A39E9F] border-none h-[1px]" />
      </div>
      <PortfolioHelper className="folio-archi" />
      <PortfolioHelper className="folio-interior" />

      {/* Container for btns */}
      <div className="flex w-full -550:flex-col justify-center items-center gap-10">
        <GetInTouch
          phrase="Get in touch"
          styles="w-full max-w-[280px] -550:max-w-[400px]"
        />
        <GetInTouch
          phrase="Browse portfolio"
          arrStyles="hidden"
          styles="bg-transparent border-white border-[1px] text-white p-4 !px-6 w-full max-w-[280px] -550:max-w-[400px]"
        />
      </div>
    </div>
  );
}

function PortfolioHelper(props) {
  return (
    <div className="flex -950:flex-col -950:items-start justify-between w-[90%] mx-auto items-center gap-10">
      {/* Image on the left */}
      <div className={`folio-pic-cont ${props.className}`}>
        <ParallaxImg imgSrc={interior} imgTrigger={`.${props.className}`} />
      </div>

      {/* Typography on the right */}
      <div className="flex flex-col justify-center items-start gap-8 text-white">
        <div className="flex justify-center items-center gap-3 text-folioGray">
          <p>New jersey</p> <hr className="w-[50px]" /> <p>Jan 5, 2024</p>
        </div>
        <h3 className="text-2xl max-w-[400px]">
          House Architectural Design in Trenton, New Jersey
        </h3>
        <div className="cursor-pointer">
          <p>View Project</p>
          <hr className="w-full bg-[#A39E9F] border-none h-[1px]" />
        </div>
      </div>
    </div>
  );
}
