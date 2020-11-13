import React from 'react';
import {
  BrowserRouter, Switch, Route,
} from 'react-router-dom';
import {
  Todos,
  CreateTodo,
} from '../pages';

const Router = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" isPrivate={false}>
          <Todos />
        </Route>
        <Route path="/history" isPrivate={false}>
          <CreateTodo />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
