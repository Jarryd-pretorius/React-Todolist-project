
import './App.css';
import Login from './Login';
import Navbar from './Navbar';
import Todolist from './Todolist';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Login />
        <Todolist />
        
      </header>
    </div>
  );
}

export default App;
