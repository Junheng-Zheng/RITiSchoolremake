import React from "react";
import PeopleModal from "./peopleModal";
const PeopleGroups = ({title, pepGroup}) => {
  return (
    <div>
      <h1>{title}</h1>
      <h3>{pepGroup.subTitle}</h3>
      {/*how do we get all of the people to show? */}
      <div className="peopleList">
        {pepGroup.map((p) => (
          <div className="peopleListItem">
            <img src={p.imagePath} /*alt={p.name}*/ />
            <h3>{p.name}</h3>
            <PeopleModal prop = {p  }/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PeopleGroups;
