import React from 'react';
import styles from "../components/Login.modul.css";
import icon from "../assets/google.png"
const Login = () => {
    return (
      <div className={styles.container}>
        <div className={styles.title}>
          <h2>Welcome to Chatgram</h2>
        </div>
        <div>
          <img src={icon} alt="google" /> Sign in with Goole
        </div>
      </div>
    );
};

export default Login;