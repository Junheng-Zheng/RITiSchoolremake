import React from "react";
import DegreeAcc from "./degreeComponents/DegreeAcc";

//minors section
const Minors = ({ minorObj, courseObj }) => {
  return (
    <div className="w-full gap-4 sm:!gap-7 flex flex-col justify-center">
      <h1 id="minors">Minors</h1>
      <h2 className="px-2 border-l-3 border-orange-500 m-0 text-[20px]">
        Undergraduate Minors
      </h2>
      {/* //passes through to custom modal for courses information */}
      <DegreeAcc degreeObj={minorObj.UgMinors} courseObj={courseObj} />
    </div>
  );
};

export default Minors;
