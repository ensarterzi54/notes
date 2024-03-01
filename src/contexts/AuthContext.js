import { getAuth, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { provider } from "../firebase/firebaseConfig"
export const AuthContext = createContext(null)

const auth = getAuth();

const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null)

    useEffect(() => {
        console.log("local storage user", JSON.parse(localStorage.getItem("user")))
    }, [user])

    const login = async () => {
        console.log("authcontext")
        const result = await signInWithPopup(auth, provider);
        setUser(result)
        localStorage.setItem("user", JSON.stringify(result));
    }

    const logout = async () => {
        signOut(auth).then(() => {
            console.log("logout auth: ", auth);
            setUser(null)
            localStorage.removeItem('user')
          }).catch((error) => {
            console.log("error: ", error);
            // An error happened.
          });
    }
    
    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            { children }
        </AuthContext.Provider>
    )
}
export default AuthContextProvider