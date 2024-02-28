import SwiperMap from "./Swiper";
import TimetableModal from "./Timetable";
import React from "react";

export default function Infos(props) {
  return (
    <>
      <main className="w-screen h-screen flex flex-col items-center p-4 flex-shrink border-2">
        <TimetableModal />
        <SwiperMap exclude={props.exclude} />
      </main>
    </>
  );
}
