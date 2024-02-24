import TimetableModal from "./Timetable";
import Button from "react-bootstrap/esm/Button";
import React from "react";

export default function Infos() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
      <main className="w-screen h-screen flex flex-col items-center p-4 flex-shrink border-2">
        <TimetableModal />
      </main>
    </>
  );
}
