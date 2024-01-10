import React, { useContext, useEffect } from "react";
import { Context } from "../App";

export default function Services() {
  const [heroImgHeight] = useContext(Context);

  return (
    <section className="services-section mt-[32%]">
      <h2 className="text-4xl">Services</h2>
    </section>
  );
}
