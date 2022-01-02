import React, { useContext } from "react";
import { FirebaseContext } from ".";

export default function useAuth() {
  const firebase = useContext(FirebaseContext);

  return firebase;
}
