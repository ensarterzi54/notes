import React, { useContext, useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import './Notes.css'
import { useNavigate } from "react-router-dom";
import { NotesContext } from '../../contexts/NotesContext';
import { AuthContext } from '../../contexts/AuthContext';
import { database } from '../../firebase/firebaseConfig';
import { onValue, ref } from 'firebase/database';
import { ThemeContext } from '../../contexts/ThemeContext';

const Notes = ({ setUpdateItemData }) => {

    const { user } = useContext(AuthContext)
    const { getData, removeNote } = useContext(NotesContext)
    const { bgColor } = useContext(ThemeContext)
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
      setUpdateItemData({})
    }

    useEffect(() => {
      const starCountRef = ref(database, 'users');
      onValue(starCountRef, (snapshot) => {
        const data = snapshot.val();
        get()
      });
      get()
    }, [user])

    return (
      <div className="col-md-6 mt-5 notes">
        <ul className="notesList">
          {
            datas ? datas.map((item, index) =>
              <li key={index} className="mt-2 mb-2">
                <div className="divInLi">
                  <div className="noteInfo">
                    <span>Başlık:</span> <p className={bgColor === "dark" ? "textWhite" : null }>{item.title}</p> - 
                    <span>Açıklama:</span> <p className={bgColor === "dark" ? "textWhite" : null }>{item.note}</p>
                  </div>
                  <div>
                    <button onClick={() => deleteNote(user.user.displayName, user.user.uid, item.noteId)} type="button" className="btn btn-outline-danger">SİL</button> -
                    <button type="button" className="btn btn-outline-primary" onClick={() => setUpdateItemData(item)}>GÜNCELLE</button>
                  </div>
                </div>
              </li>
            )
            :
            null
          }
        </ul>
      </div>
    )
}

export default Notes;