import React from 'react';
import logo from './logo.svg';
import './App.css';

function BeautifulName(props) {
  return <span style={{ fontFamily: 'cursive', fontWeight: 'bold' }}>{props.name}</span>;
}

function BeautifulLanguage(props) {
  return <span style={{ fontFamily: 'courier', fontWeight: 'lighter' }}>{props.language}</span>;
}

function CoderInfo(props) {
  return <p><BeautifulName name={props.name} /> (Favourite language: <BeautifulLanguage language={props.language} />)</p>;
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
        <CoderInfo name="Kevin" language="Javascript" />
        <CoderInfo name="Matt" language="Java" />
        <CoderInfo name="Brian" language="Python" />
      </header>
    </div>
  );
}

export default App;
