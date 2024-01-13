import React from "react";
import arrowRight from "../../assets/arrow-right.svg";

export default function GetInTouch(props) {
  return (
    <button
      className={`${props.styles} flex items-center justify-center text-2xl -550:text-xl gap-4 text-grayBg bg-white rounded-[40px] p-2 pl-3`}
    >
      {props.phrase}
      <div
        className={`${props.arrStyles} flex p-3 -550:p-1 rounded-[50%] bg-grayBg`}
      >
        <img src={arrowRight} className="w-[30px]" alt="" />
      </div>
    </button>
  );
}
