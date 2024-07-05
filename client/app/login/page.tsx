"use client";
import { useAuth } from "@/contexts/auth";
import { handleLogin, handleSignUp } from "@/firebase/auth";
import React, { useState } from "react";
import { useRouter } from 'next/navigation'
import Link from "next/link";
import { pl } from "@faker-js/faker";

export default function Login() {
  const [email, setEmail] = useState("s2@gmail.com");
  const [password, setPassword] = useState("123123123");
  const { setCurrentUser,setUsername } = useAuth();
  const router = useRouter()

  const performLogin =  async() => {


    console.log('18')
    const response = await handleLogin(email, password);

    

    setCurrentUser(response?.data.user);
    setUsername(response?.data.user1.name)
    router.push("/dashboard")

    
  };

  return (
    // <div className="flex flex-col">
    //   <h1>Login</h1>
    //   <input
    //     type="email"
    //     value={email}
    //     onChange={(e) => setEmail(e.target.value)}
    //     placeholder="Email"
    //   />
    //   <input
    //     type="password"
    //     value={password}
    //     onChange={(e) => setPassword(e.target.value)}
    //     placeholder="Password"
    //   />
    //   <button
    //     onClick={(e) => {
    //       performLogin();
    //     }}
    //   >
    //     Login
    //   </button>
    // </div>

    <div className="min-h-screen flex items-center justify-center bg-gray-100">
    <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
      {/* <h1 className="text-2xl font-bold mb-6 text-center">Register</h1> */}
      {/* {error && <p className="text-red-500 mb-4">{error}</p>} */}
      <form onSubmit={(e)=>{
        e.preventDefault()
        performLogin()
      }}>
        {/* <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded text-slate-700"
          />
        </div> */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded text-slate-700"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 mb-2" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded text-slate-700"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Login
        </button>
      </form>

      <div className="flex justify-center mt-3">

<p className="text-gray-600 m-auto">Don't an account? <Link className="text-blue-600" href={"/register"}>Signup here</Link></p>
  </div>
    
    </div>
  </div>



  );
}
