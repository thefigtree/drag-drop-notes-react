import { fakeData as notes } from "../assets/fakeData";
import NoteCard from "../components/NoteCard";

const NotesPage = () => {
  return (
    <div>
      {notes.map((note) => (
        <NoteCard key={note.$id} note={note}></NoteCard>
      ))}
    </div>
  );
};
export default NotesPage;
