import React from 'react';
import styles from "./Navbar.module.css"
const Navbar = ({ logoutHandler }) => {
  return (
    <div className={styles.container}>
      <div className={styles.name}>
        <h2>ChatApp</h2>
      </div>
      <div className={styles.logout} onClick={logoutHandler}>
        <p>Logout</p>
      </div>
    </div>
  );
};

export default Navbar;