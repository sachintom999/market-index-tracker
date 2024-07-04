"use client";
import { useAuth } from "@/contexts/auth";
import { handleLogout } from "@/firebase/auth";

import Link from "next/link";

export default function Navbar() {
  const { currentUser, setCurrentUser } = useAuth();
  console.log({ currentUser });

  const performLogout = () => {
    handleLogout();
    setCurrentUser(null);
  };

  return (
    <div>
      User: {currentUser ? currentUser.email : "Not logged in"}
      <div>
        {currentUser ? (
          <button onClick={performLogout} className="bg-green-400">
            Logout
          </button>
        ) : (
          <div className="flex gap-4">
            <button>
              <Link href="/login">Login</Link>
            </button>
            <button>
              <Link href="/register">Register</Link>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
