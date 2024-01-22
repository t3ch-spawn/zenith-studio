import React, { useRef } from "react";
import ParallaxImg from "./ParallaxImg";

export default function Services_Card(props) {
  const line1 = useRef(null);

  function animateLines(e) {
    if (!line1.current.classList.contains("right")) {
      line1.current.classList.add("right");
    } else {
      line1.current.classList.toggle("left");
    }
  }
  return (
    <div className={`z-[${props.number}] service-card max-w-[550px] relative`}>
      <p
        className={`absolute left-[20px] top-[20px] text-white text-8xl -950:text-7xl  font-bold z-[5]`}
      >
        {props.number}
      </p>

      <ParallaxImg
        imgSrc={props.imgSrc}
        imgTrigger={props.imgTrigger}
        styles="max-h-[280px] -500:max-h-[180px]"
      />

      {/* Container for typography explaining the image */}
      <div className="flex flex-col gap-4 bg-grayBg text-white p-4 font-medium">
        <p className="text-base -500:text-sm">
          <span className="text-grayText text-lg">
            {props.heading}
            <span className="text-white text-2xl">. </span>
          </span>
          {props.para}
        </p>
        <div
          className="relative w-fit cursor-pointer py-2"
          onMouseEnter={animateLines}
          onMouseLeave={animateLines}
        >
          <p>View service</p>
          <div
            ref={line1}
            className="line-1 absolute w-full h-[1px] bg-[white] right-0"
          ></div>
        </div>
      </div>
    </div>
  );
}
