import React, { useContext, useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { notes } from '../../reducers/Note'
import { deleteNote } from '../../reducers/Note'
import './Notes.css'
import { useNavigate } from "react-router-dom";
import { NotesContext } from '../../contexts/NotesContext';
import { AuthContext } from '../../contexts/AuthContext';
import { database } from '../../firebase/firebaseConfig';
import { onValue, ref } from 'firebase/database';

const Notes = ({ setUpdateItemData }) => {

  const note = useSelector(notes);
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const { user } = useContext(AuthContext)
  const { getData, removeNote } = useContext(NotesContext)

  const [datas, setDatas] = useState([])

  const get = () => {
    if (user) {
      getData(user).then(res => {
        const arr = []
        if (res) {
          for (const key of Object.keys(res)) {
            arr.push({
              noteId: key,   // bu yapı notes 'e özel yapıldı
              ...res[key],
            })
          }
        }
        arr.sort((a, b) => new Date(b.date) - new Date(a.date));
        setDatas(res ? arr : [])
      })
    }
  }

  const deleteNote = async (name, userId, noteId) => {
    await removeNote(name, userId, noteId)
    get()
  }

  const update = (title, note) => {

  }

  useEffect(() => {
    const starCountRef = ref(database, 'users');
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      get()
    });
    get()
  }, [user])

  const routeToUpdatedPage = (id) => {
    navigate(`/noteUpdate/${id}`);
  }

  return (
    <div className="col-md-6 mt-5 notes">
      <ul>
        {datas ? datas.map((item, index) =>
          <li key={index} className="mt-2 mb-2">{item.title} - {item.note}
            <button onClick={() => deleteNote(user.user.displayName, user.user.uid, item.noteId)} type="button" className="btn btn-outline-primary">SİL</button> -
            <button type="button" className="btn btn-outline-primary" onClick={() => setUpdateItemData(item)}>GÜNCELLE</button>
          </li>
        )
          :
          null}
      </ul>
      {/* <ul>
        {note && note.map((item, index) =>
          <li key={index}>{item.noteTitle} - {item.noteDescription} -
            <button onClick={() => dispatch(deleteNote({ id: item.id }))}>Sil</button>
            <button onClick={() => routeToUpdatedPage(item.id)}>Güncelle</button>
          </li>
        )}
      </ul> */}
    </div>
  )
}

export default Notes;