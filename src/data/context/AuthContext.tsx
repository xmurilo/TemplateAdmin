import route from "next/router";
import { ReactNode, createContext, useState } from "react";
import firebase from "../../firebase/config";
import User from "@/src/model/User";

interface AuthContextProps {
  user: User | null;
  loginGoogle: () => Promise<void>;
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

async function normalizedUser(userFirebase: firebase.User): Promise<User> {
  const token = await userFirebase.getIdToken();
  return {
    uid: userFirebase.uid,
    name: userFirebase.displayName || "",
    email: userFirebase.email || "",
    token,
    provider: userFirebase.providerData[0]?.providerId || "",
    imageUrl: userFirebase.photoURL || "",
  };
}

export function AuthProvider(props: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  async function loginGoogle() {
    try {
      const resp = await firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider());

      if (resp.user?.email) {
        const user = await normalizedUser(resp.user);
        setUser(user);
        route.push("/");
      }
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <AuthContext.Provider value={{ user, loginGoogle }}>{props.children}</AuthContext.Provider>
  );
}

export default AuthContext;
