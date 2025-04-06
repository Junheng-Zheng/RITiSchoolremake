import Accordion from "react-bootstrap/Accordion";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import AccordianCustom from "../accordians/Accordiancustom";
import { useState, useEffect } from "react";

function DegreeAcc({ degreeObj, courseObj }) {
  const [modalView, setModalView] = useState(false);
  const [currentModelTitle, setCurrentModalTitle] = useState();
  const [currentModelDesc, setCurrentModalDesc] = useState();
  const modalCustom = () => {
    let course;
    if (courseObj && Array.isArray(courseObj)) {
      course = courseObj.find((doc) => doc.courseID === currentModelTitle);
      console.log("Course found:", course);
    }
    return (
      <div className="w-full h-full fixed top-0 flex justify-center items-center left-0 bg-black/10 z-1000">
        <button
          onClick={() => setModalView(false)}
          className="w-full h-full fixed top-0 left-0 bg-black/5 z-1000"
        />
        <div className="z-2000 w-[500px] shadow-lg flex flex-col gap-2  p-3 h-fit bg-white rounded-lg">
          <div className="w-full flex justify-between items-center">
            <p className="m-0 font-bold text-[21px] px-1 border-l-3 border-orange-500">
              {currentModelTitle}
            </p>
            <button
              onClick={() => setModalView(false)}
              className="text-sm py-2 px-3 border !border-orange-500 text-orange-500 !rounded-full hover:bg-orange-500 hover:text-white transition-all duration-200"
            >
              Close
            </button>
          </div>
          <p>{course.description}</p>
        </div>
      </div>
    );
  };
  return (
    <div>
      {modalView && modalCustom()}
      {degreeObj?.map((p, index) => (
        <AccordianCustom
          key={index}
          title={p.title || p.degreeName}
          body={[
            p.description,
            p.concentrations && (
              <p className="m-0 my-3 font-semibold px-2 border-l-3 border-orange-500 text-[18px]">
                Concentrations
              </p>
            ),
            p.availableCertificates && (
              <p className="m-0 my-3 font-semibold px-2 border-l-3 border-orange-500 text-[18px]">
                Certificates
              </p>
            ),
            p.concentrations?.map((concentration) => (
              <p className="w-full m-0 border-b border-gray-300 py-3">
                {concentration}
              </p>
            )),
            p.availableCertificates?.map((concentration) => (
              <p className="w-full m-0 border-b border-gray-300 py-3">
                {concentration}
              </p>
            )),
            p.courses && (
              <div>
                <p className="m-0 my-3 font-semibold px-2 border-l-3 border-orange-500 text-[18px]">
                  Courses
                </p>
                <div className="flex w-full flex-wrap items-center gap-3 py-3 justify-start">
                  {p.courses.map((concentration, index) => (
                    <p
                      onClick={() => {
                        setCurrentModalTitle(concentration);
                        console.log("setting to", concentration.name);
                        setModalView(true);
                      }}
                      key={index}
                      className="cursor-pointer bg-orange-500 hover:!px-5 transition-all duration-300 text-[12px] px-3 text-white p-2 m-0 border-gray-300"
                    >
                      {concentration}
                    </p>
                  ))}
                </div>
                <p className="m-0 my-3 font-light text-gray-600 text-[12px]">
                  * {p.note}
                </p>
              </div>
            ),
          ]}
        />
      ))}
    </div>
  );
}

export default DegreeAcc;
