import React, { useState, useEffect, useContext } from "react";
import { auth } from "../Firebase";
import { useNavigate } from "react-router-dom";
import { ChatEngine } from "react-chat-engine";
import styles from "./Chat.module.css"
import axios from "axios";
//loaing gif
import Loading from "../assets/loading.gif";
//-------------------------------------------------------context-------------------------------------------------------
import { AuthContext } from "../context/AuthContextProvider";
//------------------------------------------------------component-----------------------------------------------------
import Navbar from "./Navbar";
const Chat = () => {
  const navigate = useNavigate();
  const user = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  //------------------------------------------------------logout-------------------------------------------------------
  const logoutHandler = () => {
    auth.signOut();
    navigate("/");
  };
  //-----------------------------------------------------useEffect------------------------------------------------------
    useEffect(() => {
      //------------------if user not login--------------------------
    if (!user) {
      navigate("/");
      return;
        }
    //----------------------chatengin api and append data-----------
    axios
      .get("httpsa://api.chatengine.io/users/me", {
        headers: {
          "project-id": "c82fff43-e53d-406a-9830-f32ae66e14b1",
          "user-name": user.email,
          "user-secret": user.uid,
        },
      })
      .then(() => {
        setLoading(false);
      })
      .catch(() => {
        let formdata = new FormData();
        formdata.append("email", user.email);
        formdata.append("username", user.email);
        formdata.append("secret", user.uid);
        getFile(user.photoURL).then((avatar) => {
          formdata.append("avatar", avatar, avatar.name);
          axios
            .post("https://api.chatengine.io/users/", formdata, {
              headers: {
                "private-key": "b0b0ca83-e808-417b-92c8-3d35f63e4f29",
              },
            })
            .then(() => setLoading(false))
            .catch((error) => console.log(error));
        });
      });
  }, [navigate, user]);
//-----------------------------------------------------get picture------------------------------------------
  const getFile = async (url) => {
    const response = await fetch(url);
    const data = await response.blob();
    return new File([data], "usePhoto.jpg", { type: "image/jpeg" });
  };
  //------------------------------------------------------loading---------------------------------------------
    if (!user || loading) return <img src={Loading} alt="loading..." className={styles.loading}/>;
  return (
    <div>
      <Navbar logoutHandler={logoutHandler} />

      <ChatEngine
        projectID="c82fff43-e53d-406a-9830-f32ae66e14b1"
        height="calc(100vh - 50px)"
        userName={user.email}
        userSecret={user.uid}
      />
    </div>
  );
};

export default Chat;
