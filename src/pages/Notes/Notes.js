import React, { useContext, useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { notes } from '../../reducers/Note'
import { deleteNote } from '../../reducers/Note'
import './Notes.css'
import { useNavigate } from "react-router-dom";
import { NotesContext } from '../../contexts/NotesContext';
import { AuthContext } from '../../contexts/AuthContext';
const Notes = () => {
  const note = useSelector(notes);
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const { user } = useContext(AuthContext)
  const { getData } = useContext(NotesContext)

  const [datas, setDatas] = useState(null)

  const get = () => {
    getData(user).then(res => setDatas(res))
  }

  useEffect(() => {
    get()
  }, [user])

  const routeToUpdatedPage = (id) => {
    navigate(`/noteUpdate/${id}`);
  }

  return (
    <div className="col-md-6 mt-5 notes">
      <ul>
        { datas ? datas.map((item, index) => <li key={index} className="mt-2 mb-2">{item.title} - { item.note } <button type="button" className="btn btn-outline-primary">SİL</button> - <button type="button" className="btn btn-outline-primary">GÜNCELLE</button></li>) : null }
      </ul>
      <ul>
        {note && note.map((item, index) => <li key={index}>{ item.noteTitle } - { item.noteDescription } - <button onClick={() => dispatch(deleteNote({id: item.id}))}>Sil</button> <button onClick={() => routeToUpdatedPage(item.id)}>Güncelle</button></li>)}
      </ul>
    </div>
  )
}

export default Notes;