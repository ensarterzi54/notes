import React, { useContext, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { notes } from '../reducers/Note'
import { deleteNote, updateNote } from '../reducers/Note'
import styles from '../Notes.module.css'
import { useNavigate } from "react-router-dom";
import ColorContextProvider from '../contexts/ColorContext';
const Notes = () => {
  const theme = useContext(ColorContextProvider);
  console.log(theme)
  const note = useSelector(notes);
  const dispatch = useDispatch()
  const navigate = useNavigate();
  useEffect(()=>{
    console.log(note)
  }, [note])

  const routeToUpdatedPage = (id) => {
    navigate(`/noteUpdate/${id}`);
  }
  return (
    <div className={`${styles.notes} bg-${theme}`}>
      <ul>
        {note && note.map((item, index) => <li key={index}>{ item.noteTitle } - { item.noteDescription } - <button onClick={() => dispatch(deleteNote({id: item.id}))}>Sil</button> <button onClick={() => routeToUpdatedPage(item.id)}>Güncelle</button></li>)}
      </ul>
    </div>
  )
}

export default Notes;