import Notes from "./NotesCover";
import { v4 as uuidv4 } from "uuid";
export default function NotePage() {
  return (
    <>
      <div className="flex gap-6 flex-wrap w-[100vw] justify-center px-4 items-center">
        {Notes.map((note) => (
          <div
            key={uuidv4()}
            className=" px-4 py-2 h-fit w-fit bg-white flex gap-2 flex-col items-center flex-wrap rounded-2xl shadow-lg  shadow-gray-800"
          >
            <img
              src="unport(2)logo.png"
              alt={note.name}
              height={120}
              width={120}
              className=" max-h-[80] max-w-[80]"
            />
            <h1 className="font-semibold font-['Poppins'] text-gray-800">
              {note.name}
            </h1>
            <p className="font-['Poppins']">{note.info}</p>
            <button className=" px-4 bg-gray-800 rounded-full py-2 text-white shadow-lg">
              <a href={note.href}>Check Notes</a>
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
