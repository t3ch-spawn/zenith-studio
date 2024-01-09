import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ParallaxImg(props) {
  const imgRef = useRef(null);
  ParallaxImg.defaultProps = {
    trigger: imgRef.current
  };
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.set(imgRef.current, { y: -80 });

    gsap.to(imgRef.current, {
      scrollTrigger: {
        scrub: true,
        trigger: props.imgTrigger,
        // markers: true,
      },
      y: 0,
    });
  }, []);

  return (
    <div className={`flex overflow-hidden ${props.styles}`}>
      <img
        ref={imgRef}
        className="mx-auto scale-[1.15]"
        src={props.imgSrc}
        alt=""
      />
    </div>
  );
}
