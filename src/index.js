import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { logDOM } from '@testing-library/react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App color="red" clickEvent={()=>
    {
console.log("this is the button")
alert("this is button");
    }} />
  </React.StrictMode>
);


reportWebVitals();
