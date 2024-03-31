import React, { useState } from 'react'
import NavBar from '../../components/NavBar/NavBar';
import AddNote from '../AddNote/AddNote';
import Notes from '../Notes/Notes';
import AuthContextProvider from '../../contexts/AuthContext';
import NewNote from '../NewNote/NewNote';
import NotesContextProvider from '../../contexts/NotesContext';

const Home = () => {
    const [updateItemData, setUpdateItemData] = useState({})

    console.log("update item data", updateItemData);
    return (
        <div>
            <AuthContextProvider>
                <div className="row mt-5">
                    <NavBar />
                </div>
                <div className="row">
                    <NotesContextProvider>
                        {/* <AddNote /> */}
                        <NewNote selectedItem={updateItemData} />

                        <Notes setUpdateItemData={setUpdateItemData} />
                    </NotesContextProvider>
                </div>
            </AuthContextProvider>
        </div>
    )
}

export default Home