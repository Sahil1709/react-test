import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello World . <br></br>
          Author : Sahil 
        </p>
        <a
          className="App-link"
          href="https://github.com/Sahil1709"
          target="_blank"
          rel="noopener noreferrer"
        >
          My Github
        </a>
      </header>
    </div>
  );
}

export default App;
