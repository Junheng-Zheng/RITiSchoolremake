import React from "react";
import { useState } from "react";

//custom accordian dropdown
const AccordianCustom = ({ title, body }) => {
  const [accordionState, setAccordianState] = useState(false);
  return (
    <div
      className={`flex hover:bg-gray-50 flex-col transition-all duration-400 ease-in-out border-orange-500 ${
        accordionState && `border-r-10 border-orange-500`
      }`}
    >
      <div
        onClick={() => setAccordianState(!accordionState)}
        className="border-b border-gray-300 cursor-pointer w-full py-[30px] px-10 flex items-center justify-between"
      >
        <p className="m-0 text-xl font-semibold">{title}</p>
        <button
          className={`w-[21px] z-100 h-[21px] transition-all duration-200 ${
            accordionState && "bg-orange-500 text-white hover:bg-orange-600"
          } !rounded-full leading-none flex items-center m-0 justify-center aspect-square border-2 !border-orange-500 text-orange-500 hover:!border-orange-600 hover:text-orange-600`}
        >
          {accordionState ? "-" : "+"}
        </button>
      </div>
      <div
        className={`px-10 py-10 font-light flex flex-col overflow-hidden 
    transition-transform duration-300
    ${
      accordionState
        ? "opacity-100 translate-y-0 visible"
        : "opacity-0 -translate-y-[50px] top-0 absolute"
    } flex items-center`}
      >
        {body.map((p, index) => {
          return (
            <div className="w-full h-fit" key={index}>
              <p className="w-full m-0">{p}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AccordianCustom;
