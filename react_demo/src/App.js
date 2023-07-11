import './App.css'
import React,{ useState } from 'react';


function App() {

  const [ commented, setCommented ] = useState(false)

  function submit() {
    setCommented(true)
  }

  function ThankYou () {
    return (
      <h1>Thank you for your Comment</h1>
    )
  }

  function CommentForm() {
    return (
      <>
      <div style={divStyle}>
        <h3>Leave a comment</h3>
        <input type='text' placeholder='First Name' />
        <br/>
        <input type='email' placeholder='Email' />
        <br/>
        <textarea placeholder='Comments' />
        <br/>
        <button onClick={submit}>Submit</button>
      </div> 
    </>
    )
  }

  const divStyle = {
    padding: '50px'

  }

  return (
    <>  
      <div style={divStyle}>
      {commented? <ThankYou /> : <CommentForm /> }
      </div> 
    </>
  );
}

export default App;
