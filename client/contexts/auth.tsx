'use client'
// AuthContext.js
import React, { createContext, useState, useContext, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/firebase/config';


const AuthContext = createContext<any>({

   

});

export const AuthProvider = ({ children }:{children:any}) => {
  const [currentUser, setCurrentUser] = useState<any|null>(null);
  const [username, setUsername] = useState<any|null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser, setCurrentUser,setUsername,username }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
