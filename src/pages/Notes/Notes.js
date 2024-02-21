import React, { useContext, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { notes } from '../../reducers/Note'
import { deleteNote } from '../../reducers/Note'
import './Notes.css'
import { useNavigate } from "react-router-dom";
import ColorContext from '../../contexts/ColorContext';

const Notes = () => {
  const theme = useContext(ColorContext);
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
    <div className={`notes bg-${theme}`}>
      <ul>
        {note && note.map((item, index) => <li key={index}>{ item.noteTitle } - { item.noteDescription } - <button onClick={() => dispatch(deleteNote({id: item.id}))}>Sil</button> <button onClick={() => routeToUpdatedPage(item.id)}>Güncelle</button></li>)}
      </ul>
    </div>
  )
}

export default Notes;