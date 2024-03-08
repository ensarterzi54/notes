import React from 'react'
import NavBar from '../../components/NavBar/NavBar';
import AddNote from '../AddNote/AddNote';
import Notes from '../Notes/Notes';
import AuthContextProvider from '../../contexts/AuthContext';
import NewNote from '../NewNote/NewNote';
import NotesContextProvider from '../../contexts/NotesContext';

const Home = () => {
  return (
    <div>
        <AuthContextProvider>
            <div className="row mt-5">
                <NavBar />
            </div>
            <div className="row">
                <NotesContextProvider>
                    {/* <AddNote /> */}
                    <NewNote />

                    <Notes />
                </NotesContextProvider>
            </div>
        </AuthContextProvider>
    </div>
  )
}

export default Home