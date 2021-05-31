import React, {useState} from 'react';
import Login from './components/Login.js';
import Signup from './components/Signup.js';
import Navbar from './components/Navbar';
import Home_ from './components/home';
import CalForm from './components/CalForm.js';
import { createMuiTheme, ThemeProvider} from '@material-ui/core/styles'
import { Route, Switch, Link, Redirect, NavLink } from 'react-router-dom';
import ContainedButtons from './components/SubmitBtn.js';

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
        <Home_ />
        <CalForm/>
        <div className="account-form">
          <Switch>
            <Route path='/login'>
              <Login/>
            </Route>
            <Route path='/register'>
              <Signup/>
            </Route>
          </Switch>
        </div>
        </ThemeProvider>
    </div>
  );
}

export default App;