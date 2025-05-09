import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

//modal component
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "white",
  boxShadow: 24,
  width: "400px",
};

export default function PeopleModal({ prop, handleOpen }) {
  const [open, setOpen] = React.useState(false);
  handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <p
        onClick={handleOpen}
        className="cursor-pointer bg-gray-100 p-2  rounded-lg m-0 py-.5 border-b border-gray-400"
      >
        View
      </p>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          className="rounded-lg overflow-hidden m-0 p-0 flex w-fullitems-center"
          sx={style}
        >
          <div className="!bg-orange-500 flex items-center justify-center">
            <img
              className="w-[80px] border-4 border-white translate-x-1/2 h-[80px] object-cover rounded-full"
              src={prop.imagePath}
            />
          </div>
          <div className="p-2 translate-x-[40px] flex-grow flex flex-col gap-0">
            <p className="m-0 text-[21px] font-semibold uppercase">
              {prop.name}
            </p>
            <p className="m-0 text-[16px]">{prop.title}</p>
            <p className="m-0 text-[16px]">{prop.tagline}</p>
            <p className="m-0 text-[14px]">
              Interest Area | {prop.interestArea}
            </p>
            <hr className="my-2"></hr>
            <p className="m-0 text-gray-700 text-[14px]">
              <strong>Office | </strong>
              {prop.office}
            </p>
            <p className="m-0 text-gray-700 text-[14px]">
              <strong>Phone | </strong>
              {prop.phone}
            </p>
            <p className="m-0 text-gray-700 text-[14px]">
              <strong>Email | </strong>
              {prop.email}
            </p>
            <p className="m-0 text-gray-700 text-[14px]">
              <strong>Website| </strong>
              {prop.website}
            </p>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
