import React, {useState, useEffect} from 'react'
import { BsPlusSquareFill } from "react-icons/bs";
import {useSelector} from 'react-redux';
import "./Styles/todo.css"
import { BiAddToQueue } from 'react-icons/bi';
import {AiFillCheckCircle} from 'react-icons/ai';







function Todolist() {
  const nameInput = useSelector ((state) => (state.user.userName))
  const [todos, setTodos] = useState([])
  const [todo, setTodo] = useState("");
  const [completedTodoToogle,setCompletedTodosToogle] = useState(false)
  const [completedTodoList, setCompletedTodoList] = useState([]);
  

    
    
    

  useEffect(() => {
    const json = localStorage.getItem("todos");
    const loadedTodos = JSON.parse(json);
    if (loadedTodos) {
      setTodos(loadedTodos);
    }
  }, []);

  useEffect(() => {
    const json = JSON.stringify(todos);
    localStorage.setItem("todos", json);
  }, [todos]);
  useEffect(() => {
    const json = JSON.stringify(todos);
    localStorage.setItem("todos", json);
  }, [completedTodoList]);

  function handleSubmit(e) {
    e.preventDefault();

    const newTodo = {
      id: new Date(),
      text: todo,
      completed: false,
    };

    setTodos([...todos].concat(newTodo));
    setTodo("");
  }
  
  function deleteTodo(id) {
    let updatedTodos = [...todos].filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
    console.log(updatedTodos);
  }
  

  function completedArray() {
    const CompletedTodos = todos.filter( todo => {
      return todo.completed !== false;
      
    });
    
    setCompletedTodoList(CompletedTodos)
    console.log(completedTodoList)
  }
  
  
  function toggleCompleted(index) {
    const updatedTodos = [...todos]
    updatedTodos[index].completed = !updatedTodos[index].completed
    setTodos(updatedTodos);
    console.log(todos)

    
  }


 


  

    return (
        <div className = "todolist-contain">
                <h1 className = "todoTitle">{"Hi!,  "+nameInput}</h1>
                <h2 className = "todoTitle">What needs doing?</h2>
                <button 
                  className="showTodos"
                 onClick={() => {
                   completedArray();
                   setCompletedTodosToogle(!completedTodoToogle);
                 }}>completed</button>
          <form onSubmit={handleSubmit}>
          <button  
          className = "input-btn"
          type="submit"
          >< BsPlusSquareFill size ={20}/></button>
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
          
          
              {completedTodoToogle && todos.map((todo, index) => (
                <div key={todo.id} className="todo">
                  
                    
                      <div className = "todos-text">{todo.text}</div>
                  <div className="todo-actions">
                    <input type="checkbox"
                    onClick = {() => toggleCompleted(index)}  />
                    <button classname = "delete-btn" onClick={() => deleteTodo(todo.id)}>X</button>
                  </div>
                </div>
                
              )) }
 
          </div>
        </div>
    )
}

export default Todolist
