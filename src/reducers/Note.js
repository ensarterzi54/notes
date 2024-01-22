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
      state.value = state.value.filter(item => item.id != payload.payload.id);
    },
    updateNote: (state, payload) => {
      const noteIndex = state.value.findIndex(i => i.id === payload.payload.id);
      state.value.splice(noteIndex, 1, payload.payload);
    }
  }
})

export const { addNote, deleteNote, updateNote } = noteSlice.actions
export const notes = (state) => state.note.value
export default noteSlice.reducer