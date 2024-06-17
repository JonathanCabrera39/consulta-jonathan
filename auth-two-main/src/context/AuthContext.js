import { useState, createContext } from "react";
import { getMeFetch } from "../api/getMeFetch";
import { useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // usuario estatico (de momento no existe)
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    (async () => {
      const token = localStorage.getItem("accesse");
      console.log(token);
      await login(token);
      setLoading(false);
    })();
  }, []);

  //login....
  const login = async (token) => {
    try {
      const user = await getMeFetch(token);
      delete user.password;
      setUser(user);
    } catch (e) {
      console.log(e);
    }
  };

  const logout = () => {
    setUser(false);
    localStorage.clear();
  };
  // los datos para utilizar en todo el sitio web
  const data = {
    user,
    login,
    logout,
  };

  if (loading) return null;

  // el contexto
  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};
