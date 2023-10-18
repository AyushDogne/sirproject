import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { logDOM } from '@testing-library/react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App event={()=>
    {
      
      alert("hello i am ayush");
      console.log("ayush dogne here");

    }
    }/>
  </React.StrictMode>
);


reportWebVitals();
