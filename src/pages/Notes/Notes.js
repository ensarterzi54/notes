import React, { useContext, useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import './Notes.css'
import { useNavigate } from "react-router-dom";
import { NotesContext } from '../../contexts/NotesContext';
import { AuthContext } from '../../contexts/AuthContext';
import { database } from '../../firebase/firebaseConfig';
import { onValue, ref } from 'firebase/database';
import { ThemeContext } from '../../contexts/ThemeContext';
import { PDFDownloadLink } from '@react-pdf/renderer';
import Pdf from "../../components/Pdf/Pdf"
import Button from '@mui/material/Button';
import { FileDownload } from "@mui/icons-material";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import sweetalert from '../../messageBox/sweetalert';
import { useTranslation } from 'react-i18next';

const Notes = ({ setUpdateItemData }) => {

    const { user } = useContext(AuthContext)
    const { getData, removeNote } = useContext(NotesContext)
    const { bgColor } = useContext(ThemeContext)
    const [datas, setDatas] = useState([])
    const { t, i18n } = useTranslation();

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
      } else {
        setDatas([])
      }
    }
    const deleteNote = async (name, userId, noteId) => {
      const result = await sweetalert.deleteConfirmation();
  
      if (result.isConfirmed) {
          await removeNote(name, userId, noteId);
          get();
          setUpdateItemData({});
          sweetalert.deleted()
      }
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
      <div className="col-md-6 mt-5 notes p-0">
        <ul className="notesList">
          {
            datas ? datas.map((item, index) =>
              <li key={index} className="mt-2 mb-2">
                <div className="divInLi">
                  
                  <div className="noteInfo">
                        <span>{t("Title")}:</span> <p className={bgColor === "dark" ? "textWhite" : null }>{ item.title.length > 20 ? `${item.title.slice(0,20)}...` : item.title }</p> - 
                        <span>{t("Note")}:</span> <p className={bgColor === "dark" ? "textWhite" : null }>{ item.note.length > 15 ? `${item.note.slice(0,15)}...` : item.note }</p>    
                  </div>
                  <div>
                    <PDFDownloadLink document={<Pdf title={item.title} note={item.note} />} fileName="somename18.pdf">
                      {
                        ({ blob, url, loading, error }) =>
                        <Button
                          className="mr-2"
                          variant="contained"
                          color="primary"
                          startIcon={<FileDownload />}>
                          Pdf
                        </Button>
                      }
                    </PDFDownloadLink>
                    <IconButton 
                      aria-label="delete" 
                      size="small" 
                      color="secondary"
                      onClick={() => deleteNote(user.user.displayName, user.user.uid, item.noteId)}>
                      <DeleteIcon />{t("Delete")}
                    </IconButton>
                    <button type="button" className="btn btn-outline-primary" onClick={() => setUpdateItemData(item)}>{t("Update")}</button>
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