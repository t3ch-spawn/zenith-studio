import React, { useEffect, useState } from "react";
import "./App.css";
import Lenis from "@studio-freight/lenis";
import Hero from "./components/Hero";
import Services from "./components/Services";
import AbstractImg from "./components/AbstractImg";
import OurPortfolio from "./components/OurPortfolio";
import News from "./components/News";
import Clients from "./components/Clients";
import TogetherMarque from "./components/TogetherMarque";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";

export const Context = React.createContext();

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  const [heroImgHeight, setHeroImgHeight] = useState();

  return (
    <Context.Provider value={[heroImgHeight, setHeroImgHeight]}>
      <main className="relative">
        {/* <CustomCursor/> */}
        <Hero />
        <Services />
        <AbstractImg />
        <OurPortfolio />
        <Clients />
        <News />
        <TogetherMarque />
        <Footer/>
        </main>
    </Context.Provider>
  );
}

export default App;
