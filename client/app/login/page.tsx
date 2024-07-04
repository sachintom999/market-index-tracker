"use client"
import { handleLogin, handleSignUp } from "@/firebase/auth";
import React, { useState } from "react";

export default function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');



  return (
    <div className="flex flex-col">
      <h1>Login</h1>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button
        onClick={(e) => {
          handleLogin(email,password);
        }}
      >
        Login
      </button>
    </div>
  );
}
