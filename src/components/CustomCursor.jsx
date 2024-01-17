import React, { useEffect } from "react";

export default function CustomCursor() {
  useEffect(() => {
    const cursor = document.querySelector(".custom-cursor");
    document.addEventListener("mousemove", (e) => {
      cursor.style.top = e.pageY + "px";
      cursor.style.left = e.pageX + "px";
    });

    document.addEventListener("scroll", (e) => {
      cursor.style.top = e.pageY + "px";
      cursor.style.left = e.pageX + "px";
    });
  }, []);

  return (
    <div className="custom-cursor absolute bg-black h-[20px] translate-x-[-50%] translate-y-[-50%] w-[20px] z-[50] pointer-events-none"></div>
  );
}
