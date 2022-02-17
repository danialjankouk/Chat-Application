import React from 'react';
import styles from "../components/Login.modul.css";
import icon from "../assets/google.png"
const Login = () => {
    return (
      <div className={styles.container}>
        <div className={styles.loginCard}>
          <h2>Welcome to Chatgram</h2>
            <div className={styles.button}>
                <img src={icon} alt="google" /> Sign in with Goole
            </div>
        </div>
      </div>
    );
};

export default Login;