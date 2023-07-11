import React, {useState} from 'react';
import { countWords,timeStamp } from '../functions';

function NoteForm({notes, setNotes}) {

    const [ count, setCount ] = useState(0);

    const [note, setNote] = useState({
        id: 0,
        timeStamp: '',
        content: '',
        wordCount: 0
    })

    function handleChange(e){
        if (e.target.value.length > 140) return
        setCount(countWords(e.target.value))
        setNote(Object.assign({}, note, { content: e.target.value }))
    }

    function submit() {
        if (note.content.trim().length === 0) {
          window.alert("Sorry! No empty notes allowed.")
          return
        }
        
        let newNote = {
          id: new Date().getTime(),
          timeStamp: timeStamp(),
          content: note.content,
          wordCount: countWords(note.content)
        }
        setNotes([newNote, ...notes])
        setNote({
          id: 0,
          timeStamp: '',
          content: '',
          wordCount: 0
        })
        setCount(0)
      
      }

  return (
    <div className="card">
        <h1 className='title'>My Notes App</h1>       
        <br></br>
        <div className="card-content-bottom">
            <textarea id="content" name="content" placeholder="Compose Away...." value={note.content} onChange={handleChange} ></textarea>
        </div>
        <br></br>
        <div className="card-content-bottom">
            <h6>{count}/140 Character(s)</h6>
            <button id="submit-note" onClick={submit}>Submit</button>
        </div>
    </div>

  )
}

export default NoteForm