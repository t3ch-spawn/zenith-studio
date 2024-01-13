import React from "react";
import ParallaxImg from "./ParallaxImg";

export default function Services_Card(props) {
  return (
    <div className={`z-[${props.number}] service-card max-w-[550px] relative`}>
      <p
        className={`absolute left-[20px] top-[20px] text-white text-7xl font-bold z-[5]`}
      >
        {props.number}
      </p>

      <ParallaxImg
        imgSrc={props.imgSrc}
        imgTrigger={props.imgTrigger}
        styles="max-h-[280px] -500:max-h-[180px]"
      />

      {/* Container for typography explaining the image */}
      <div className="flex flex-col gap-4 bg-grayBg text-white p-4">
        <p className="text-xs">
          <span className="text-grayText text-base">Interior Design<span className="text-white text-2xl">. </span></span>
          Revamp your spaces with our personalized interior design. Casual and
          collaborative, we seamlessly blend style and functionality to elevate
          your lifestyle.
        </p>
        <p>View service</p>
      </div>
    </div>
  );
}
