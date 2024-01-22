import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { notes, updateNote } from '../reducers/Note'
import { useParams } from 'react-router-dom';
const NoteUpdate = () => {
    let { id } = useParams();
    const note = useSelector(notes);
    const [selectedNote, setSelectedNote] = useState(null);
    const dispatch = useDispatch()

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(updateNote({id: id, noteTitle: title, noteDescription: description }))
    }

    
    useEffect(() => {
        const data = note.find(item => item.id == id)

        setSelectedNote(data)
    }, [note])

    useEffect(() => {
        if (selectedNote !== null) {
            setTitle(selectedNote.noteTitle);
            setDescription(selectedNote.noteDescription);
        }
    }, [selectedNote]);

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Başlık
                    <input 
                        type="text" 
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </label>
                <label>İçerik
                    <input 
                        type="text" 
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </label>
                <input type="submit" />
            </form>
        </div>
    )
}

export default NoteUpdate