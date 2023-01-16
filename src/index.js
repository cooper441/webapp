import App from "./App";
import "./styles.css";
import React from "react";
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import ReactDOM from "react-dom";
reportWebVitals();


ReactDOM.render((
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
    ), document.getElementById('root')
);