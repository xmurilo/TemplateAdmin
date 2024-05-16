import { ReactNode, createContext, useState } from "react";
import firebase from "../../firebase/config";
import User from "@/src/model/User";

interface AuthContextProps {
  user: User | null;
  loginGoogle: () => Promise<void>;
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);



export function AuthProvider(props: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  async function loginGoogle() {

  }

  return (
    <AuthContext.Provider value={{ user, loginGoogle }}>{props.children}</AuthContext.Provider>
  );
}

export default AuthContext;
