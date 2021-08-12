import React, {useState} from 'react'
import "./Styles/modal.css"
import {modifiyUser, changeThemeDark, changeThemeLight} from "./redux/userSlice"
import {useDispatch, useSelector} from 'react-redux'




function Modal({modalClose}) {

    const dispatch  = useDispatch();    
    const [user, setUser] =  useState("")
    const users = useSelector((state) => (state.user.userName))
    const themeBase = useSelector ((state) => (state.user.theme))
    const themeDark = "dark"
    const themeLight = "light"
    

    const ChangeUser = () => {
        dispatch(modifiyUser({user}))        
        
    }
    const themeChanger = () => {
        if (themeBase === "light") {
            dispatch(changeThemeDark({themeDark}))
        } else {
            dispatch(changeThemeLight({themeLight}))
        }
        
    }

    
    
    return (
        <div  
        className = "modal-transback"
        // onClick = {() => { modalClose(false)          
        // }}
        >
            <div className={"modalcontain-" + themeBase}>
                <button onClick = {ChangeUser()}>save name</button>
                <button 
                className = "cross"
                onClick = {() => { modalClose(false)          
                    }} > X </button>
                <div className="setting-title">
                </div>
                <div className="body">
                    <button onClick = {themeChanger}>Dark mode</button>
                </div>
                <input
                
                 placeholder="Enter name.."
                  className="form-inner" 
                  value = {user} type="text"
                     onChange={(e)=> setUser(e.target.value)}  /><br />
                <div className="footer">
                    <button onClick = {() => {
                        modalClose(false)          
                    }}> Cancel </button>
                    <button onClick = {() => {
                        modalClose(false)          
                    }}>  Continue </button>
                </div>
            </div>
        </div>
    )
}

export default Modal
