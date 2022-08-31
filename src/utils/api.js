import { collection, getDocs, query } from "firebase/firestore";
import { db } from "../firebase";

export const getData = async (name) => {
  const result = await getDocs(query(collection(db, name)));
  return result;
}