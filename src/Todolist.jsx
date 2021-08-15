import React, {useState, useEffect} from 'react'
import { BsPlusSquareFill } from "react-icons/bs";
import { addTodoList } from "./redux/userSlice";
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import "./Styles/todo.css"
import {TiTick} from 'react-icons/ti';








function Todolist() {
  const dispatch = useDispatch();
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
    dispatch(addTodoList({todos}))
  }
  
  function deleteTodo(id) {
    let updatedTodos = [...todos].filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
    
  }
  
  

  function completedArray(e) {
    
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
                <h1 className = "todoTitle">{"Hello  "+nameInput}</h1>
                <h2 className = "todoTitle">What needs doing today?</h2>
                <button 
                  className={"showTodos-" + completedTodoToogle}
                 onClick={() => {
                   completedArray();
                   setCompletedTodosToogle(!completedTodoToogle);
                 }}>show only completed Tasks</button>
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
          <div>

            {completedTodoToogle ? 
           <div className="todoText-ctn">
           {completedTodoList.map((completed, index) => (
             <div key={completed.id} className={"todo-"+ completed.completed}>
              <div className = "todos-text">{completed.text}</div>
               <div className="todo-actions">
               <button 
                className ={"todoBtn-" + completed.completed}
                onClick = {() => toggleCompleted(index)}
                ><TiTick/></button>
                 
               </div>
             </div>
             
           )) }</div> :
           <div className="todoText-ctn">
          {todos.map((todo, index) => (
            <div key={todo.id} className={"todo-" + todo.completed}>
                  <div className = "todos-text">{todo.text}</div>
              <div className="todo-actions">
                <button 
                className ={"todoBtn-" + todo.completed}
                onClick = {() => toggleCompleted(index)}><TiTick/></button>
                <button className = {"todoClsBtn-" + todo.completed}
                 onClick={() => deleteTodo(todo.id)} 
                 >X</button>
              </div>
            </div>
            
          )) } </div> }
    
          </div>
          
        </div>
    )
}

export default Todolist
