import React, {useState} from 'react'
import "./Styles/navbar.css"
import Modal from "./modal"
function Navbar() {
    const [openModal, setOpenModal] = useState(false)
    return (
        <div className="navbar">
            <button className="logout">logout</button>
        <button className="openModalBtn" onClick ={() => {
                setOpenModal(true);
                {console.log(openModal)}
              }}></button>
        { openModal && <Modal modalClose = {setOpenModal}/>}
        </div>
    )
}

export default Navbar
