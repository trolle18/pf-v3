import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import './scss/index.scss';
import App from './App';
import Nav from './components/Nav';
import Footer from './components/Footer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Nav/>
            <App /> 
            <Footer/>
        </BrowserRouter>
    </React.StrictMode>
);

