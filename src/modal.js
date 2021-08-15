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
       
        >
            <div className={"modalcontain-" + themeBase}>
            
                <input
                
                 placeholder="New name..."
                  className="form-inner" 
                  value = {user} type="text"
                     onChange={(e)=> setUser(e.target.value)}  />
                     <button onClick = {() => {
                        modalClose(false)          
                    }} className={"cross-"+themeBase}>X</button>
                     <br />
                <div className="footer">
                <button onClick = {ChangeUser()}>save name</button>
                    
                    <button>  New name? </button>
                    <button onClick = {themeChanger}>{themeBase+" mode"}</button>
                    
                </div>
            </div>
        </div>
    )
}

export default Modal
