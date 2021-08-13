import React from 'react';
import {useDispatch,useSelector} from 'react-redux';
import Navbar from './Navbar';
import {deleteTodo, markCompleted} from "./redux/todoSlice";
import "./Styles/todo.css"

const Todo = ({text, completed, id}) => {
    const dispatch = useDispatch();
    const toggle = () => {
        dispatch(markCompleted({
            id: id,
            changes: {completed: !completed},
        }))  
    }; 


    return (
        
        <div>
            
        <div>
            
            <div>
            <input type="checkbox"
             value ={completed}
              onChange = {toggle}
              />
              <span >{text}</span>
              <button onClick={deleteItem}>X</button>
              </div>
        </div>
        </div>
    );
    
}

export default Todo;
