import React from "react";
import Register from "./components/pages/Register";
import Login from "./components/pages/Login";
import Nav from "./components/nav/Nav";
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const App = () => {
  const [user] = useAuthState(auth);
  console.log(user);
  return (
    <div>
      <Nav />
      <Register/>
      <Login/>
    </div>
  );
};

export default App;
