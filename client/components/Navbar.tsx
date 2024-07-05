"use client";
import { useAuth } from "@/contexts/auth";
import { handleLogout } from "@/firebase/auth";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const { currentUser, setCurrentUser, username, setUsername } = useAuth();
  const router = useRouter();

  const performLogout = () => {
    handleLogout();
    setCurrentUser(null);
    setUsername(null);
    router.push("/login");
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white text-2xl font-bold">
          IndexPulse
        </Link>
        <div>
          {currentUser ? (
            <div className="flex items-center">
              <span className="text-white mr-4">{username?.split(" ")[0]}</span>
              <button
                onClick={performLogout}
                className="text-blue-500 px-4 py-2 rounded"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link href="/login" className="text-blue-500  px-4 py-2 rounded">
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
