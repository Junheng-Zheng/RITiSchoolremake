"use client";
import React from "react";
import { useState } from "react";
import PeopleModal from "./peopleModal";
const PeopleGroups = ({ title, pepGroup }) => {
  const [search, setSearch] = useState("");
  const filteredsearch = pepGroup.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div className="flex gap-3 flex-col">
      <input
        onChange={(e) => setSearch(e.target.value)}
        className="p-3 w-full border border-gray-300 rounded-lg"
        placeholder={`Search ${title}`}
      ></input>
      {/* <h1>{title}</h1>
      <h3 className="bg-orange-500">{pepGroup.subTitle}</h3> */}
      {/*how do we get all of the people to show? */}
      <div className="flex h-[400px] overflow-y-scroll border border-gray-500 rounded-lg flex-col">
        {filteredsearch == 0 ? (
          <div className="w-full h-full flex items-center justify-center">
            <p className="text-gray-500 font-light m-0">No results found</p>
          </div>
        ) : (
          filteredsearch.map((p) => (
            <div className="transition-all duration-150 w-full border-b border-gray-300 p-3 h-fit py-2 flex gap-2 hover:rounded-lg items-center hover:!p-5">
              <img
                className="w-[50px] h-[50px] object-cover rounded-full"
                src={p.imagePath} /*alt={p.name}*/
              />
              <div className="flex w-full justify-between">
                <p className="m-0 text-lg">{p.name}</p>
                <PeopleModal prop={p} />
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default PeopleGroups;
