import React, {useState} from 'react';
import Login from './components/Login.js';
import Signup from './components/Signup.js';
import Home from './components/Homepage.js';
import Navbar from './components/Navbar';
import CalForm from './components/CalForm.js';
import FavsList from './components/FavList.js';
import { createMuiTheme, ThemeProvider} from '@material-ui/core/styles'
import { Route, Switch, Link, Redirect, NavLink } from 'react-router-dom';
import ContainedButtons from './components/SubmitBtn.js';
import TodoList from "./components/PlannerList/planner.js";

let theme = createMuiTheme({
  palette: {
    primary: {
      main: "#2e1667",
    },
    secondary: {
      main: "#c7d8ed",
    },
  },
  typography: {
    fontFamily: ['Roboto'],
    h4: {
      fontWeight: 600,
      fontSize: 28,
      lineHeight: '2rem',
    },
    h5: {
      fontWeight: 100,
      lineHeight: '2rem',
    },
  },
});

function App(){
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/Health-Data">
            <CalForm/>
          </Route>
          <Route path="/Planner">
            <TodoList/>
          </Route>
          <Route path="/activities">
            <FavsList/>
          </Route>
          <div className="account-form">
            <Route path='/login'>
              <Login/>
            </Route>
            <Route path='/register'>
              <Signup/>
            </Route>`
          </div>
        </Switch>
        </ThemeProvider>
    </div>
  );
}

export default App;