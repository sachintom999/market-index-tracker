"use client";
import { useAuth } from "@/contexts/auth";
import { handleSignUp } from "@/firebase/auth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState('');
  const { setCurrentUser } = useAuth();
  const [error, setError] = useState('');
  const router = useRouter()

  const performSignup = () => {
    console.log({name},"....")
    const response = handleSignUp(email, password,name);
    setCurrentUser(response.user);
    router.push("/dashboard")


  };

  return (
    <>

    
    {/* <div className="flex flex-col w-1/2 justify-center items-center bg-slate-300">
      <h1>Register</h1>
      <input
      className="text-black"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
      className="text-black"
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
    </div> */}

    <div className="min-h-screen flex items-center justify-center bg-gray-100">
    <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
      <h1 className="text-2xl font-bold mb-6 text-center">Register</h1>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form onSubmit={(e)=>{
        e.preventDefault()
        performSignup()
      }}>
        <div className="mb-4">
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
        </div>
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
          Register
        </button>
      </form>
      <div className="flex justify-center mt-3">

    <p className="text-gray-600 m-auto">Already have an account? <Link className="text-blue-600" href={"/login"}>Login here</Link></p>
      </div>
    </div>
  </div>
  
  </>



  );
};

export default Register;
