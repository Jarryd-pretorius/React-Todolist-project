import React, {useState} from 'react'
import "./Styles/navbar.css"
import Modal from "./modal"
import { useSelector } from 'react-redux';
import { ImBrightnessContrast } from 'react-icons/im';
import { useHistory} from "react-router-dom";

function Navbar() {
    const themeBase = useSelector ((state) => (state.user.theme))
    let history = useHistory();
    const [openModal, setOpenModal] = useState(false)
    return (
        
        <div className={"navbar-"+themeBase}>
            <button className={"logout-"+themeBase} onClick = {() => {
                history.push("/signin");
            }}>logout</button>
        <button className={"openModalBtn-"+themeBase} onClick ={() => {
                setOpenModal(true);
                {console.log(openModal)}
              }}><ImBrightnessContrast size={30}/></button>
        { openModal && <Modal modalClose = {setOpenModal}/>}
        </div>
    )
}

export default Navbar
