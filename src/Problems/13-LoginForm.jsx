import React, { useState } from "react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistered, setIsRegistered] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div>
      {isLoggedIn ? (
        <div>
          <h2>Welcome, {email}</h2>
          <button>Logout</button>
        </div>
      ) : (
        <div>
          <form className="flex items-center justify-center">
            <input
              type="email"
              placeholder="Enter your Email..."
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <br />
            <input
              type="password"
              placeholder="Enter your Password..."
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <br />
            <button>{isRegistered ? "Login" : "Register"}</button>
          </form>
          <p>
            {isRegistered
              ? "Don't have an account ? Register Now"
              : "Already have an account ? Login!"}
          </p>
          <button onClick={() => setIsRegistered(!isRegistered)}>
            {isRegistered ? "Register" : "Login"}
          </button>
        </div>
      )}
    </div>
  );
};

export default LoginForm;
