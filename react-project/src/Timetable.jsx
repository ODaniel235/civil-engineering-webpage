import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useState } from "react";

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

function TimetableModal() {
  const [selectedDay, setSelectedDay] = useState(0);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const timetableData = [
    {
      day: "Monday",
      schedule: [
        {
          time: "8:00AM",
          subject: "General Studies 111.1",
          venue: "7 In One Auditorium",
        },
        { time: "10:00AM", subject: "Math101", venue: "College Hall" },
        { time: "12:00PM", subject: "Intro to Civil Eng..", venue: "LMB3" },
        { time: "4:00PM", subject: "Physics", venue: "MBA2" },
      ],
    },
    {
      day: "Tuesday",
      schedule: [
        { time: "8:00 AM", subject: "Chemistry", venue: "MBA2" },
        {
          time: "10:00 AM",
          subject: "General Studies 103",
          venue: "7 In One Auditorium",
        },
        { time: "12:00 PM", subject: "Math101", venue: "MBA2" },
        { time: "2:00 PM", subject: "Physics", venue: "MBA2" },
      ],
    },
    {
      day: "Wednesday",
      schedule: [
        { time: "8:00 AM", subject: "Math102", venue: "MBA2" },
        {
          time: "12:00P M",
          subject: "GST101",
          venue: "Eds/Met. Hall",
        },
        { time: "2:00 PM", subject: "General Studies 111.1", venue: "CBN" },
        { time: "4:00 PM", subject: "Sport", venue: "NIL" },
      ],
    },
    {
      day: "Thursday",
      schedule: [
        { time: "8:00 AM", subject: "Math101", venue: "College Hall" },
      ],
    },
    {
      day: "Friday",
      schedule: [
        {
          time: "8:00 AM",
          subject: "General Studies 111.1",
          venue: "7 In One Auditorium",
        },
        {
          time: "10:30 AM",
          subject: "Physics Practical (PHY102)",
          venue: "Physics Lab",
        },
        {
          time: "1:00 PM",
          subject: "Chemistry Practical (CHEM102)",
          venue: "Chemistry Lab",
        },
      ],
    },
    // Add data for other days
  ];
  const changeIndex = (indexSelected) => {
    setSelectedDay(indexSelected);
  };
  return (
    <>
      <div className=" p-2 text-center w-[90%] border-2 border-gray-800 rounded-2xl shadow-lg">
        <h1 className="text-3xl font-bold mb-6">Timetable</h1>
        <div className="flex justify-center flex-col gap-3 md:flex-row flex-wrap mb-2">
          {days.map((day, index) => (
            <>
              <button
                className={`px-4 py-2 mx-2 rounded-lg text-white font-semibold ${
                  index === selectedDay
                    ? "bg-gray-800"
                    : "bg-gray-600 hover:bg-gray-700"
                }`}
                onClick={handleShow}
                onMouseDown={() => changeIndex(index)}
              >
                {day}
              </button>
            </>
          ))}
        </div>

        <Offcanvas show={show} onHide={handleClose} backdrop="static">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>{timetableData[selectedDay].day}</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <table className=" w-full">
              <thead>
                <tr>
                  <th className="px-4 py-2 bg-gray-800 text-white hover:bg-gray-600 text-center">
                    Time
                  </th>
                  <th className="px-4 py-2 bg-gray-800 text-white hover:bg-gray-600 text-center">
                    Subject
                  </th>
                  <th className="px-4 py-2 bg-gray-800 text-white hover:bg-gray-600 text-center">
                    Venue
                  </th>
                </tr>
              </thead>
              <tbody>
                {timetableData[selectedDay].schedule.map((data, index) => (
                  <tr key={index} className=" transition-all hover:bg-gray-200">
                    <td className="border px-2 py-2">{data.time}</td>
                    <td className="border px-2py-2">{data.subject}</td>
                    <td className="border px-2 py-2">{data.venue}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </>
  );
}

export default TimetableModal;
