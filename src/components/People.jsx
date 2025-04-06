import React from "react";
import PeopleTabs from "./peopleComponents/PeopleTabs";

//people section
const People = ({ peopleObj }) => {
  return (
    <div className="w-full gap-4 sm:!gap-5 flex flex-col justify-center">
      <h1 className="m-0" id="people">
        {peopleObj.title}
      </h1>
      <p className="m-0 font-light" id="people">
        {peopleObj.subTitle}
      </p>
      <PeopleTabs data={peopleObj} />
    </div>
  );
};

export default People;
