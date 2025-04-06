import Accordion from "react-bootstrap/Accordion";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import AccordianCustom from "../accordians/Accordiancustom";
import { useState } from "react";
import ModalCustom from "../modals/Modalcustom";
function DegreeAcc({ degreeObj, courseObj }) {
  const [modalView, setModalView] = useState(false);
  const [currentModelTitle, setCurrentModalTitle] = useState();
  return (
    <div>
      {modalView && (
        <ModalCustom
          currentModelTitle={currentModelTitle}
          courseObj={courseObj}
          closeModal={() => {
            setModalView(false);
          }}
        />
      )}
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
                        setModalView(true);
                      }}
                      key={index}
                      className="cursor-pointer bg-orange-500 hover:!px-5 transition-all duration-300 text-[12px] px-3 text-white p-2 m-0 border-gray-300"
                    >
                      {concentration}
                    </p>
                  ))}
                </div>
                {p.note && (
                  <p className="m-0 my-3 font-light text-gray-600 text-[12px]">
                    * {p.note}
                  </p>
                )}
              </div>
            ),
          ]}
        />
      ))}
    </div>
  );
}

export default DegreeAcc;
