import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { addUser } from "./redux/userSlice";
import "./Styles/signin.css"
import Navbar from './Navbar';
import {useHistory } from 'react-router-dom';
function Login() {

    let history = useHistory();
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    console.log(name, password);
    const users =  useSelector((state) => state.users)
    const inputPlaceholder = useSelector((state) => state.user.userName)


    
    

    const userAdd = (e) => {
        if (name.length < 4 ) {
          history.push("/signin");
          
          
        }else {
            e.preventDefault();
        dispatch(addUser({name,password}))
        history.push("/Dashboard");
       
        }
        
        
    }

    


    

    return (
        <div>
            
        <div className= "signin-ctn">
             
             <span id = "slogan">keeping track of things? - </span>
              <span id = "Useverb">UseVerb</span>
            <br />
            <input placeholder={"Name: " + inputPlaceholder} className="form-inner" value = {name} type="text" onChange={(e)=> setName(e.target.value)}  /><br />
            <input placeholder={"Password: " + inputPlaceholder+"Rockz!123"} className = "form-inner" value ={password} type="password" onChange={e=> setPassword(e.target.value)} />
            
            <br/>
            <button id="logoin-btn" onClick = {userAdd}>login</button>
        </div>
        </div>
    )
}

export default Login
