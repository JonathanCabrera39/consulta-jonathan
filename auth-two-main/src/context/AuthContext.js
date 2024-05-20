import { useState, createContext } from "react";
//import { getMeFetch } from "../api/getMeFetch";
//import { useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // usuario estatico (de momento no existe)
  const [user, setUser] = useState(null);
//login....
  // const login = async (token) => {
  //   try {
  //     const user = await getMeFetch(token);
  //     delete user.password;
  //     setUser(user);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  // los datos para utilizar en todo el sitio web
  const data = {
    user,
	  setUser,
   // login,
  };

  // el contexto
  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};
