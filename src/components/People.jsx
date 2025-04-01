import React from "react";
import PeopleTabs from "./PeopleTabs";

const People = ({ peopleObj }) => {
  return (
    <div>
      <h1 id="people">People</h1>
      <PeopleTabs data={peopleObj} />
    </div>
  );
};

export default People;
