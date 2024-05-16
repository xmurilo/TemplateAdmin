import route from "next/router";
import { ReactNode, createContext, useState } from "react";
import firebase from "../../firebase/config";
import User from "@/src/model/User";
import Cookies from "js-cookie";
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

function manageCookies(logged: boolean) {
  if (logged) {
    Cookies.set("admin-template-cod3r-auth", logged.toString(), {
      expires: 7,
    });
  } else {
    Cookies.remove("admin-template-auth");
  }
}

export function AuthProvider(props: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  async function configureSssion(userFirebase: firebase.User) {
    if (userFirebase?.email) {
      const user = await normalizedUser(userFirebase);
      setUser(user);
      manageCookies(true);
      setIsLoading(false);
      return user.email;
    } else {
      setUser(null);
      manageCookies(false);
      setIsLoading(true);
      return false;
    }
  }

  async function loginGoogle() {
    try {
      const resp = await firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider());
      if (resp.user?.email) {
        configureSssion(resp.user);
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
