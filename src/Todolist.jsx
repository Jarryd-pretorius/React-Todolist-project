import React, {useState} from 'react'
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import { todoSelectors } from './redux/todoSlice';
import { addTodo, addTodos} from "./redux/todoSlice";
import Todo from "./Todo";

function Todolist() {
    const dispatch = useDispatch();
    const [todo, setTodo] = useState("")


    const todoAdd = () => {
        if (todo.length > 0){
            dispatch(addTodo ({id: Date(), todo: todo, completed: false}));
        }
    }
    const allTodos = useSelector(todoSelectors.selectEntities)
    const todoList = [];
    console.log(todoList)
    for (const id in allTodos) {
        if (Object.hasOwnProperty.call(allTodos, id)) {
            const todoItem = allTodos[id];
            console.log(todoItem)
            todoList.push(<Todo 
                key = {todoItem.id}
                id= {todoItem.id}
                completed = {todoItem.completed}
                text = {todoItem.todo}
                />)
        }
    }
   

    return (
        <div>
           <h2>todolist</h2> 
           <input 
           value={todo} 
           type="text" 
           placeholder="enter todo.."
            onChange ={(e) => setTodo(e.target.value)} />
            <button onClick = {todoAdd}>add todo</button>
            <div>{todoList}</div>
            <button></button>
        </div>
    )
}

export default Todolist
