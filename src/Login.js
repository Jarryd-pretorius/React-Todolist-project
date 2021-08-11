import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import { addUser } from "./redux/userSlice";
import {nanoid} from '@reduxjs/toolkit';
import "./Styles/signin.css"

function Login() {

    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    console.log(name, password);

    const submit = () => {
        if (name.length >= 4) {
            dispatch(addUser({id: nanoid(), user: name, password: password, darkTheme: false    }));
        }
    }

    return (
        <div className= "signin-ctn">
             <span id = "slogan">keeping track of things? - </span>
              <span id = "Useverb">UseVerb</span>
            <br />
            <input placeholder="Enter name.." className="form-inner" value = {name} type="text" onChange={(e)=> setName(e.target.value)}  /><br />
            <input placeholder="Enter password.." className = "form-inner" value ={password} type="password" onChange={e=> setPassword(e.target.value)} />
            <br/>
            <button id="logoin-btn" onClick = {submit}>login</button>
        </div>
    )
}

export default Login
