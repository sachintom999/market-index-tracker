"use client";
import { useAuth } from "@/contexts/auth";
import { handleLogout } from "@/firebase/auth";

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
      <p>
        {currentUser ? (
          <button onClick={performLogout} className="bg-green-400">
            Logout
          </button>
        ) : (
          <button className="bg-blue-500">Login</button>
        )}
      </p>
    </div>
  );
}
