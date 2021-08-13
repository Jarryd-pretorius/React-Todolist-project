
import './App.css';
import Login from './Login';
import Navbar from './Navbar';
import Todolist from './Todolist';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import "./Styles/todo.css"


function App() {
  return (
    <Router>
    <div className="App-">
      <header className="App-header">
        <Navbar />
        <Route path="/Dashboard" exact component = {Todolist}/>
        <Route path = "/signin"  component = {Login}/>
      </header>
    </div>
    </Router>
  );
}

export default App;