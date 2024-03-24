import { createContext, useContext, useEffect, useState } from "react"
import { database } from "../firebase/firebaseConfig"
import { onValue, ref, set } from "firebase/database"
import { AuthContext } from "./AuthContext";
import { UniqueID } from "../functions";
export const NotesContext = createContext(null)

const NotesContextProvider = ({ children }) => {
    const { user } = useContext(AuthContext)
    const [notes, setNotes] = useState(null)

    const addNote = (title, note) => {
        const currentDate = new Date();
        const dateString = currentDate.toISOString();
        const users = {
            [`${user.user.uid}`]: {
                ID: user.user.uid,
                name: user.user.displayName,
                notes: {
                    ...notes,
                    [`${UniqueID()}`]: {
                        userId: user.user.uid,
                        date: dateString,
                        title,
                        note
                    }
                }
            }
        }
        
        set(ref(database, "users"), users)
        // set(ref(database, `${user.user.displayName}/${user.user.uid}/notes/0`), {
        //     title: title,
        //     note: note
        // });
    }
    const getData = (user) => {
        return new Promise((resolve, reject) => {
            if (user !== null) {
                console.log("ifede")
                const starCountRef = ref(database, `users/${user.user.uid}/notes`);
                onValue(starCountRef, (snapshot) => {
                const data = snapshot.val();
                    resolve(data)
                });
            } else {
                resolve(null)
            }
        })
    }
    const removeNote = (name, userID, noteID) => {
        console.log("id : ", noteID)
        set(ref(database, `users/${userID}/notes/${noteID}`), null)
    }
    useEffect(() => {
        getData(user).then((res) => {
            console.log("res context: ", res)

            setNotes(res ? res : null)
            
            console.log("notes: ", notes)
            
        })
    }, [])
    return (
        <NotesContext.Provider value={{ addNote, getData, removeNote }}>
            { children }
        </NotesContext.Provider>
    )
}

export default NotesContextProvider