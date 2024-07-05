import express from "express"
import { verifyToken } from "../middlewares";
import { addUserData, getUserData } from "../db";

export const router = express.Router()


router.post("/authenticate", verifyToken, async (req, res) => {
    console.log("post...");
  
    // sendEmailNotification("spamsachintom@gmail.com","AAPL","122")
  
  
    // const snapshot = await db
    //   .collection("users")
    //   .where("email", "==", req.user)
    //   .get();
    // if (!snapshot.empty) {
    //   console.log(44);
  
    //   const userRecord = snapshot.docs[0].data();
    //   console.log({ userRecord });
    //   const { firstName } = userRecord;
    // } else {
    //   console.log(48);
  
    //   const newUser = {
    //     email: req.user,
    //     firstName: "John ",
    //     lastName: "Doe",
    //   };
  
    //   await db.collection("users").add(newUser);
    // }
  
    let user1
    
    console.log(req.body)
    const email = req.user
    const userData = await getUserData(email)
    console.log({userData})

   
    

    
    
    
    if (!userData)
        {
             console.log("4...")
            const {name} = req.body
            console.log({name})

            const qq = await addUserData(email,name)
            console.log({qq})

            user1 = {
                name:qq.name,email:qq.email

            }
            
        }
        else{

            user1 = {
                name:userData.name,email:userData.email
        
            }
        
        }


    
    
    
    
    
        res.json({  user: req.user , user1 });
  });