import React, { useEffect, useRef, useState } from "react";
import { useRive, useStateMachineInput } from "@rive-app/react-canvas";
import gsap from "gsap";
// import createjs from "preloadjs"

export default function Loader() {
  const play = useRef(null);
  const loadPercent = useRef(null);
  const [progressNumber, setProgressNumber] = useState(0);
  const [hasLoaded, setHasLoaded] = useState(false);

  const { rive, RiveComponent } = useRive({
    src: "/loader.riv",
    stateMachines: "zenith anim",
    autoplay: true,
    onStateChange: (e) => {
      //   if (e.data[0] == "exit") {
      //     setTimeout(() => {
      //       gsap
      //         .timeline()
      //         .to(".rive-component", {
      //           opacity: 0,
      //           pointerEvents: "none",
      //         })
      //         .to(".loader-container", {
      //           scaleY: 0,
      //           pointerEvents: "none",
      //           stagger: { amount: 0.4 },
      //           onComplete: () => {
      //             document.querySelector("body").classList.add("active");
      //           },
      //         });
      //     }, 2000);
      //   }
    },
  });

  play.current = useStateMachineInput(rive, "zenith anim", "play");
  loadPercent.current = useStateMachineInput(
    rive,
    "zenith anim",
    "Load Percent"
  );

  useEffect(() => {
    const queue = new createjs.LoadQueue(false);
    queue.loadFile("../assets/abstract-image.jpeg");
    queue.loadFile("../assets/footer_about.jpeg");
    queue.loadFile("../assets/footer_contact.jpeg");
    queue.loadFile("../assets/footer_journal.jpeg");
    queue.loadFile("../assets/footer_main.jpeg");
    queue.loadFile("../assets/footer_team.jpeg");
    queue.loadFile("../assets/footer_work.jpeg");
    queue.loadFile("../assets/inspiring-archis.jpeg");
    queue.loadFile("../assets/kitchen-counter.jpeg");
    queue.loadFile("../assets/kitchen-main.jpeg");
    queue.loadFile("../assets/modern-kitchen.jpeg");
    queue.loadFile("../assets/dining.jpeg");
    queue.loadFile("../assets/slider-parlor.jpeg");
    queue.loadFile("../assets/small-living.jpeg");
    queue.loadFile("../assets/construction.png");
    queue.loadFile("../assets/portfolio-archi.png");
    queue.loadFile("../assets/portfolio-interior.png");
    queue.loadFile("../assets/exterior.png");
    queue.loadFile("../assets/space.png");
    queue.loadFile("../assets/interior.png");
    queue.loadFile("../assets/architecture.png");
    queue.loadFile("../assets/hero-image.png");

    queue.on("progress", (e) => {
      const fill = document.querySelector(".loader-fill");

      if (loadPercent.current) {
        fill.style.width = `${e.progress * 100}%`;
        loadPercent.current.value = e.progress * 100;
        setProgressNumber(e.progress * 100);
      }
    });
  }, []);

  //   useEffect(() => {
  //     if (play.current) {
  //       play.current.fire();
  //     }
  //   }, [hasLoaded]);

  return (
    <>
      <div className="loader-container fixed z-[200] bg-grayBg h-full w-full top-0 left-0 flex flex-col justify-center items-center origin-top">
        <RiveComponent className="rive-component w-full max-w-[750px] mx-auto h-full" />

        <div className="absolute translate-x-[-50%] left-[50%] bottom-[20%] flex flex-col gap-6">
          <div
            className={`${
              progressNumber == 100 ? "active" : ""
            } bg-[#d9d9d9] w-[400px] flex justify-center items-center h-[5px] relative loading-bar`}
          >
            <div className=" bg-black loader-fill duration-[250ms] ease-in-out h-[98%] left-0 absolute"></div>
          </div>
          <p
            className={`${
              progressNumber == 100 ? "opacity-0 pointer-events-none" : ""
            }  duration-200 text-white text-2xl text-center`}
          >
            {Math.floor(progressNumber)}%
          </p>
        </div>
      </div>

      <div className="bg-[#545353] loader-container fixed z-[180] h-full w-full top-0 left-0 flex flex-col justify-center items-center origin-bottom"></div>
    </>
  );
}
