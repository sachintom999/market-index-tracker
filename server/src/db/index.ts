import { FieldValue } from "firebase-admin/firestore";
import { db } from "..";


async function getUserData(email: string) {
  const userRef = db.collection("userData").doc(email);
  const doc = await userRef.get();
  if (!doc.exists) {
    console.log("No such document!🔴");
    return null
  } else {
    console.log("Document data:", doc.data());
    return doc.data()
  }
}

async function addUserData(email: string, name: string) {
  const newUser = {
    email,
    name,
    thresholds: [],
  };

  const userRef = db.collection("userData").doc(email);
  await userRef.set(newUser);
  const doc = await userRef.get()
  return doc.data()
}

async function addThreshold(email: string, threshold: any) {
  const userRef = db.collection("userData").doc(email);
  const doc = await userRef.get();
  if (!doc.exists) {
    console.log("No such document!🔴");
  } else {
    console.log("Document data:", doc.data());

    const { index, type, value } = threshold;
    const newThreshold = {
      index,
      type,
      value,
    };

    await userRef.update({
      thresholds: FieldValue.arrayUnion(newThreshold),
    });
  }
}

export { addUserData, getUserData, addThreshold };
