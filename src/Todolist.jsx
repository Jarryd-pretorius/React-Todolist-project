import React, {useState, useEffect} from 'react'
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import { todoSelectors } from './redux/todoSlice';
import { addTodo, addTodos, } from "./redux/todoSlice";
import {addTodoList} from "./redux/userSlice"
import Todo from "./Todo";
import "./Styles/todo.css"

function Todolist() {
    const dispatch = useDispatch();
    const [todo, setTodo] = useState("")
    const completed = false;
    const [data, setData] = useState(null)
    const inputPlaceholder = useSelector((state) => state.user.userName)

    useEffect(() => {
        fetch('http://localhost:8000/todos')
        .then(res => {
           return res.json()
        })
        .then (data => {
            setData(data)
            console.log(data)
        });
    }, [])

    const todoAdd = () => {
        if (todo.length > 0){
            dispatch(addTodo ({id: Date(), todo: todo, completed: false}));
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const todoItem = {todo, completed}
        console.log(todoItem)
    }
    // const allTodos = useSelector(todoSelectors.selectEntities)
    // const todoList = [];
    // console.log(todoList.completed)
    // for (const id in allTodos) {
    //     if (Object.hasOwnProperty.call(allTodos, id)) {
    //         const todoItem = allTodos[id];
    //         console.log(todoItem)
    //         todoList.push(<Todo 
    //             key = {todoItem.id}
    //             id= {todoItem.id}
    //             completed = {todoItem.completed}
    //             text = {todoItem.todo}
    //             />)
                
    //     }
    // }
    
       
    

    // const markedCompleted = () => {
    //    dispatch(addTodoList({todoList}))
    // }
    


     
   

    return (
        <div className="title-ctn">
            <div className="create todo">
                <input type="text"
                value = {todo}
                 onChange = {(e) => setTodo(e.target.value)}/>
                 <button 
            className="submit-todo"
            onClick = {handleSubmit}
            >submit</button>
            </div>
            {todo && data.map((todos) => (
                <div className = "todo-ctn">
                    <h2>{todos.todo}</h2>
                    <p>completed: {todos.completed}</p>
                    <button className="completed"></button>
                </div>
            ))}
           {/* <h2 className ="todoTitle" ></h2> 
           <input 
           value={todo} 
           type="text" 
           placeholder="enter todo.."
           className ="input-box"
            onChange ={(e) => setTodo(e.target.value)} />
            <button 
            onClick = {todoAdd}
            className = "input-btn"
            >add todo</button>
            <div>{todoList}</div>
            <button onClick = {markedCompleted}>completed tasks</button> */}
        </div>
        
    )
}

export default Todolist
