import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import about from "../assets/footer_about.jpeg";
import contact from "../assets/footer_contact.jpeg";
import journal from "../assets/footer_journal.jpeg";
import team from "../assets/footer_team.jpeg";
import work from "../assets/footer_work.jpeg";
import interior from "../assets/folio-interior.jpeg";

const footer_links = ["About", "Team", "Work", "Journal", "Contact"];
const footer_imgs = [about, team, work, journal, contact];

export default function Footer() {
  useEffect(() => {
    const footerImgs = gsap.utils.toArray(".footer_image");

    footerImgs.forEach((image, idx) => {
      gsap.set(image, {
        y: "100%",
      });
    });
    gsap.registerPlugin(ScrollTrigger);

    gsap.set(".footer", { y: "100%" });

    ScrollTrigger.create({
      trigger: ".marque-container",
      //   end: "bottom 30%",
      scrub: true,
      animation: gsap.to(".footer", {
        y: 0,
      }),
    });
  }, []);
  function scaleImage(e) {
    const footerImgs = gsap.utils.toArray(".footer_image");

    const word = e.currentTarget.querySelector(".footer_word").textContent;
    const imgIdx = footer_links.indexOf(word);
    footerImgs.forEach((image, idx) => {
      gsap.to(image, {
        y: idx == imgIdx ? "0%" : "100%",
        ease: "power3.inOut",
        duration: 0.8,
      });
    });
    // gsap.to(footerImgs[imgIdx], {
    //   y: 1,
    // });
  }

  function scaleImageDown() {
    const footerImgs = gsap.utils.toArray(".footer_image");

    footerImgs.forEach((image, idx) => {
      gsap.to(image, {
        y: "100%",
        ease: "power3.inOut",
        duration: 0.8,
      });
    });
  }
  return (
    <section className=" bg-[white] footer relative z-[8] flex justify-between w-[90%] min-h-[80vh] items-center">
      {/* Container for the pictures and socials */}

      <div className="relative w-full overflow-hidden">
        <img src={about} className="max-w-[250px] h-full" alt="" />
        {footer_imgs.map((image) => {
          return (
            <img
              src={image}
              alt=""
              className="w-full max-w-[250px] h-full absolute top-0 footer_image origin-bottom"
            />
          );
        })}
      </div>

      {/* Container for the footer links */}
      <div className="w-[100%] max-w-[400px] flex flex-col gap-6">
        {footer_links.map((item, idx) => {
          return (
            <div
              onMouseEnter={scaleImage}
              onMouseLeave={scaleImageDown}
              className="flex flex-col relative cursor-pointer footer_link"
            >
              {/* Container on top of line that has the word and bubble */}
              <div className="flex justify-between items-end">
                <p className="text-6xl font-base footer_word">{item}</p>

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
    </section>
  );
}
