import React from "react";

const ModalCustom = ({ currentModelTitle, courseObj, closeModal }) => {
  let course;
  if (courseObj && Array.isArray(courseObj)) {
    course = courseObj.find((doc) => doc.courseID === currentModelTitle);
    console.log("Course found:", course);
  }
  return (
    <div className="w-full h-full fixed top-0 flex justify-center items-center left-0 bg-black/10 z-1000">
      <button
        onClick={closeModal}
        className="w-full h-full fixed top-0 left-0 bg-black/5 z-1000"
      />
      <div className="z-2000 w-[500px] shadow-lg flex flex-col gap-2  p-3 h-fit bg-white rounded-lg">
        <div className="w-full flex justify-between items-center">
          <p className="m-0 font-bold text-[21px] px-1 border-l-3 border-orange-500">
            {currentModelTitle}
          </p>
          <button
            onClick={closeModal}
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

export default ModalCustom;
