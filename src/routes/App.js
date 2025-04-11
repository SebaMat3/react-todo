//src/App/index.js
import './App.css';
import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from './home/HomePage.jsx';
import { NewTodoPage } from './new/NewTodoPage';
import { EditTodoPage } from './edit/EditTodoPage';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/new" element={<NewTodoPage/>} />
        <Route path="/edit/:id" element={<EditTodoPage/>} />
        <Route path="/search/:value" element={<HomePage/>} />
        <Route path="*" element={<p> Not Found :c </p>} />
      </Routes>
    </HashRouter>
  );
}

export {App};
