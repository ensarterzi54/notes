import { createContext, useContext } from "react"
import { database } from "../firebase/firebaseConfig"
import { onValue, ref, set } from "firebase/database"
import { AuthContext } from "./AuthContext";

export const NotesContext = createContext(null)

const NotesContextProvider = ({ children }) => {
    const { user } = useContext(AuthContext)

    const addNote = (title, note) => {
        set(ref(database, `${user.user.displayName}/${user.user.uid}/notes/5`), {
            title: title,
            note: note
        });
    }
    const getData = (user) => {
        return new Promise((resolve, reject) => {
            if (user !== null) {
                console.log("ifede")
                const starCountRef = ref(database, `/${user.user.displayName}/${user.user.uid}/notes`);
                onValue(starCountRef, (snapshot) => {
                const data = snapshot.val();
                    resolve(data)
                });
            } else {
                reject(new Error("User is null"));
            }
        })
    }
    return (
        <NotesContext.Provider value={{ addNote, getData }}>
            { children }
        </NotesContext.Provider>
    )
}

export default NotesContextProvider