import React from "react";
import PeopleTabs from "./PeopleTabs";

const People = ({ peopleObj }) => {
  return (
    <div className="w-full gap-4 sm:!gap-7 flex flex-col justify-center">
      <h1 id="people">People</h1>
      <PeopleTabs data={peopleObj} />
    </div>
  );
};

export default People;
