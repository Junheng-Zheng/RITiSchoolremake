import React from "react";
import Gridtable from "./Gridtable";

const Employment = ({ employmentObj }) => {
  return (
    <div className="w-full gap-4 sm:!gap-7 flex flex-col justify-center">
      <h1 id="employment"> {employmentObj.introduction.content[0].title}</h1>
      <h2 className="px-2 border-l-3 border-orange-500 text-[21px] m-0 font-bold">
        {employmentObj.introduction.title}
      </h2>
      <p className="font-light m-0">
        {employmentObj.introduction.content[0].description}
      </p>
      <h2 className="px-2 border-l-3 border-orange-500 text-[21px] m-0 font-bold">
        {employmentObj.introduction.content[1].title}
      </h2>
      <p className="font-light m-0">
        {employmentObj.introduction.content[1].description}
      </p>
      <h2 className="px-2 border-l-3 border-orange-500 text-[21px] m-0 font-bold">
        {employmentObj.degreeStatistics.title}
      </h2>
      <div className="flex justify-between items-start gap-10">
        {employmentObj?.degreeStatistics?.statistics.map((p) => (
          <div className="w-full flex flex-col gap-1">
            <p className="text-[32px] m-0 text-orange-500">{p.value}</p>
            <p className="m-0 font-light text-sm">{p.description}</p>
          </div>
        ))}
      </div>
      <h2 className="px-2 border-l-3 border-orange-500 text-[21px] m-0 font-bold">
        {employmentObj.careers.title}
      </h2>
      <div className="flex flex-wrap items-center gap-3">
        {employmentObj?.careers.careerNames.map((p) => (
          <div className="text-white px-3 py-2 bg-orange-500">
            <p className="m-0 text-[12px]">{p}</p>
          </div>
        ))}
      </div>
      <h2 className="px-2 border-l-3 border-orange-500 text-[21px] m-0 font-bold">
        {employmentObj.employers.title}
      </h2>
      <div className="flex flex-wrap items-center gap-3">
        {employmentObj?.employers.employerNames.map((p) => (
          <div className="text-white px-3 py-2 bg-orange-500">
            <p className="text-nowrap m-0 text-[12px]">{p}</p>
          </div>
        ))}
      </div>
      <Gridtable data={employmentObj} />
    </div>
  );
};

export default Employment;
