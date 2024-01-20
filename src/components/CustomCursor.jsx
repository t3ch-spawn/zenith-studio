import React, { useEffect } from "react";

export default function CustomCursor() {
  useEffect(() => {
    const cursor = document.querySelector(".custom-cursor");
    const cursorDot = document.querySelector(".cursor-dot");
    document.addEventListener("mousemove", (e) => {
      cursorDot.style.top = e.clientY + "px";
      cursorDot.style.left = e.clientX + "px";

      cursor.animate(
        {
          left: e.clientX + "px",
          top: e.clientY + "px",
        },
        {
          duration: 700,
          fill: "forwards",
        }
      );
    });

    // document.addEventListener("scroll", (e) => {
    //   cursor.style.top = e.pageY + "px";
    //   cursor.style.left = e.pageX + "px";
    // });
  }, []);

  return (
    <>
      <div className="custom-cursor fixed bg-white h-[20px] w-[20px] translate-x-[-50%] translate-y-[-50%]  z-[210] pointer-events-none"></div>

      <div className="cursor-dot h-[5px] w-[5px] fixed bg-white rounded-[50%] pointer-events-none z-[215] translate-x-[-50%] translate-y-[-50%]"></div>
    </>
  );
}
