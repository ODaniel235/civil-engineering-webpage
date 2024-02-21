/* import { v4 as uuidv4 } from "uuid";
import Notes from "./NoteArray";
export default function NotePage() {
  return (
    <>
      <main className=" h-screen py-24 w-screen flex flex-wrap px-5  justify-center">
        <div className="w-3/4 m-auto">
          {Notes.map((note) => (
            <div
              key={uuidv4()}
              className="bg-white h-[450px] text-black font-['Poppins'] rounded-xl"
            >
              <div className="rounded-t-xl bg-indigo-500 flex justify-center items-center">
                <img
                  src="unport(2)logo.png"
                  alt=""
                  className=" h-44 w-44 rounded-full"
                />
              </div>

              <div className="flex flex-col justify-center items-center gap-4 p-4">
                <p className="text-xl font-semibold">{note.name}</p>
                <p>{note.info}</p>
                <button className="bg-indigo-500 text-white text-lg px-8 py-1 rounded-xl">
                  Check Note
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
 */

import CardCheck from "./Card";
import ModalButton from "./Modal";
import { v4 as uuidv4 } from "uuid";
import Notes from "./NoteArray";

function NotePage() {
  return (
    <>
      <main className="w-screen p-8 flex flex-row gap-4 flex-wrap justify-center">
        {Notes.map((note) => (
          <CardCheck key={uuidv4()} img={note.img} title={note.name} info={note.info} />
        ))}
      </main>
    </>
  );
}

export default NotePage;
