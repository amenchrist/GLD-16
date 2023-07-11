import React from "react";
import './NoteCard.css'
import DeleteButton from "../DeleteButton";


function NoteCard({note, notes, setNotes, setCurrentNote}) {
  

return (
    <div className="card" onClick={() => setCurrentNote(note.id)} >     
        <h6>{note.timeStamp}</h6>
        <br></br>
        <div className="card-content-bottom">
            <p>{note.content}</p>
        </div>
        <br></br>
        <br></br>
        <div className="card-content-bottom">
          <p>Characters: {note.wordCount}</p>
          <DeleteButton notes={notes} note={note} deleteFunc={setNotes} />
        </div>
    </div>
    );
  }

  export default NoteCard;