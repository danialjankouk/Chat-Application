 import React,{useEffect,useState,createContext} from 'react';
 import { auth } from '../Firebase';
import { useNavigate} from "react-router-dom"
//CONTEXT
export const AuthContext = createContext()

const AuthContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
      setLoading(false);
      if (user) navigate("/chat");
    });
  }, [user, navigate]);

  return (
    <div>
      <AuthContext.Provider value={user}>
        {!loading && children}
      </AuthContext.Provider>
    </div>
  );
};
 
 export default AuthContextProvider;