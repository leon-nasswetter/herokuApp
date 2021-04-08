import './App.css';
import {userState, userEffect} from "react"

function url(path){
  return process.env.NODE_ENV === "development"
  ? `http://localhost:1234${path}` : path
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        React apps are sweet
      </header>
    </div>
  );
}

export default App;
