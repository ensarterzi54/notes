import { getAuth, signInWithPopup, signOut } from "firebase/auth";
import { provider } from "./firebaseConfig";

const auth = getAuth();

export const login = async () => {
    console.log("sdsf")
    const result = await signInWithPopup(auth, provider);
    console.log("result: ", result);
    return result;
}

export const logout = async () => {
    signOut(auth).then(() => {
        console.log("logout auth: ", auth);
      }).catch((error) => {
        console.log("error: ", error);
        // An error happened.
      });
}