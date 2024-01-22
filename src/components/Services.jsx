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

    // Animation that pins each card successively to the top of the page, using position sticky
    serviceDivs.forEach((div, idx, array) => {
      gsap.to(div, {
        scrollTrigger: {
          start: "top 50px",
          trigger: div,
          scrub: true,
          // markers: true,
        },
        position: "sticky",
        top: "50px",
        z: idx == array.length - 1 ? "" : "-10vw",
        rotateY:
          idx == array.length - 1
            ? ""
            : (idx + 1) % 2 == 1
            ? "24deg"
            : "-24deg",
      });
    });

    // Animation that fades the cards out once they have reached the top, using the next card as a trigger
    serviceDivs.forEach((div, idx, array) => {
      gsap.to(div, {
        scrollTrigger: {
          start: "top 30%",
          end: "50% 30%",
          trigger: array[idx + 1],
          scrub: true,
          // markers: true,
        },

        opacity: idx == array.length - 1 ? "" : "0",
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
    <section
      id="services"
      className="services-section flex flex-col gap-10 pt-[580px]  -950:pt-[45%] z-[15] relative bg-[#F3EEEE]"
    >
      <h2 className="text-6xl -950:text-3xl font-medium">
        <span className="max-w-[500px] hidden -400:block  -400:!text-3xl">
          <span className="text-servicesGray">Services</span> <br /> Our process
          is casual and conversational
          <hr className="services-lines" />
        </span>

        <div className="-400:hidden">
          <span className="w-full relative text-servicesGray">
            Services
            <hr className="services-lines" />
          </span>
          <span className="w-full relative">
            Our process is casual
            <hr className="services-lines" />
          </span>
          <span className="w-full relative">
            and conversational
            <hr className="services-lines" />
          </span>
        </div>
      </h2>

      <div className="w-full flex justify-end -950:justify-start">
        <p className="w-full max-w-[400px] font-normal font-moderatReg">
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
      <div className="flex justify-between -950:justify-center px-10 -500:px-1 gap-6  relative service-all-container min-h-[100vh]">
        {/* Container for description on the left */}
        <div className="description-container h-full max-w-[300px] w-full flex flex-col gap-4 -950:hidden">
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
              para="Transforming Visions into Architectural Masterpieces, Where Casual Conversations Inspire Extraordinary Design Solutions..."
              heading="Architectural Design"
            />
          </div>
          <div className="interior service-div">
            <Services_Card
              imgSrc={interior}
              imgTrigger=".interior"
              number="02"
              para=" Revamp your spaces with our personalized interior design. Casual and collaborative, we seamlessly blend style and functionality to elevate your lifestyle."
              heading="Interior Design"
            />
          </div>
          <div className="space service-div">
            <Services_Card
              imgSrc={space}
              imgTrigger=".space"
              number="03"
              para="Transform spaces effortlessly with our personalized space design. Casual and collaborative, we balance style and functionality to enhance your lifestyle."
              heading="Space Design"
            />
          </div>
          <div className="exterior service-div">
            <Services_Card
              imgSrc={exterior}
              imgTrigger=".exterior"
              number="04"
              para="Elevate your outdoor space with our personalized exterior design—blending style and practicality effortlessly."
              heading="Exterior Design"
            />
          </div>
          <div className="construction service-div">
            <Services_Card
              imgSrc={construction}
              imgTrigger=".construction"
              number="05"
              para="Transform with our construction expertise. Casual, collaborative, extraordinary."
              heading="Construction"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function DescriptionHelper(props) {
  return (
    <div className="w-full description-div text-xl">
      <div className="flex gap-10">
        <p className="italic font-light">{props.number}</p>{" "}
        <p className="font-normal font-moderatReg">{props.descrip}</p>
      </div>
      <div className="description-line relative" />
    </div>
  );
}
