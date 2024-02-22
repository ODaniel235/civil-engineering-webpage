import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import BasicAccordion from "./Accordion";

function ModalForm(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <button
        className="p-2 px-3 bg-gray-800 text-white text-center rounded-2xl"
        onClick={handleShow}
      >
        View {props.title} Notes
      </button>

      <Offcanvas show={show} onHide={handleClose} backdrop="static">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>{props.title}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <BasicAccordion title={props.title}  />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default ModalForm;
