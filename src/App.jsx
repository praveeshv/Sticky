import './App.css'
import { useState } from 'react'
import Notes from './components/notes'

function App() {
  const [notes, setNotes] = useState([])
  const [note,setNote]= useState("");

  return (
    <>
    <div>
      <input type="text" value={note} 
      onChange={(e)=>setNote(e.target.value)
        
      }/>
      <button
      onClick={() => {
      setNotes([...notes, {id: notes.length + 1, text:note}])
      setNote("");
      }}
      >
        Add Note</button>
    </div>
      <Notes notes={notes} setNotes={setNotes} />
    </>
  )
}

export default App
