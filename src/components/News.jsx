import React, { useEffect } from "react";
import ParallaxImg from "./reusables/ParallaxImg";
import kitchenMain from "../assets/kitchen-main.jpeg";
import dining from "../assets/dining.jpeg";
import small_living from "../assets/small-living.jpeg";
import kitchen_counter from "../assets/kitchen-counter.jpeg";
import inspiring_archis from "../assets/inspiring-archis.jpeg";
import modern_kitchen from "../assets/modern-kitchen.jpeg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const content = [
  {
    id: 1,
    img: small_living,
    infoType: "Resources",
    heading: "5 ESSENTIAL PIECES FOR SMALL LIVING",
    date: "Jan 1, 2024",
    readTime: "2 min read",
    class_name: "news_living",
  },
  {
    id: 2,
    img: kitchen_counter,
    infoType: "Resources",
    heading: "STYLES FOR YOUR KITCHEN COUNTER",
    date: "Jan 2, 2024",
    readTime: "2 min read",
    class_name: "news_kitchenCounter",
  },
  {
    id: 3,
    img: dining,
    infoType: "Article",
    heading: "10 OF THE BEST DINING CHAIRS",
    date: "Jan 3, 2024",
    readTime: "3 min read",
    class_name: "news_dining",
  },
  {
    id: 4,
    img: inspiring_archis,
    infoType: "Article",
    heading: "INSPIRING ARCHITECTS YOU SHOULD FOLLOW",
    date: "Jan 4, 2024",
    readTime: "1 min read",
    class_name: "news_archis",
  },
  {
    id: 5,
    img: modern_kitchen,
    infoType: "Article",
    heading: "MODERN KITCHEN DESIGN",
    date: "Jan 4, 2024",
    readTime: "1 min read",
    class_name: "news_modernKitchen",
  },
];

const categories = ["Resources", "Articles", "News"];

export default function News() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Scroll trigger that pins the description container on the left
    ScrollTrigger.create({
      trigger: ".sub-news-container",
      //   markers: true,
      start: "top 50%",
      animation: gsap.to(".main-news", {
        position: "sticky",
        top: "15%",
      }),
    });
  }, []);

  return (
    // Container for whole section
    <section
      id="journal"
      className="flex flex-col items-start gap-16 bg-grayBg py-16 relative z-[15] font-medium"
    >
      {/* Container for heading and line */}
      <div className="flex flex-col w-[90%] mx-auto">
        <h2 className="text-[#A39E9F] section-heading">News & Articles </h2>
        <hr className="w-full bg-[#A39E9F] border-none h-[1px] mt-[-1%]" />
      </div>

      {/* Container for the all the pictures & CATEGORIES section */}
      <div className="flex items-start justify-between gap-5 w-[90%] mx-auto">
        {/* Container for main picture on the left(that gets pinned)*/}
        <div className=" main-news kitchen-main w-[50%] max-w-[500px] flex flex-col gap-3 -950:hidden">
          <div className=" news_image_parent overflow-hidden">
            {" "}
            <ParallaxImg
              imgSrc={kitchenMain}
              imgTrigger=".kitchen-main"
              styles="news_image_cont"
            />
          </div>
          <p className="text-folioGray text-sm">News</p>
          <h3 className="text-3xl text-white">KITCHEN STYLE TRENDS 2024</h3>
        </div>

        {/* Container for sub pictures on the right */}
        <div className="flex flex-col gap-8 -500:gap-16 sub-news-container">
          {/* Mobile form of the main picture that is hidden on big screens */}
          <div className="kitchen-main w-full flex-col gap-3 max-w-[500px] -950:flex hidden">
            <div className=" news_image_parent overflow-hidden">
              {" "}
              <ParallaxImg
                imgSrc={kitchenMain}
                imgTrigger=".kitchen-main"
                styles="news_image_cont"
              />
            </div>
            <p className="text-folioGray text-sm">News</p>
            <h3 className="text-3xl text-white">KITCHEN STYLE TRENDS 2024</h3>
          </div>
          {content.map((item) => {
            return (
              <NewsHelper
                imgSrc={item.img}
                class_name={item.class_name}
                infoType={item.infoType}
                heading={item.heading}
                date={item.date}
                readTime={item.readTime}
                key={item.id}
              />
            );
          })}

          {/* Container for categories heading and boxes */}
          <div className="flex flex-col items-start text-white gap-7 mt-7 categories-cont">
            <h3 className="text-2xl">CATEGORIES</h3>

            <div className="flex gap-8 flex-wrap justify-center">
              {categories.map((category, idx) => {
                return (
                  <div
                    key={idx}
                    className="text-black bg-white p-3 font-[700] cursor-pointer"
                  >
                    {category}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Container for input field container */}
      <div className="w-[90%] mx-auto mt-[100px] subscribe-container">
        <h3 className="text-2xl text-white mb-12">
          SUBSCRIBE TO OUR NEWSLETTER
        </h3>

        {/* container for input field and button */}
        <div className="flex items-end relative max-w-[500px]">
          <input
            type="text"
            placeholder="Enter your email address"
            className="subscribe-input border-b-2 relative border-grayText bg-transparent placeholder:text-grayText w-full  focus:outline-none text-white pb-2 pl-2"
          />
          <div className="absolute bg-white h-[2px] w-[0px] duration-300 ease-in-out bottom-0 left-0"></div>
          <button className="text-black bg-white p-3 font-[700] cursor-pointer">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
}

function NewsHelper(props) {
  return (
    // Container for each sub picture and content
    <div className="flex -500:flex-col items-center -500:items-start gap-5">
      {/* Container for sub picture */}
      <div
        className={`${props.class_name} max-w-[300px] -650:max-w-[150px] -500:max-w-[initial]  news_image_parent overflow-hidden`}
      >
        <ParallaxImg
          imgSrc={props.imgSrc}
          imgTrigger={`.${props.class_name}`}
          imgStyles="!min-h-[220px] object-cover"
          styles="!max-h-[200px] news_image_cont"
        />
      </div>

      {/* Container for content/description */}

      <div className="flex flex-col items-start h-[90%] gap-6 justify-around max-w-[300px] text-folioGray">
        <p className="text-xl -650:text-base">{props.infoType}</p>
        <h4 className="uppercase text-white text-xl -650:text-base">
          {props.heading}
        </h4>
        <div className="flex justify-start gap-3 items-center w-full text-sm text-center">
          <p>{props.date}</p> <hr className="w-[30px]" />{" "}
          <p>{props.readTime}</p>
        </div>
      </div>
    </div>
  );
}
