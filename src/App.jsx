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
      <main>
        <Hero />
        <Services />
        <AbstractImg />
        <OurPortfolio />
        <Clients />
        <News />
        <TogetherMarque />
        <div className="min-h-[100vh]"></div>
      </main>
    </Context.Provider>
  );
}

export default App;
