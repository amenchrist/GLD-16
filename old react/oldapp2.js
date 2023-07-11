import './App.css'
import React,{ useState, useEffect } from 'react';
import DeleteButton from './DeleteButton';
import { timeStamp, countWords } from './functions';

function App() {

  const [ noteContent, setNoteContent ] = useState('')
  const [ count, setCount ] = useState(0);

  const [not, setNot] = useState({
    id: 0,
    timeStamp: '',
    content: ''
  })
  
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
    setNot(Object.assign({}, not, { content: e.target.value }))
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

  function setCurrentNote(id) {

    setNot(notes.find( e => e.id === id ));

  }

  const NoteComponent = ({note}) => {

    const {timeStamp, content, wordCount, id } = note
    return (
      <div style={{border: '1px solid', maxHeight: '300px', width: '200px', padding: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}} onClick={() => setCurrentNote(note.id)} >
          <h6>{timeStamp}</h6>
            <p>{content}</p>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
              <h6>{wordCount} Character(s)</h6>
              <DeleteButton notes={notes} note={note} deleteFunc={setNotes} />
            </div>
        </div>
    )
  }

  return (
    <>  
      <div style={{padding: '50px'}}>
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
