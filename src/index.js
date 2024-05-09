import React from 'react';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { router } from './router';
import { RouterProvider } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import "../src/firebase/firebaseConfig"
import './i18n';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
)

reportWebVitals()