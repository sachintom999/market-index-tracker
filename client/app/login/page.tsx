"use client";
import { useAuth } from "@/contexts/auth";
import { handleLogin, handleSignUp } from "@/firebase/auth";
import React, { useState } from "react";
import { useRouter } from 'next/navigation'

export default function Login() {
  const [email, setEmail] = useState("s2@gmail.com");
  const [password, setPassword] = useState("123123123");
  const { setCurrentUser } = useAuth();
  const router = useRouter()

  const performLogin =  async() => {
    const response = await handleLogin(email, password);

    setCurrentUser(response.user);
    router.push("/")

    
  };

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
          performLogin();
        }}
      >
        Login
      </button>
    </div>
  );
}
