import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import { addUser } from "./redux/userSlice";
import {nanoid} from '@reduxjs/toolkit';


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
        <div>
            <h2>useVerb</h2>
            <br />
            <input value = {name} type="text" onChange={(e)=> setName(e.target.value)}  /><br />
            <input  value ={password} type="password" onChange={e=> setPassword(e.target.value)} />
            <button onClick = {submit}>login</button>
        </div>
    )
}

export default Login
