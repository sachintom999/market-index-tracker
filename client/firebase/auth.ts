import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "./config";
import { useValidateToken } from "@/hooks/validateToken";

const handleSignUp = async (email: string, password: string) => {
  
  try {
    
    const res = await createUserWithEmailAndPassword(auth, email, password);
 
  
  const token = await auth.currentUser?.getIdToken();
  console.log({ token });

  if (token) {
    const response = await useValidateToken(token);
    console.log({ response });
  }


} catch (error) {

  console.log({error})
    
}




};

const handleLogin = async (email: string, password: string) => {
  await signInWithEmailAndPassword(auth, email, password);
  const token = await auth.currentUser?.getIdToken();
  console.log({ token });

  if (token) {
    const response = await useValidateToken(token);

    console.log({ response });
  }
};

export { handleSignUp, handleLogin };
