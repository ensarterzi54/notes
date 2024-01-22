import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import NoteUpdate from "./pages/NoteUpdate"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/noteUpdate/:id",
    element: <NoteUpdate />
  }
])