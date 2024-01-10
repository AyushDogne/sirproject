import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Navigation from './peges/Navigation';
import Login from './peges/Login';
import Home from './peges/Home';
import Sign from './peges/Sign';
import { BrowserRouter, Route, Routes } from 'react-router-dom';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Navigation />}>
                <Route index element={<Home />} />
                <Route path='Login' element={<Login />} />
                <Route path='Sign' element={<Sign />} />
            </Route>
        </Routes>
        <App/>
    </BrowserRouter>);
reportWebVitals();
