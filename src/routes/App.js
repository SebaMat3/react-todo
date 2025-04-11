//src/App/index.js
import './App.css';
import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { HomePage } from './home/HomePage.jsx';
import { NewTodoPage } from './new/NewTodoPage';
import { EditTodoPage } from './edit/EditTodoPage';

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/new">
          <NewTodoPage />
        </Route>
        <Route path="/edit/:id">
          <EditTodoPage />
        </Route>
        <Route path="/search/:value">
          <HomePage />
        </Route>
        <Route path="*">
          <p> Not Found :c </p>
        </Route>
      </Switch>
    </HashRouter>
  );
}

export { App };
