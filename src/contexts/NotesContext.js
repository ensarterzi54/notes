import { createContext, useContext, useState } from "react"
import { database } from "../firebase/firebaseConfig"
import { child, get, ref, set } from "firebase/database"
import { AuthContext } from "./AuthContext";
import { uid } from 'react-uid';

export const NotesContext = createContext(null)

const NotesContextProvider = ({ children }) => {
    const [notes, setNotes] = useState("")
    const { user } = useContext(AuthContext)

    const addNote = (title, note) => {
        set(ref(database, `${user.user.displayName}/${user.user.uid}/notes/5`), {
            title: title,
            note: note
        });
    }
    
    const getNotes = () => {
        get(child(database, `${user.user.displayName}/${user.user.uid}/notes`)).then((snapshot) => {
            if (snapshot.exists()) {
              console.log(snapshot.val());
            } else {
              console.log("No data available");
            }
          }).catch((error) => {
            console.error(error);
          });
    }

    return (
        <NotesContext.Provider value={{ notes, addNote, getNotes }}>
            { children }
        </NotesContext.Provider>
    )
}

export default NotesContextProvider