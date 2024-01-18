import React, { useState } from 'react';
import styles from '../AddNote.module.css'
import { useDispatch } from 'react-redux'
import { addNote } from '../reducers/Note'
const AddNote = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch()

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addNote({ noteTitle: title, noteDescription: description }))
  }
  
  return (
    <div className={styles.addNote}>
      <h2 className={styles.addNoteTitle}>Not Ekle</h2>
      <form onSubmit={handleSubmit} className='ml-5'>
        <div>
          <label htmlFor="title">Başlık:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="description">İçerik:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button type="submit" onClick={addNote}>
          Notu Kaydet
        </button>
      </form>
    </div>
  );
};

export default AddNote;