import React, { useEffect, useState } from "react";
import "./App.css";
import Lenis from "@studio-freight/lenis";
import Hero from "./components/Hero";
import Services from "./components/Services";
import AbstractImg from "./components/AbstractImg";

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
        <div className="min-h-[100vh] bg-[red] relative z-[15]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
          nesciunt, mollitia incidunt sunt unde quas deserunt fugiat porro
          praesentium, debitis necessitatibus autem quia iure tempora vero, sint
          tempore dolorem molestias. Sit molestias fuga odio iusto eum quis
          magni, unde, illo libero numquam labore explicabo, tempore deleniti?
          Minus nobis reprehenderit quisquam deserunt iste! Id velit consequatur
          veritatis optio, nam nobis odit. Laudantium iusto vero debitis
          repellat voluptas provident numquam eaque aliquam commodi ducimus rem
          corporis atque ipsa aliquid dicta et, illo mollitia facilis. Atque
          voluptatibus nihil velit recusandae. Neque, itaque placeat! Quibusdam
          ipsum reprehenderit rem blanditiis maxime reiciendis sequi est culpa
          consequuntur numquam nam asperiores temporibus officia ab doloribus
          dolorum recusandae, mollitia, quisquam at magni distinctio fuga,
          necessitatibus pariatur? Quae, ut. Culpa tempore itaque omnis magni,
          iure et eius velit, sint totam voluptatibus ipsam quas ullam
          consequuntur facilis temporibus eaque tenetur provident dicta in, hic
          sit doloremque ab nisi cupiditate! Quidem? Perspiciatis tempore ex,
          sed accusamus perferendis architecto iure suscipit eius. Quo, deleniti
          sequi ipsum tenetur minima tempora illo porro eaque est dolores
          corrupti veniam rerum cum enim magni quod adipisci. Fugiat in,
          incidunt aliquid veniam deserunt voluptatum, commodi harum non nam
          cupiditate nobis quibusdam. Maiores molestiae numquam, sapiente
          facilis eum neque porro expedita id eius soluta cum rem ipsum laborum?
          Maiores similique aspernatur, voluptatum voluptatem sed officia unde
          quisquam odit architecto deserunt cupiditate dolorem quas animi quidem
          sapiente itaque corporis voluptatibus aut culpa nisi magni. Accusamus
          omnis esse dicta aliquid! Adipisci quis architecto aspernatur
          blanditiis non. A nulla, reiciendis temporibus cupiditate dolorum
          soluta aspernatur doloremque hic asperiores saepe molestiae dolor      
        </div>
      </main>
    </Context.Provider>
  );
}

export default App;
