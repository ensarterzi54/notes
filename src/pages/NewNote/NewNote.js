import React, { useContext, useState } from 'react'
import { NotesContext } from '../../contexts/NotesContext';

const NewNote = () => {
    const [title, setTitle] = useState("")
    const [note, setNote] = useState("")
    const { addNote } = useContext(NotesContext)

    const handleSubmit = (event) => {
        event.preventDefault();
        addNote(title, note)
    }

    return (
        <div className="col-md-6 mt-5 p-0">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="title">Başlık Girin</label>
                    <input type="text" className="form-control" id="title" value={title} onChange={e => setTitle(e.target.value)} />
                </div>

                <div className="form-group">
                    <label htmlFor="note">Not</label>
                    <textarea className="form-control" id="note" rows="10" value={note} onChange={e => setNote(e.target.value)}></textarea>
                </div>

                <button type="submit">Ekle</button>
            </form>
        </div>
    )
}

export default NewNote