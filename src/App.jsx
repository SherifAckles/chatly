import React from "react";
import Nav from "./components/nav/Nav";
import Register from "./components/pages/Register";
import Login from "./components/pages/Login";
import Home from "./components/pages/Home";
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const App = () => {
  const [user] = useAuthState(auth);
  // console.log(user);
  return (
    <div>
      <Register />
    </div>
  );
};

export default App;
