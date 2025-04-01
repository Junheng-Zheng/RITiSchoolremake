import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-col w-full bg-black text-white">
      <div className="flex flex-col gap-2 w-full items-center justify-center p-3 border-b border-gray-700">
        <p className="m-0">RIT iSchool</p>
        <p className="m-0 text-sm">Created by Junheng Zheng</p>
      </div>
      <div className="p-3 text-center">
        <p className="m-0 text-sm">
          Copyright © Rochester Institute of Technology. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
