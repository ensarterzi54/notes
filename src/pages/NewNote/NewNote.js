import React, { useContext, useEffect, useState } from 'react'
import { NotesContext } from '../../contexts/NotesContext';
import { useForm } from 'react-hook-form';
import "../NewNote/NewNote.css"
import { ThemeContext } from '../../contexts/ThemeContext';
const NewNote = ({ selectedItem, setUpdateItemData }) => {
    const [btnControl, setBtnControl] = useState(true)
    const { addNote, updateNote } = useContext(NotesContext)
    const { bgColor } = useContext(ThemeContext)

    const { register, handleSubmit, watch, reset, setValue, formState: { errors } } = useForm()

    const onSubmit = async (data) => {
        await addNote(data.Title, data.Note)
        reset()
    }

    useEffect(() => {
        console.log("newNote selectedItem: ",selectedItem)
        if (selectedItem.note && selectedItem.title) {
            setValue("Title", selectedItem.title);
            setValue("Note", selectedItem.note);
            setBtnControl(false)
        } else {
            setValue("Title","");
            setValue("Note", "");
            setBtnControl(true)
        }
    }, [selectedItem]);

    const update = () => {
        updateNote(selectedItem.userId, selectedItem.noteId, { 
            date: selectedItem.date, 
            title: watch("Title"), 
            note: watch("Note"), 
            userId: selectedItem.userId 
        })
        setValue("Title","");
        setValue("Note", "");
    }

    return (
        <div className="col-md-6 mt-5 p-0">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <label className={bgColor === "dark" ? "textWhite" : undefined} htmlFor="title">Başlık Girin</label>
                    <input
                        type="text"
                        className="form-control noteInput"
                        id="title"
                        {...register("Title", {
                            required: { value: true, message: "Doldurulması zorunlu alan" },
                            minLength: { value: 2, message: "En az 2 karakter girebilirsiniz." },
                            maxLength: { value: 255, message: "En fazla 255 karakter girebilirsiniz." }
                        })}
                    />
                    {errors.Title && <span className="text-danger">{errors.Title.message}</span>}
                </div>

                <div className="form-group">
                    <label className={bgColor === "dark" ? "textWhite" : undefined} htmlFor="note">Not</label>
                    <textarea
                        className="form-control"
                        id="note"
                        rows="10"
                        {...register("Note", {
                            required: { value: true, message: "Doldurulması zorunlu alan" },
                            minLength: { value: 2, message: "En az 2 karakter girebilirsiniz." },
                            maxLength: { value: 255, message: "En fazla 255 karakter girebilirsiniz." }
                        })}
                    />
                    {errors.Note && <span className="text-danger">{errors.Note.message}</span>}
                </div>
                <div className="buttonDiv">
                    {
                        btnControl ?
                            <button type="submit" className="btn btn-outline-success">Notu Ekle</button>
                        :
                            <>
                                <button type="button" className="btn btn-outline-success" onClick={() => update()}>Değişiklikleri kaydet</button>
                                <button type="button" className="btn btn-outline-primary" onClick={() => setUpdateItemData({})}>Yeni not oluştur</button>
                            </>
                    }
                    
                </div>
            </form>
        </div>
    )
}

export default NewNote