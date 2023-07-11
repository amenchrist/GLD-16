import React from 'react';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

function DeleteButton({notes, note, deleteFunc }) {

    function deleteNote(id){
        deleteFunc(notes.filter(e => e.id !== id))
    }

  return (
    <DeleteOutlineIcon onClick={()=> deleteNote(note.id)} fontSize='large' />
  )
}

export default DeleteButton