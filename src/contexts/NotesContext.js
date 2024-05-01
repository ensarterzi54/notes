import { createContext, useContext, useEffect, useState } from "react"
import { database } from "../firebase/firebaseConfig"
import { onValue, ref, set } from "firebase/database"
import { AuthContext } from "./AuthContext";
import { UniqueID } from "../functions";
export const NotesContext = createContext(null)

const NotesContextProvider = ({ children }) => {
    const { user } = useContext(AuthContext)
    const [notes, setNotes] = useState(null)

    const updateNote = (userID, noteID, payload) => {
        set(ref(database, `users/${userID}/notes/${noteID}`), payload)
        console.log("userID, noteID, payload",userID, noteID, payload)
    }

    const addNote = async (title, note) => {
        await fillNotes()
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
                    setNotes(data)
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

    const fillNotes = async () => {
        const res = await getData(user);
        setNotes(res ? res : null);
    }
    
    useEffect(() => {
        if(user) {
            const starCountRef = ref(database, `users/${user.user.uid}/notes`);
            onValue(starCountRef, (snapshot) => {
                const data = snapshot.val();
                console.log("hj",data)
                setNotes(data)
            });
        }
    }, [])
    return (
        <NotesContext.Provider value={{ addNote, getData, removeNote, updateNote }}>
            { children }
        </NotesContext.Provider>
    )
}

export default NotesContextProvider