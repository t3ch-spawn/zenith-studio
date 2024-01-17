import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import about from "../assets/footer_about.jpeg";
import contact from "../assets/footer_contact.jpeg";
import journal from "../assets/footer_journal.jpeg";
import team from "../assets/footer_team.jpeg";
import work from "../assets/footer_work.jpeg";
import main from "../assets/footer_main.jpeg";
import linkedIn from "../assets/linkedIn.svg";
import twitter from "../assets/twitter.svg";
import youtube from "../assets/youtube.svg";
import instagram from "../assets/instagram.svg";

const footer_links = ["About", "Team", "Work", "Journal", "Contact"];
const footer_imgs = [about, team, work, journal, contact];
const icons = [linkedIn, twitter, youtube, instagram];

export default function Footer() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animation for the reveal of the footer
    gsap.set(".footer", { y: "-70%" });

    ScrollTrigger.create({
      trigger: ".marque-container",
      end: "bottom 30%",
      scrub: true,
      animation: gsap.to(".footer", {
        y: 0,
      }),
    });

    // Animation that sets all the footer images to translate y on page load
    const footerImgs = gsap.utils.toArray(".footer_image");
    footerImgs.forEach((image, idx) => {
      gsap.set(image, {
        y: "100%",
        opacity: 1,
      });
    });
  }, []);
  function scaleImage(e) {
    const footerImgs = gsap.utils.toArray(".footer_image");

    const word = e.currentTarget.querySelector(".footer_word").textContent;
    const imgIdx = footer_links.indexOf(word);
    footerImgs.forEach((image, idx) => {
      gsap.to(image, {
        y: idx == imgIdx ? "0%" : "100%",
        x: 0,
        ease: "power4.out",
        duration: 0.5,
      });
    });
  }

  function scaleImageDown(e) {
    const footerImgs = gsap.utils.toArray(".footer_image");
    const word = e.currentTarget.querySelector(".footer_word").textContent;
    const imgIdx = footer_links.indexOf(word);
    footerImgs.forEach((image, idx) => {
      gsap.to(image, {
        y: idx == imgIdx ? "-100%" : "100%",
        ease: "power4.out",
        duration: 0.5,
        // opacity: 0,
        onComplete: () => {
          gsap.to(image, {
            x: idx == imgIdx ? "0%" : "0%",
            y: idx == imgIdx ? "100%" : "100%",
            duration: 0,
          });
        },
      });
    });
  }
  return (
    <section className=" bg-[white] footer relative z-[8] flex justify-between w-[90%] mx-auto min-h-[70vh] items-center -850:flex-col -850:items-start -850:gap-16">
      {/* Container for the pictures and socials */}

      <div className="flex flex-col gap-8 items-start -850:items-center -850:w-full -850:justify-center">
        {/* Container for pictures */}
        <div className="relative w-full overflow-hidden flex flex-col -850:items-center">
          <img
            src={main}
            className="max-w-[250px] h-full w-full footer_image-main"
            alt=""
          />
          {footer_imgs.map((image, idx) => {
            return (
              <img
                key={idx}
                src={image}
                alt=""
                className={`w-full max-w-[250px] h-full absolute top-0 footer_image origin-bottom`}
              />
            );
          })}
        </div>

        {/* Container for the social icons only shown on desktop*/}
        <div className="flex gap-4 items-center justify-center -850:hidden">
          {icons.map((icon, idx) => {
            return <img key={idx} src={icon} alt="" />;
          })}
        </div>
      </div>

      {/* Container for the footer links */}
      <div className="w-[100%] max-w-[400px] -850:max-w-[700px] flex flex-col gap-6">
        {footer_links.map((item, idx) => {
          return (
            <div
              onMouseEnter={scaleImage}
              onMouseLeave={scaleImageDown}
              className="flex flex-col relative cursor-pointer footer_link"
              key={item}
            >
              {/* Container on top of line that has the word and bubble */}
              <div className="flex justify-between items-end">
                <p className="text-6xl -550:text-3xl font-base footer_word">
                  {item}
                </p>

                <div className="bg-[#C2BEBE] p-5 h-[20px] w-[20px] flex justify-center items-center rounded-[50%] text-white relative">
                  <p className="relative z-[5]"> {item.slice(0, 1)}</p>

                  {/* black bubble that animates when hovered on */}
                  <div className="absolute w-full h-full bg-black top-0 left-0 rounded-[50%] z-[3] black_bubble"></div>
                </div>
              </div>

              {/* Container for line */}
              <div className="bg-[#00000033] h-[1px] w-full absolute bottom-[-5px]">
                {/* inner black line that animates when hovered on */}
                <div
                  className={`${
                    (idx + 1) % 2 == 1 ? "origin-right" : "origin-left"
                  } absolute w-full h-full bg-black top-0 left-0 black_line`}
                ></div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Container for the social icons only shown on mobile*/}
    <div className="hidden gap-4 items-center justify-center w-full -850:flex">
        {icons.map((icon, idx) => {
          return <img key={idx} src={icon} alt="" />;
        })}
      </div>
    </section>
  );
}
