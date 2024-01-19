import React from "react";
import ParallaxImg from "./ParallaxImg";

export default function Services_Card(props) {
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
        <p>View service</p>
      </div>
    </div>
  );
}
