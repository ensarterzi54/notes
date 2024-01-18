import { createSlice } from '@reduxjs/toolkit'

export const noteSlice = createSlice({
  name: 'note',
  initialState: {
    value: []
  },
  reducers: {
    addNote: (state, payload) => {
      state.value = [...state.value, payload.payload ]
    },
    deleteNote: (state, payload) => {
      state.value = state.value.filter(item => item.noteTitle != payload.payload.noteTitle);
    }
  }
})

export const { addNote, deleteNote } = noteSlice.actions
export const notes = (state) => state.note.value
export default noteSlice.reducer