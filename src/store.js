import { configureStore } from '@reduxjs/toolkit'
import noteReducer from '../src/reducers/Note'

export default configureStore({
  reducer: {
    note: noteReducer,
  },
})