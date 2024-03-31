import React, { useContext, useState } from 'react'
import { NotesContext } from '../../contexts/NotesContext';
import { useForm } from 'react-hook-form';

const NewNote = ({ selectedItem }) => {

    console.log("sleeted item", selectedItem);

    const { addNote, getData } = useContext(NotesContext)

    const { register, handleSubmit, watch, reset, setValue, formState: { errors } } = useForm()

    const onSubmit = async (data) => {
        await addNote(data.Title, data.Note)
        reset()
    }

    if (selectedItem.note && selectedItem.title) {
        setValue("Title", selectedItem.title)
        setValue("Note", selectedItem.note)
    }

    // const handleSubmit = async (event) => {
    //     event.preventDefault();
    //     await addNote(title, note)
    //     setTitle("")
    //     setNote("")
    // }

    return (
        <div className="col-md-6 mt-5 p-0">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <label htmlFor="title">Başlık Girin</label>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        {...register("Title", {
                            required: { value: true, message: "Doldurulması zorunlu alan" },
                            minLength: { value: 2, message: "En az 2 karakter girebilirsiniz." },
                            maxLength: { value: 255, message: "En fazla 255 karakter girebilirsiniz." },
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "invalid email address"
                            }
                        })}
                    />
                    {errors.Title && <span className="text-danger">{errors.Title.message}</span>}
                </div>

                <div className="form-group">
                    <label htmlFor="note">Not</label>
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
                <button type="button">aaaa</button>
                <button type="submit">Ekle</button>
            </form>
        </div>
    )
}

export default NewNote