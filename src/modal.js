import React, {useState} from 'react'
import "./Styles/modal.css"

function Modal({modalClose}) {
    const [theme, setTheme] = useState(false);
    return (
        <div className = "modal-transback">
            <div className="modalcontain">
                <button onClick = {() => {
                        modalClose(false)          
                    }} > X </button>
                <div className="setting-title">
                </div>
                <div className="body">
                    <button>Dark mode</button>
                </div>
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
