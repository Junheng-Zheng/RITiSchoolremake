import React from "react";
import Gridtable from "./Gridtable";

const Employment = ({ employmentObj }) => {
  return (
    <div className="w-full gap-4 sm:!gap-7 flex flex-col justify-center">
      <h1 id="employment">Employment</h1>
      <h2 className="px-2 border-l-3 border-orange-500 text-[21px] m-0 font-bold">
        Academic excellence equals career performance
      </h2>
      <p className="text-gray-600 font-light m-0">
        iSchool graduates are heavily sought after by the professional tech
        industry. This is by design. We’ve been building relationships with
        employers for over 2 decades by continuously producing high caliber
        graduates. RIT’s reputation extends beyond Rochester, with 95% of our
        students landing a job within the first 6 months after graduation. It’s
        not uncommon for students to have offers before they even leave RIT.
      </p>
      <h2 className="px-2 border-l-3 border-orange-500 text-[21px] m-0 font-bold">
        Cooperative Education
      </h2>
      <p className="text-gray-600 font-light m-0">
        Cooperative education experiences, or co-ops, are an opportunity for
        students to build on their classroom skills in a real world environment.
        Co-ops are more than just an internship. Students get paid to work
        alongside industry professionals in leading tech companies, learning on
        the job and assisting with actual company projects. All undergraduate
        students are required to take 2 co-ops prior to graduation. Students
        typically take a co-op during their sophomore or junior year. For more
        information about co-ops, including course prerequisites and how to
        enroll in a co-op, please refer to our resources page.
      </p>
      <div className="flex justify-between items-start gap-10">
        <div className="w-full flex flex-col gap-1">
          <p className="text-[32px] m-0 text-orange-500">$80,000</p>
          <p className="m-0 font-light text-sm">
            Average salary with one of our degrees (glassdoor.com)
          </p>
        </div>
        <div className="w-full flex flex-col gap-1">
          <p className="text-[32px] m-0 text-orange-500">36th</p>
          <p className="m-0 font-light text-sm">
            Rank among the Top 50 Best Computing Colleges in the U.S.
            (businessinsider.com)
          </p>
        </div>
        <div className="w-full flex flex-col gap-1">
          <p className="text-[32px] m-0 text-orange-500">35</p>
          <p className="m-0 font-light text-sm">
            Percent of all of the web traffic used by mobile devices in the U.S.
            (thenextweb.com)
          </p>
        </div>
        <div className="w-full flex flex-col gap-1">
          <p className="text-[32px] m-0 text-orange-500">1.11 Billion GB</p>
          <p className="m-0 font-light text-sm">
            Information in the form of internet traffic in 24 hours
            (mbaonline.com)
          </p>
        </div>
      </div>
      <h2 className="px-2 border-l-3 border-orange-500 text-[21px] m-0 font-bold">
        Careers
      </h2>
      <div className="flex items-center gap-3">
        <div className="text-white px-3 py-2 bg-orange-500">
          <p className="m-0 text-sm">RIT Libraries</p>
        </div>
        <div className="text-white px-3 py-2 bg-orange-500">
          <p className="m-0 text-sm">Parlec Inc</p>
        </div>
        <div className="text-white px-3 py-2 bg-orange-500">
          <p className="m-0 text-sm">TigerSafe</p>
        </div>
        <div className="text-white px-3 py-2 bg-orange-500">
          <p className="m-0 text-sm">CommVault</p>
        </div>
        <div className="text-white px-3 py-2 bg-orange-500">
          <p className="m-0 text-sm">Liberty Pump</p>
        </div>
        <div className="text-white px-3 py-2 bg-orange-500">
          <p className="m-0 text-sm">Alit</p>
        </div>
      </div>
      <h2 className="px-2 border-l-3 border-orange-500 text-[21px] m-0 font-bold">
        Employers
      </h2>
      <div className="flex items-center gap-3">
        <div className="text-white px-3 py-2 bg-orange-500">
          <p className="m-0 text-sm">RIT Libraries</p>
        </div>
        <div className="text-white px-3 py-2 bg-orange-500">
          <p className="m-0 text-sm">Parlec Inc</p>
        </div>
        <div className="text-white px-3 py-2 bg-orange-500">
          <p className="m-0 text-sm">TigerSafe</p>
        </div>
        <div className="text-white px-3 py-2 bg-orange-500">
          <p className="m-0 text-sm">CommVault</p>
        </div>
        <div className="text-white px-3 py-2 bg-orange-500">
          <p className="m-0 text-sm">Liberty Pump</p>
        </div>
        <div className="text-white px-3 py-2 bg-orange-500">
          <p className="m-0 text-sm">Alit</p>
        </div>
      </div>
      {/* <Tables /> */}
      {/* <BootAcc /> */}
      <h2 className="px-2 border-l-3 border-orange-500 text-[21px] m-0 font-bold">
        See the Statistics
      </h2>
      <Gridtable data={employmentObj} />
    </div>
  );
};

export default Employment;
