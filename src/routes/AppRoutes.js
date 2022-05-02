import { getAuth, onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import DashboardRoute from "./DashboardRoute";
import PrivateRouters from "./PrivateRouters";
import PublicRouters from "./PublicRouters";

const AppRoutes = () => {
  const [checking, setChecking] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(
      auth,
      (user) => {
        if (user?.uid) {
          setIsLoggedIn(true);
        } else {
          setIsLoggedIn(false);
        }
        setChecking(false);
      },
      []
    );
  }, [setIsLoggedIn, setChecking]);

  if (checking) {
    return (
      // loading
      <div
        style={{
          position: "absolute",
          backgroundImage:
            "url(https://assets.pokemon.com//assets/cms2-es-es/img/misc/virtual-backgrounds/go/pokemon-party.jpg)",
          top: "0",
          bottom: "0",
          left: "0",
          right: "0",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            width="200px"
            height="100px"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Pok%C3%A9mon_GO_logo.svg/1200px-Pok%C3%A9mon_GO_logo.svg.png"
            alt="Loader"
          />
        </div>
      </div>
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={
            <PublicRouters isAuth={isLoggedIn}>
              <Login />
            </PublicRouters>
          }
        />

        <Route
          path="/register"
          element={
            <PublicRouters isAuth={isLoggedIn}>
              <Register />
            </PublicRouters>
          }
        />

        <Route
          path="/*"
          element={
            <PrivateRouters isAuth={isLoggedIn}>
              <DashboardRoute />
            </PrivateRouters>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
