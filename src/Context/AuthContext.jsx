import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();
export const AuthProvider = ({children})=>
{
  const [user, setUser] = useState(null);

  useEffect(() => {
    const currentUser = localStorage.getItem('currentUser') || localStorage.getItem('user');
    if (currentUser) {
      setUser(JSON.parse(currentUser));
    }
  }, []);

  const login=(data)=>{
    setUser(data);
    localStorage.setItem('currentUser', JSON.stringify(data));
  };

  const logout=()=>{
    setUser(null);
    localStorage.removeItem('currentUser');
  }

  return(
    <div>
      <AuthContext.Provider value={{user, setUser, login, logout}}>
        {children}
      </AuthContext.Provider>
    </div>
  );
};




