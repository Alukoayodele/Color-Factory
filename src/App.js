import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import './App.css';
import Home from './Home';
import Color from './components/Color';
import AddColor from './components/AddColor';
import NotFound from './components/NotFound';

const App = () => {
  const [colors, setColors] = useState(['red', 'blue', 'green']);

  return (
    <Router>
      <Switch>
        <Route path='/colors' component={() => <Home colors={colors} />} />
        <Route
          exact
          path='/colors/:color'
          component={() => <Color colors={colors} />}
        />
        <Route
          exact
          path='/color/new'
          component={() => <AddColor handleColor={setColors} />}
        />
        <Route path='/not-found' component={NotFound} />

        <Redirect from='/' exact to='/colors' />
        <Redirect to='/not-found' />
      </Switch>
    </Router>
  );
};

export default App;
