import Accordion from "react-bootstrap/Accordion";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import AccordianCustom from "../accordians/Accordiancustom";

function DegreeAcc({ degreeObj }) {
  return (
    <div>
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
          ]}
        />
      ))}
    </div>
  );
}

export default DegreeAcc;
