import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Home = () => {
  const { user, logout } = useContext(AuthContext);

  return user ? (
    <>
      <div className="mx-2">
        <h3>
          Home - Bienvenido{" "}
          <span className="text-primary">
            {user.firstname + " " + user.lastname}
          </span>
        </h3>
        <button className="btn btn-danger w-50 mt-3" onClick={logout}>
          cerrar sesion
        </button>
      </div>
    </>
  ) : null;
};

export default Home;
