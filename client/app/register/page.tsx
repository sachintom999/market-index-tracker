"use client";
import { useAuth } from "@/contexts/auth";
import { handleSignUp } from "@/firebase/auth";
import { useState } from "react";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setCurrentUser } = useAuth();

  const performSignup = () => {
    const response = handleSignUp(email, password);
    setCurrentUser(response.user);
  };

  return (
    <div className="flex flex-col">
      <h1>Register</h1>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        onClick={() => {
          performSignup();
        }}
      >
        Register
      </button>
    </div>
  );
};

export default Register;
