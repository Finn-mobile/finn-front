import React, { createContext, useState } from "react";

export const AuthContext = createContext(undefined);

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [token, setToken] = useState({});

  const updateUser = (token) => setUser(token);
  const updateToken = (user) => setToken(user);

  return (
    <AuthContext.Provider value={{ user, token, updateUser, updateToken }}>
      {children}
    </AuthContext.Provider>
  );
};
