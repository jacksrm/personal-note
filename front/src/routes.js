import React from 'react';
import { Route,BrowserRouter,Switch } from 'react-router-dom';

import Home from './pages/Home';
import ViewNote from './pages/ViewNote';
import CreateNote from './pages/CreateNote';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/create-note"  component={CreateNote} />
        <Route path="/view-note/:id"  component={ViewNote} />
      </Switch>
    </BrowserRouter>
  );
}