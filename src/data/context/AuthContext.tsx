import route from "next/router";
import { ReactNode, createContext, useEffect, useState } from "react";
import firebase from "../../firebase/config";
import User from "@/src/model/User";
import Cookies from "js-cookie";
interface AuthContextProps {
  user: User | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  registerUser: (email: string, password: string) => Promise<void>;
  loginGoogle: () => Promise<void>;
  logout: () => Promise<void>;
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

  async function configureSssion(userFirebase: firebase.User | null) {
    if (userFirebase?.email) {
      const user = await normalizedUser(userFirebase);
      setUser(user);
      manageCookies(true);
      setIsLoading(false);
      return user.email;
    } else {
      setUser(null);
      manageCookies(false);
      setIsLoading(false);
      return false;
    }
  }

  async function login(email: string, password: string) {
    try {
      setIsLoading(true);
      const resp = await firebase.auth().signInWithEmailAndPassword(email, password);
      await configureSssion(resp.user);
      route.push("/");
    } finally {
      setIsLoading(false);
    }
  }

  async function registerUser(email: string, password: string) {
    try {
      setIsLoading(true);
      const resp = await firebase.auth().createUserWithEmailAndPassword(email, password);
      await configureSssion(resp.user);
      route.push("/");
    } finally {
      setIsLoading(false);
    }
  }

  async function loginGoogle() {
    try {
      const resp = await firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider());
      if (resp.user?.email) {
        configureSssion(resp.user);
        route.push("/");
      }
    } finally {
      setIsLoading(false);
    }
  }
  async function logout() {
    try {
      setIsLoading(true);
      await firebase.auth().signOut();
      await configureSssion(null);
    } finally {
      setIsLoading(false);
    }
  }

  // monitorar o token do usuário logado
  useEffect(() => {
    if (Cookies.get("admin-template-cod3r-auth")) {
      const cancel = firebase.auth().onIdTokenChanged(configureSssion);
      return () => cancel();
    } else {
      setIsLoading(false);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        loginGoogle,
        login,
        registerUser,
        logout,
        isLoading,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
