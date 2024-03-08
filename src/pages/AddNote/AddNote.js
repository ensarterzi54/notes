import React, { useState } from 'react';
import styles from '../AddNote/AddNote.css'
import { useDispatch } from 'react-redux'
import { addNote } from '../../reducers/Note'
import { uid } from 'uid';
const AddNote = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch()

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addNote({id: uid(), noteTitle: title, noteDescription: description }))
  }
  
  return (
    <div className="addNote">
      <h2 className="addNoteTitle">Not Ekle</h2>
      <form className='formNote ml-5' onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Başlık:</label>
          <input
            className="titleInput"
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="description">İçerik:</label>
          <textarea
            className="txta"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button className="addNoteButton" type="submit" onClick={addNote}>
          Notu Kaydet
        </button>
      </form>
    </div>
  );
};

export default AddNote;