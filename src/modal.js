import React, {useState} from 'react'


function Modal({modalClose}) {
    const [openModal, setOpenModal] = useState(false)
    const [theme, setTheme] = useState(false);
    return (
        <div className = "modal-transback">
            <div className="modalcontain">
                <button onClick = {() => {
                        modalClose(false)          
                    }} > X </button>
                <div className="setting-title">
                    <h1>list settings</h1>
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
