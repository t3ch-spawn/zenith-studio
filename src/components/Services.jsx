import React, { useContext, useEffect } from "react";
import { Context } from "../App";
import Services_Card from "./reusables/Services_Card";
import architecture from "../assets/architecture.png";
import interior from "../assets/interior.png";
import space from "../assets/space.png";
import exterior from "../assets/exterior.png";
import construction from "../assets/construction.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Services() {
  const [heroImgHeight] = useContext(Context);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const serviceDivs = gsap.utils.toArray(".service-div");
    const lines = gsap.utils.toArray(".description-line");

    serviceDivs.forEach((div, idx, array) => {
      gsap.to(div, {
        scrollTrigger: {
          start: "top 10%",
          trigger: div,
          scrub: true,
          // markers: true,
        },
        position: "sticky",
        top: "10%",
        z: idx == array.length - 1 ? "" : "-10vw",
        rotateY: idx == array.length - 1 ? "" : "-20deg",
        transformOrigin: "top",
      });
    });

    serviceDivs.forEach((div, idx, array) => {
      gsap.to(div, {
        scrollTrigger: {
          start: "top 20%",
          end: "50% 20%",
          trigger: array[idx + 1],
          scrub: -1,
          // markers: true,
        },
        // position: "sticky",
        // top: "0px",
        // z: idx == array.length - 1 ? "" : "-10vw",
        opacity: idx == array.length - 1 ? "" : "0",
        // transformOrigin: "top",
      });
    });

    // Scroll trigger that pins the description container on the left
    ScrollTrigger.create({
      trigger: ".service-divs-container",
      animation: gsap.to(".description-container", {
        position: "sticky",
        top: "50%",
        y: "-50%",
      }),
    });

    // Animation that tells the lines when to grow, based on the div that is currently being shown
    lines.forEach((line, idx) => [
      ScrollTrigger.create({
        trigger: serviceDivs[idx],
        scrub: true,
        start: "top 40%%",
        end: "bottom 40%",
        animation: gsap.to(line, {
          width: "100%",
          height: "3px",
          onComplete: () => {
            gsap.to(line, {
              width: "10%",
              height: "1px",
            });
          },
        }),
      }),
    ]);
  }, []);

  return (
    <section className="services-section flex flex-col gap-10 mt-[32%]">
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

      <div className="w-full flex justify-end">
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

      {/* Overall container for pictures and description */}
      <div className="flex justify-between relative service-all-container min-h-[100vh]">
        {/* Container for description on the left */}
        <div className="description-container h-full max-w-[300px] w-full flex flex-col gap-4 -500:hidden">
          <DescriptionHelper number="01" descrip="Architectural Design" />
          <DescriptionHelper number="02" descrip="Interior Design" />
          <DescriptionHelper number="03" descrip="Space Design" />
          <DescriptionHelper number="04" descrip="Exterior Design" />
          <DescriptionHelper number="05" descrip="Construction" />
        </div>

        {/* Container for the pictures on the right */}
        <div className="relative service-divs-container flex flex-col gap-2 max-w-[550px] h-full w-full">
          <div className="architecture service-div">
            <Services_Card
              imgSrc={architecture}
              imgTrigger=".architecture"
              number="01"
            />
          </div>
          <div className="interior service-div">
            <Services_Card
              imgSrc={interior}
              imgTrigger=".interior"
              number="02"
            />
          </div>
          <div className="space service-div">
            <Services_Card imgSrc={space} imgTrigger=".space" number="03" />
          </div>
          <div className="exterior service-div">
            <Services_Card
              imgSrc={exterior}
              imgTrigger=".exterior"
              number="04"
            />
          </div>
          <div className="construction service-div">
            <Services_Card
              imgSrc={construction}
              imgTrigger=".construction"
              number="05"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function DescriptionHelper(props) {
  return (
    <div className="w-full description-div">
      <div className="flex gap-10">
        <p>{props.number}</p> <p>{props.descrip}</p>
      </div>
      <div className="description-line relative" />
    </div>
  );
}
