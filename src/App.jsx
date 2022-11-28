import React from "react";

import Nav from "./components/nav/Nav";
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const App = () => {
  const [user] = useAuthState(auth);
  console.log(user);
  return (
    <div>
      <Nav />
    </div>
  );
};

export default App;
