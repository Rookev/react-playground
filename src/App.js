import React from 'react';
import logo from './logo.svg';
import './App.css';

function Greeting(props) {
  return <p>Hello, {props.name}!</p>;
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>My second React line of code :-)</p>
        <Greeting name="Kevin" />
        <Greeting name="Matt" />
        <Greeting name="Brian" />
      </header>
    </div>
  );
}

export default App;
