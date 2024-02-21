import CardCheck from "./Card";
import { v4 as uuidv4 } from "uuid";
import Notes from "./NoteArray";
import EachNoteMatch from "./EachNote";
import { useState } from "react";

function NotePage() {
  const [iterator, setIterator] = useState(0);
  const findNote = (e) => {
    for (let i = 0; i < EachNoteMatch.length; i++) {
      if (EachNoteMatch[i].title == e.target.textContent) {
        setIterator(i);
        console.log("Yes");
      } else {
        console.log("No");
      }
    }
  };
  return (
    <>
      <main className="w-screen p-8 flex flex-row gap-4 flex-wrap justify-center">
        {Notes.map((note) => (
          <CardCheck
            key={uuidv4()}
            img={note.img}
            title={note.name}
            info={note.info}
            findNote={findNote}
            iterate={iterator}
          />
        ))}
      </main>
    </>
  );
}

export default NotePage;
