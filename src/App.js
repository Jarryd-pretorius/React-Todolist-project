
import './App.css';
import Login from './Login';
import Navbar from './Navbar';
import Todolist from './Todolist';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import "./Styles/todo.css"


function App() {
  return (
    <Router>
    <div className="App">
      
      <header className="App-header">
      <Redirect from="/" to="signin" />
        <Navbar />
        <Route path = "/signin" basename="/sigin"  component = {Login}/>
        <Route path="/Dashboard" exact component = {Todolist}/>
        
      </header>
    </div>
    </Router>
  );
}

export default App;
