import React, { useState, useEffect, useContext } from "react";
import { auth } from "../Firebase";
import { useNavigate } from "react-router-dom";
import { ChatEngine } from "react-chat-engine";
import axios from "axios";
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
          "project-id": "e02b53f5-4e01-4175-90b2-850aaddfde4c",
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
          getFile(user.photoURL)
              .then(avatar => {
                  formdata.append("avatar", avatar, avatar.name)
                  axios.post("https://api.chatengine.io/users/", formdata, {
                    headers: {
                      "private-key": "e90fdf6e-2b91-4132-ba1e-fe950e8e759c"
                    }
                  })
                .then(() => setLoading(false))
                .catch(error => console.log(error))
            })
      });
  }, [navigate, user]);
//-----------------------------------------------------get picture------------------------------------------
  const getFile = async (url) => {
    const response = await fetch(url);
    const data = await response.blob();
    return new File([data], "usePhoto.jpg", { type: "image/jpeg" });
  };
  //------------------------------------------------------loading---------------------------------------------
  if (!user || loading) return "Loading ...";
  return (
      <div>
      <Navbar logoutHandler={logoutHandler} />

      <ChatEngine
        projectID="e02b53f5-4e01-4175-90b2-850aaddfde4c"
        height="calc(100vh - 50px)"
        userName={user.email}
        userSecret={user.uid}
      />
    </div>
  );
};

export default Chat;
