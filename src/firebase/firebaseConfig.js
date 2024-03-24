
import { initializeApp } from "firebase/app";
import { getDatabase, onValue, ref } from "firebase/database";
import { GoogleAuthProvider } from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyC_gD-_iDWXfOKWug0QQTbwj1vv2MkSa-4",
  authDomain: "project-notes-e9846.firebaseapp.com",
  databaseURL: "https://project-notes-e9846-default-rtdb.firebaseio.com",
  projectId: "project-notes-e9846",
  storageBucket: "project-notes-e9846.appspot.com",
  messagingSenderId: "42710637011",
  appId: "1:42710637011:web:91c303c569cbce44a03726"
};


const app = initializeApp(firebaseConfig);

export const database = getDatabase(app);

export const provider = new GoogleAuthProvider();