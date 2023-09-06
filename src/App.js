import { useEffect, useState } from "react";
import uuid from "react-uuid";
import "./App.css";
import Main from "./Components/Main";
import Sidebar from "./Components/Sidebar";

function App() {
  const [notes, setNotes] = useState(
    localStorage.notes ? JSON.parse(localStorage.notes) : []
  );
  const [activeNote, setActiveNote] = useState(false);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const onAddNote = () => {
    const newNote = {
      id: uuid(),
      title: "Untitled Note",
      body: "",
      lastModified: Date.now(),
    };

    setNotes([newNote, ...notes]);
    setActiveNote(newNote.id);
  };
  
  // const showCreateGroupDialog=()=> {
  //   const dialog = document.createElement("div");
  //   dialog.className = "modal";
  //   dialog.innerHTML = `
  //     <h2>Create Notes Group</h2>
  //     <input type="text" placeholder="Title" />
  //     <input type="color" />
  //     <button>Create</button>
  //   `;

  //   document.body.appendChild(dialog);

  //   // Handle the click event on the "Create" button.
  //   dialog.querySelector("button").onclick = () => {
  //     // Get the title and color from the input fields.
  //     const title = dialog.querySelector("input[type='text']").value;
  //     const color = dialog.querySelector("input[type='color']").value;

  //     // Create a new group with the given title and color.
  //     // ...
  //   }

  const onDeleteNote = (noteId) => {
    setNotes(notes.filter(({ id }) => id !== noteId));
  };

  const onUpdateNote = (updatedNote) => {
    const updatedNotesArr = notes.map((note) => {
      if (note.id === updatedNote.id) {
        return updatedNote;
      }

      return note;
    });

    setNotes(updatedNotesArr);
  };

  const getActiveNote = () => {
    return notes.find(({ id }) => id === activeNote);
  };

  return (
    <div className="App">
      <Sidebar
        notes={notes}
        onAddNote={onAddNote}
        onDeleteNote={onDeleteNote}
        activeNote={activeNote}
        setActiveNote={setActiveNote}
      />
      
     <Main activeNote={getActiveNote()} onUpdateNote={onUpdateNote} />
    </div>
  );
}

export default App;