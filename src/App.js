import './App.css';
import NavBar from './components/NavBar/NavBar';
import ColorContext from './contexts/ColorContext';
import AddNote from './pages/AddNote/AddNote';
import Notes from './pages/Notes/Notes';
import React from 'react'
import AuthContextProvider from './contexts/AuthContext';
function App() {
  return (
    <div className="container">
      <div className="row">
        <AuthContextProvider>
          <NavBar />
        </AuthContextProvider>
      </div>
      <div className="row">
        <div className="col-md-6 mt-5">
          <AddNote />
        </div>
        <div className="col-md-6 mt-5">
          Notlar
          <ColorContext.Provider value={"primary"}>
            <Notes />
          </ColorContext.Provider>
        </div>
      </div>
    </div>
  );
}

export default App;
