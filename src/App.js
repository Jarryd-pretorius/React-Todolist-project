
import './App.css';
import Login from './Login';
import Navbar from './Navbar';
import Todolist from './Todolist';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {
  return (
    <Router>
    <div className="App">
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
