import React from "react";
import Login from "./components/Login";
import { Routes, Route } from "react-router-dom";
import Chat from "./components/Chat"
//context
import AuthContextProvider from "./context/AuthContextProvider";
const App = () => {
  return (
    <div>
      <AuthContextProvider>
        <Routes>
          <Route path="/chat" element={ <Chat/>}/>
          <Route path="/" element={<Login />} />
        </Routes>
      </AuthContextProvider>
    </div>
  );
};

export default App;
