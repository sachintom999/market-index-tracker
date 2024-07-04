import { admin } from "..";
import { NextFunction, Request, Response } from "express";

export const verifyToken = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {

  const idToken = req.headers.authorization?.split("Bearer ")[1];
  if (idToken) {
    try {
      const decodedToken = await admin.auth().verifyIdToken(idToken);
      console.log(decodedToken.email);
      req.user = decodedToken.email;

      next();
    } catch (error) {
      res.status(401).send("Unauthorized");
    }
  } else {
    res.status(401).send("Unauthorized");
  }
};