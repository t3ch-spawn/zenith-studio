import React, { useContext, useEffect } from "react";
import { Context } from "../App";
import Services_Card from "./reusables/Services_Card";
import architecture from "../assets/architecture.png";
import interior from "../assets/interior.png";
import space from "../assets/space.png";
import exterior from "../assets/exterior.png";
import construction from "../assets/construction.png";

export default function Services() {
  const [heroImgHeight] = useContext(Context);

  return (
    <section className="services-section mt-[32%]">
      <h2 className="text-6xl">
        <span>
          Services
          <hr className="services-lines" />
        </span>
        <span>
          Our process is casual
          <hr className="services-lines" />
        </span>
        <span>
          and conversational
          <hr className="services-lines" />
        </span>
      </h2>

      <div className="w-full  flex justify-end">
        <p className="w-full max-w-[400px]">
          Our architectural firm takes a distinctive approach to services,
          fostering a casual and conversational process. From initial
          consultations to project completion, we prioritize open dialogue,
          ensuring your vision is not only understood but celebrated.
          <br /> <br />
          Our team combines expertise with approachability, making the journey
          from concept to reality both enjoyable and collaborative. Experience a
          design process that goes beyond blueprints, creating spaces that
          uniquely reflect your style and preferences.
        </p>
      </div>

      <div className="flex flex-col gap-2 ">
        <div className="architecture">
          <Services_Card
            imgSrc={architecture}
            imgTrigger=".architecture"
            number="01"
          />
        </div>

        <div className="interior">
          <Services_Card imgSrc={interior} imgTrigger=".interior" number="02" />
        </div>
        <div className="space">
          <Services_Card imgSrc={space} imgTrigger=".space" number="03" />
        </div>
        <div className="exterior">
          <Services_Card imgSrc={exterior} imgTrigger=".exterior" number="04" />
        </div>
        <div className="construction">
          <Services_Card
            imgSrc={construction}
            imgTrigger=".construction"
            number="05"
          />
        </div>
      </div>
    </section>
  );
}
