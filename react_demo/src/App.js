import './App.css'
import React,{ useState, useEffect } from 'react';
import DeleteButton from './Components/DeleteButton';
import { timeStamp, countWords } from './functions';
import NoteCard from './Components/NoteCard/NoteCard';
import NoteForm from './Components/NoteForm';

function App() {

  
  const [ notes, setNotes ] = useState(() => {
    const localList = localStorage.getItem("notes")

    if (localList === null ){
      return []
    } else {
      return JSON.parse(localList)
    }
  })

  useEffect(()=> {
    localStorage.setItem("notes", JSON.stringify(notes))
  }, [notes])




  function setCurrentNote(id) {
    // if(note.content.trim() !== ""){
    //   window.alert("This action will delete the current note!")
    //   return
    // }

    // setNote(notes.find( e => e.id === id ));
    // setCount(notes.find( e => e.id === id ).wordCount)
    // setNotes(notes.filter(e => e.id !== id))

  }


  return (
    <>
      <div className='app'>        
        <NoteForm notes={notes} setNotes={setNotes} />
       
        <div className='container'>   
          {notes.map((n,i) => <NoteCard note={n} key={i} notes={notes} setNotes={setNotes} setCurrentNote={setCurrentNote}   />)}
        </div>
      </div>
    </>
  );
}

export default App;
