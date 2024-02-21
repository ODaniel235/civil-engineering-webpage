import CardCheck from "./Card";
import { v4 as uuidv4 } from "uuid";
import Notes from "./NoteArray";

function NotePage() {
  return (
    <>
      <main className="w-screen p-8 flex flex-row gap-4 flex-wrap justify-center">
        {Notes.map((note) => (
          <CardCheck
            key={uuidv4()}
            img={note.img}
            title={note.name}
            info={note.info}
          />
        ))}
      </main>
    </>
  );
}

export default NotePage;
