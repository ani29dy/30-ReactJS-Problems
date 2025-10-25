import React from "react";
import { useAuth } from "../AuthContext";

const Authenticate = () => {
  const { user, login, logout } = useAuth();

  return (
    <div>
      <h1>User Authenticate</h1>
      {user ? (
        <div>
          <p>Welcome!, {user.username}</p>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <button onClick={() => login({ username: "user123" })}>Login</button>
      )}
    </div>
  );
};

export default Authenticate;
