import './App.css'
import React,{ useState, useEffect } from 'react';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import DeleteButton from './DeleteButton';

function App() {

  const [ noteContent, setNoteContent ] = useState('')
  const [ count, setCount ] = useState(0)
  
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


  function handleChange(e){
    if (e.target.value.length > 140) return
    setNoteContent(e.target.value)
    setCount(countWords(e.target.value))
    console.log(noteContent, count)
  }

  function timeStamp() {
    const now = new Date();
    const day = now.getDate().toString().padStart(2, "0");
    const month = now.getMonth().toString().padStart(2, "0");
    const year = now.getFullYear();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");
    
    const currentTime = `Posted: ${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
    return currentTime;
  }

  function deleteNote(id){
    setNotes(notes.filter(e => e.id !== id))
  }

  function countWords(text) {
    return text.length;
}

  function submit() {
    if (noteContent.trim().length === 0) {
      window.alert("Sorry! No empty notes allowed.")
      return
    }
    
    let note = {
      id: new Date().getTime(),
      timeStamp: timeStamp(),
      content: noteContent,
      wordCount: countWords(noteContent)
    }
    setNotes([note, ...notes])
    setNoteContent('')
    setCount(0)
  
  }

  
  const divStyle = {
    padding: '50px'

  }

  const NoteComponent = ({note}) => {

    const {timeStamp, content, wordCount, id } = note
    return (
      <div style={{border: '1px solid', height: '200px', width: '200px', padding: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
          <h6>{timeStamp}</h6>
            <p>{content}</p>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
              <h6>{wordCount} Character(s)</h6>
              <DeleteOutlineIcon onClick={()=> deleteNote(id)} />
              <DeleteButton notes={notes} note={note} deleteFunc={setNotes} />
            </div>
        </div>
    )
  }

  return (
    <>  
      <div style={divStyle}>
        <h2>Team Notes App</h2>

        <textarea type='text' placeholder='Compose away...' value={noteContent} onChange={handleChange} rows={10} cols={40}/>
        <br/>
        <h6>{count}/140 Character(s)</h6>
        <button onClick={submit}>Submit</button>

        <hr/>
        <br/>
        <div style={{display: 'flex', flexWrap: 'wrap', gap: '10px', }}>   
          {notes.map((n,i) => <NoteComponent note={n} key={i} />)}
        </div>
        
      </div> 
    </>
  );
}

export default App;
