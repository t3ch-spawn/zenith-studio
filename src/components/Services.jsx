import React, { useContext, useEffect } from "react";
import { Context } from "../App";

export default function Services() {
  const [heroImgHeight] = useContext(Context);

  useEffect(() => {
    const servicesEL = document.querySelector(".services-section");
    const heroImgEl = document.querySelector(".hero-img-cont");

    if (heroImgEl.style.bottom == "0px") {
      servicesEL.style.marginTop = "333px";
    }
    servicesEL.style.marginTop = `${heroImgHeight + 100}px`;
  }, [heroImgHeight]);
  return (
    <section className="services-section">
      <h2 className="text-4xl">Services</h2>
    </section>
  );
}
