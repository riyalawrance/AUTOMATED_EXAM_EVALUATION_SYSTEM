<<<<<<< HEAD
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
=======
<<<<<<< HEAD
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; 
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
=======
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
>>>>>>> 2c34cb418a135f9ea9c583845e39b137471ee355
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
<<<<<<< HEAD
=======
>>>>>>> f37cfedcc2d28f0907eae169eaa4a700de557ebb
>>>>>>> 2c34cb418a135f9ea9c583845e39b137471ee355
