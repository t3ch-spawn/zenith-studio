import React, { useContext, useEffect } from "react";
import { Context } from "../App";

export default function Services() {
  const [heroImgHeight] = useContext(Context);

  useEffect(() => {
    document.querySelector(".services-section").style.marginTop = `${
      heroImgHeight + 100
    }px`;
  }, [heroImgHeight]);
  return (
    <section className="services-section">
      <h2 className="text-4xl">Services</h2>
    </section>
  );
}
