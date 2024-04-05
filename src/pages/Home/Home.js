import React, { useContext, useState } from 'react'
import NavBar from '../../components/NavBar/NavBar';
import AddNote from '../AddNote/AddNote';
import Notes from '../Notes/Notes';
import AuthContextProvider from '../../contexts/AuthContext';
import NewNote from '../NewNote/NewNote';
import NotesContextProvider from '../../contexts/NotesContext';
import "./Home.css"
import { ThemeContext } from '../../contexts/ThemeContext';

const Home = () => {
    const [updateItemData, setUpdateItemData] = useState({})

    const { bgColor } = useContext(ThemeContext)
    console.log("bgColor",bgColor)
    console.log("update item data", updateItemData);
    return (
        <div className={`home bg-${bgColor}`}>
            <AuthContextProvider>
                <div className="row pt-5">
                    <NavBar />
                </div>
                <div className="row">
                    <NotesContextProvider>
                        {/* <AddNote /> */}
                        <NewNote selectedItem={updateItemData} setUpdateItemData={setUpdateItemData} />

                        <Notes setUpdateItemData={setUpdateItemData} />
                    </NotesContextProvider>
                </div>
            </AuthContextProvider>
        </div>
    )
}

export default Home