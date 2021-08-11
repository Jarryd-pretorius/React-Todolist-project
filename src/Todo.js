import React from 'react';
import {useDispatch} from 'react-redux';
import {deleteTodo, markCompleted} from "./redux/todoSlice";
import "./Styles/todo.css"

const Todo = ({text, completed, id}) => {
    const dispatch = useDispatch();
    const toggle = () => {
        dispatch(markCompleted({
            id: id,
            changes: {completed: !completed},
        })  
        )  
    };

    const deleteItem= () => {
        dispatch(deleteTodo(id))
    };

    


    return (
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
    );
    
}

export default Todo;
