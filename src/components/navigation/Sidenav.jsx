import React from "react";

const Sidenav = () => {
  return (
    <div className="flex-start w-fit hidden sm:flex flex-col gap-4 items-start text-[21px] font-semibold top-0">
      <a
        href="#about"
        className="!text-gray-600  !no-underline hover:!text-orange-500"
      >
        About
      </a>
      <a
        href="#degrees"
        className="!text-gray-600  !no-underline hover:!text-orange-500"
      >
        Degrees
      </a>
      <a
        href="#minors"
        className="!text-gray-600  !no-underline hover:!text-orange-500"
      >
        Minors
      </a>
      <a
        href="#employment"
        className="!text-gray-600  !no-underline hover:!text-orange-500"
      >
        Employment
      </a>
      <a
        href="#people"
        className="!text-gray-600  !no-underline hover:!text-orange-500"
      >
        People
      </a>
    </div>
  );
};

export default Sidenav;
