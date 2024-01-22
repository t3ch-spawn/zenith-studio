import React from "react";
import arrowRight from "../../assets/arrow-right.svg";

export default function GetInTouch(props) {
  return (
    <button
      className={`${props.styles} font-medium w-full max-w-[250px] -550:max-w-[200px] overflow-hidden flex items-center justify-center text-2xl -550:text-xl gap-4 text-grayBg bg-white rounded-[40px] p-2 pl-3`}
    >
      <p className="get-in-touch_phrase relative left-0">{props.phrase}</p>
      <div
        className={`arrow-right  ${props.arrStyles} flex p-3 -550:p-1 rounded-[50%] bg-grayBg`}
      >
        <img src={arrowRight} className="w-[30px]" alt="" />
      </div>
    </button>
  );
}
