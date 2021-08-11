import React, {useState} from 'react'
import "./Styles/navbar.css"
import Modal from "./modal"
import { ImBrightnessContrast } from 'react-icons/im';

function Navbar() {
    const [openModal, setOpenModal] = useState(false)
    return (
        
        <div className="navbar">
            <button className="logout">logout</button>
        <button className="openModalBtn" onClick ={() => {
                setOpenModal(true);
                {console.log(openModal)}
              }}><ImBrightnessContrast size={30}/></button>
        { openModal && <Modal modalClose = {setOpenModal}/>}
        </div>
    )
}

export default Navbar
