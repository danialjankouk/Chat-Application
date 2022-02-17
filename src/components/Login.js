import React from 'react';
import styles from "../components/Login.module.css";
import icon from "../assets/google.png"

//firebase
import firebase from 'firebase/app';
import { auth } from '../Firebase';

//Google authinication
const authinication = () => {
    auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())
}
const Login = () => {
    return (
      <div className={styles.container}>
        <div className={styles.loginCard}>
          <h2>Welcome to ChatApp</h2>
                <div
                    onClick={authinication}
                    className={styles.button}>
                <img src={icon} alt="google" /> Sign in with Goole
            </div>
        </div>
      </div>
    );
};

export default Login;