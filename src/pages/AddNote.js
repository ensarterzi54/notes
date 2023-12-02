import React, { useState } from 'react';
import styles from '../AddNote.module.css'
const AddNote = () => {
  // State kullanarak başlık ve içerik bilgilerini tutuyoruz
  const [title, setTitle] = useState('');
  const [description, setIcerik] = useState('');

  // Notu kaydetme fonksiyonu
  const addNote = () => {
    // Burada notu kaydetme işlemleri yapılabilir
    console.log('Başlık:', title);
    console.log('İçerik:', description);

    // Kaydedildikten sonra başlık ve içeriği sıfırla
    setTitle('');
    setIcerik('');
  };

  return (
    <div className={styles.addNote}>
      <h2 className={styles.addNoteTitle}>Not Ekle</h2>
      <form>
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
            onChange={(e) => setIcerik(e.target.value)}
          />
        </div>
        <button type="button" onClick={addNote}>
          Notu Kaydet
        </button>
      </form>
    </div>
  );
};

export default AddNote;