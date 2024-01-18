import './App.css';
import AddNote from './pages/AddNote';
import Notes from './pages/Notes';

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 mt-5">
          <AddNote />
        </div>
        <div className="col-md-6 mt-5">
          Notlar
          <Notes />
        </div>
      </div>
    </div>
  );
}

export default App;
