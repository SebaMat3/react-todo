/* Main file where we import and render components */
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

//Creating the root element
const root = ReactDOM.createRoot(document.getElementById('root'));
//Rendering the base component into the root
root.render(<App />);
