import './App.css'
import React,{ useState, useEffect } from 'react';
import DeleteButton from './Components/DeleteButton';
import { timeStamp, countWords } from './functions';
import NoteCard from './Components/NoteCard/NoteCard';
import NoteForm from './Components/NoteForm';

function App() {

  // const [ noteContent, setNoteContent ] = useState('')
  const [ count, setCount ] = useState(0);

  const [note, setNote] = useState({
    id: 0,
    timeStamp: '',
    content: '',
    wordCount: 0
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

  function setCurrentNote(id) {
    if(note.content.trim() !== ""){
      window.alert("This action will delete the current note!")
      return
    }

    setNote(notes.find( e => e.id === id ));
    setCount(notes.find( e => e.id === id ).wordCount)
    setNotes(notes.filter(e => e.id !== id))

  }

  const NoteComponent = ({note}) => {

    const {timeStamp, content, wordCount, id } = note
    return (
      <div style={{border: '1px solid', maxHeight: '300px', width: '200px', padding: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}} onClick={() => setCurrentNote(note.id)} >
          <h6>{timeStamp}</h6>
          <div>
            <p>{content}</p>
          </div>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
              <h6>{wordCount} Character(s)</h6>
              <DeleteButton notes={notes} note={note} deleteFunc={setNotes} />
            </div>
        </div>
    )
  }

  return (
    <>  
    <NoteForm />
      <div style={{padding: '50px'}}>
        <h1>Team Notes App</h1>

        <textarea style={{padding:'10px'}} type='text' placeholder='Compose away...' value={note.content} onChange={handleChange} rows={10} cols={40}/>
        <br/>
        <h6>{count}/140 Character(s)</h6>
        <button onClick={submit}>Submit</button>

        <hr/>
        <br/>
        <div style={{display: 'flex', flexWrap: 'wrap', gap: '10px', }}>   
          {notes.map((n,i) => <NoteComponent note={n} key={i} />)}
        </div>
        <div style={{display: 'flex', flexWrap: 'wrap', gap: '10px', }}>   
          {notes.map((n,i) => <NoteCard note={n} key={i} notes={notes} setNotes={setNotes} setCurrentNote={setCurrentNote}   />)}
        </div>

        
      </div> 
    </>
  );
}

export default App;
