import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { notes } from '../reducers/Note'
import { deleteNote } from '../reducers/Note'
import styles from '../Notes.module.css'
const Notes = () => {
  const note = useSelector(notes);
  const dispatch = useDispatch()

  useEffect(()=>{
    console.log(note)
  }, [note])

  return (
    <div className={styles.notes}>
      <ul>
        {note && note.map((item, index) => <li key={index}>{ item.noteTitle } - { item.noteDescription } - <button onClick={() => dispatch(deleteNote({noteTitle: item.noteTitle}))}>Sil</button></li>)}
      </ul>
    </div>
  )
}

export default Notes;