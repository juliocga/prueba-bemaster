import { createContext, useContext, useEffect, useState } from "react";
import {createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut} from "firebase/auth"
import { auth } from "../firebase";

export const userContext = createContext();

function useAuth(){
  const context = useContext(userContext);
  if (!context) {
    throw new Error("useBooking must be used within a BookingProvider");
  }
  return context;
}

function AuthProvider({children}){
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
      setLoading(false);
    })
  },[]);

  const signup = (email, password) => createUserWithEmailAndPassword(auth, email, password);
  const login = (email, password) => signInWithEmailAndPassword(auth, email, password);
  const logout = () => {
    signOut(auth)
    setUser(null);
  };
  
  return (
    <userContext.Provider value={{ signup, login, user, logout, loading }}>
      {children}
    </userContext.Provider>
  )
}

export {AuthProvider, useAuth};