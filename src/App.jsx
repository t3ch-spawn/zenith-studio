import { useEffect, useState } from "react";
import "./App.css";
import Lenis from "@studio-freight/lenis";
import Hero from "./components/Hero";

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

  return (
    <main>
      <div className="min-h-[100vh]"></div>

      <Hero />

      <div className="min-h-[100vh]"></div>
    </main>
  );
}

export default App;
