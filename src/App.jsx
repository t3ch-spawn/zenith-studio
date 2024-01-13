import React, { useEffect, useState } from "react";
import "./App.css";
import Lenis from "@studio-freight/lenis";
import Hero from "./components/Hero";
import Services from "./components/Services";

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
        <div className="min-h-[100vh]">
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
          maiores, autem perspiciatis voluptatum repellat perferendis? Quisquam
          nostrum itaque quasi! Nihil nesciunt similique obcaecati eaque qui,
          maiores earum sed cum, veniam ipsum dolore labore in, repellat
          laboriosam. Ducimus et, dignissimos alias numquam, omnis, deserunt
          ullam blanditiis quas qui explicabo dolor? Tempore enim debitis qui.
          Ducimus nemo quibusdam ea quisquam perspiciatis itaque officia, eum
          minima architecto eligendi! Quis nulla libero obcaecati optio
          doloribus reiciendis aperiam magni. Quaerat hic facere eveniet
          architecto. Et, facere nemo enim possimus accusamus, asperiores
          placeat ipsa ad sed nihil exercitationem ipsam soluta fuga assumenda
          culpa beatae aliquam velit. Quidem molestias reiciendis officiis ea,
          corrupti illo earum neque. Perferendis excepturi beatae, dolore rerum
          tenetur delectus expedita amet consequatur illum nam. Delectus enim
          impedit saepe provident, nemo voluptatum voluptate alias, eius,
          excepturi quidem deleniti nostrum magni veniam minus magnam. Excepturi
          nostrum dolore hic suscipit est qui laudantium maxime fugiat commodi
          recusandae, minus culpa saepe fuga neque illum veniam non laboriosam
          corrupti perspiciatis id quasi ratione. Odio labore id similique.
          Consequatur exercitationem vel nostrum omnis quibusdam quidem qui est
          doloribus, distinctio, debitis voluptatem eos rerum esse excepturi
          reprehenderit, itaque atque quod ex facere! Debitis tempore, velit
          cupiditate esse fugit iure! Consequuntur voluptates quia officia esse,
          rerum minima fugit illo impedit quos earum maiores voluptatum non,
          tempora nobis! Temporibus voluptatibus, aperiam delectus repellat
          perspiciatis, deserunt voluptas laudantium illo, suscipit doloribus
          dolorum! Perspiciatis voluptatem suscipit excepturi beatae non impedit
          nostrum vero fugit tenetur! Omnis vero at, doloribus accusamus vitae
          pariatur! Est asperiores esse totam laudantium culpa exercitationem
          enim suscipit consequatur impedit perspiciatis! Eius sequi corporis
          magnam est hic fugiat molestiae magni, inventore maiores delectus
          autem illum ad expedita amet vel atque ipsa ullam. Dolore impedit
          beatae officia ab enim suscipit quam iusto? Natus voluptatibus ipsum
          aut impedit odio neque saepe vero aspernatur ea eveniet, sint eum
          minus. Consequatur, voluptas. Commodi et voluptates beatae! Accusamus
          nesciunt harum natus, soluta expedita facere excepturi dolorem!
          Voluptates, non minima itaque explicabo ut, cupiditate asperiores
          porro neque excepturi eos fuga maiores libero consectetur quibusdam
          minus error nostrum? Perferendis, magnam quod. Aliquid, a velit
          mollitia labore laudantium est! Porro quaerat cupiditate cum illo
          tempore vero laboriosam fugiat nemo culpa itaque natus iure deserunt,
          neque ullam fugit, molestiae molestias sint quia architecto ut
          eligendi rerum nihil eveniet voluptatum. Quibusdam! Officia asperiores
          tenetur totam veniam voluptatibus, qui porro itaque ipsam, quo earum,
          consequatur cupiditate optio sequi! Culpa ratione nobis quam harum
          illum. Sapiente veniam enim velit fugiat veritatis saepe
          exercitationem! At praesentium, minima quo ullam exercitationem,
          quibusdam nobis natus nam eos earum, velit fugit optio? Dolores
          voluptatem ducimus culpa. Velit est magnam dicta ab numquam officiis
          non exercitationem, culpa placeat? Quo, libero. Aliquam quaerat
          consectetur, ratione ipsum perspiciatis enim error fugiat in veritatis
          cupiditate maxime molestias quia, repellendus beatae temporibus
          aliquid officia quasi aut eveniet aperiam praesentium atque dolorem?
          Molestias! Nihil odio et sit culpa a, nam molestias sed sint at
          maxime. Error tenetur enim rem quisquam neque adipisci a dolorum!
          Maiores, illum alias? Perspiciatis quisquam saepe temporibus placeat
          amet! Sit inventore, architecto, similique recusandae atque quos
          ratione nulla, molestiae odit excepturi necessitatibus consectetur
          quibusdam? Est facere, quisquam blanditiis unde tempore vitae culpa
          nobis, atque ipsa corrupti, harum explicabo! Error.
        </div>
      </main>
    </Context.Provider>
  );
}

export default App;
