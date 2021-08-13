import React, {useState} from 'react'
import { BsPlusSquareFill } from "react-icons/bs";
import useDispatch from 'react-redux';
import "./Styles/todo.css"
import { BiAddToQueue } from 'react-icons/bi';


function Todolist() {
    const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");
  const [todoEditing, setTodoEditing] = useState(null);
  const [editingText, setEditingText] = useState("");
  const [completed, setcompleted] = useState(false)

  

  React.useEffect(() => {
    const json = localStorage.getItem("todos");
    const loadedTodos = JSON.parse(json);
    if (loadedTodos) {
      setTodos(loadedTodos);
    }
  }, []);

  React.useEffect(() => {
    const json = JSON.stringify(todos);
    localStorage.setItem("todos", json);
  }, [todos]);

  function handleSubmit(e) {
    e.preventDefault();

    const newTodo = {
      id: new Date().getTime(),
      text: todo,
      completed: false,
    };
    setTodos([...todos].concat(newTodo));
    setTodo("");
  }

  function deleteTodo(id) {
    let updatedTodos = [...todos].filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  }
  

    return (
        <div className = "todolist-contain">
                <h1 className = "todoTitle">What needs doing?</h1>
          <form onSubmit={handleSubmit}>
          <button className = "input-btn"type="submit">< BsPlusSquareFill size ={20}/></button>
            <input className = "input-box"
              placeholder = "Add task..."
              type="text"
              onChange={(e) => setTodo(e.target.value)}
              value={todo}
            />
            
          </form>
          <div className="organiser">
           
          </div>
            <div className="todoText-ctn">
          {todos.map((todo) => (
            <div key={todo.id} className="todo">
              <div className="todo-text">
                {todo.id === todoEditing ? (
                  <input
                    type="text"
                    onChange={(e) => setEditingText(e.target.value)}
                  />
                ) : (
                  <div className = "todos-text">{todo.text}</div>
                )}
              </div>
              <div className="todo-actions">
                
                  
                 
      

                <button classname = "delete-btn" onClick={() => deleteTodo(todo.id)}>X</button>
              </div>
            </div>
            
          ))} 
          </div>
        </div>
    )
}

export default Todolist
