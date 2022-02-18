import React from 'react';
import { auth } from '../Firebase';
import { useNavigate } from 'react-router-dom';
//style
import styles from "./Chat.module.css"
//component
import Navbar from './Navbar'; 
const Chat = () => {
    const navigate = useNavigate()
    const logoutHandler = () => {
        auth.signOut()
        navigate("/")
    }
    return (
        <div>
            <Navbar logoutHandler={logoutHandler}/>
        </div>
    );
};

export default Chat;