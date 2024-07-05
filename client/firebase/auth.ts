import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "./config";
import { useValidateToken } from "@/hooks/validateToken";

const handleSignUp = async (
  email: string,
  password: string,
  fullName: string
) => {
  // const { setCurrentUser } = useAuth();

  try {
    await createUserWithEmailAndPassword(auth, email, password);

    const token = await auth.currentUser?.getIdToken();
    console.log({ token });

    if (token) {
      const response = await useValidateToken(token, fullName);
      console.log({ response });

      // setCurrentUser(response.user);
    }
  } catch (error) {
    console.log({ error });
  }
};

const handleLogin = async (email: string, password: string) => {
  await signInWithEmailAndPassword(auth, email, password);
  const token = await auth.currentUser?.getIdToken();
  console.log({ token });

  if (token) {
    const response = await useValidateToken(token);

    console.log({ response });

    return response;
  }
};

const handleLogout = () => {
  

  signOut(auth)
    .then(() => {
      // Sign-out successful.

      console.log("User signed out successfully.");
    })
    .catch((error) => {
      // An error happened.
      console.error("Error signing out: ", error);
    });
};

export { handleSignUp, handleLogin, handleLogout };
