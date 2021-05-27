import React, {useState} from 'react';
import Login from './Login.js';

function App(){
    return (
        <div>
          <header className="jumbotron jumbotron-fluid py-4">
            <div className="container">
              <h1>React App</h1>
            </div>
          </header>
          <main className="container">
              <Login/>
          </main>
          <footer className="container">
            <small>This is the footer!</small>
          </footer>
        </div>
      );
}

export default App;