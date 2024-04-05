import './App.css';
import React from 'react'
import Home from './pages/Home/Home';
import ThemeContextProvider from './contexts/ThemeContext';
function App() {
  return (
    <div className="app">
      <ThemeContextProvider>
        <Home />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
