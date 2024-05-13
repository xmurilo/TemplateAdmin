import { useState } from "react";
import AuthInput from "../components/auth/AuthInput";
import GoogleIcon from "../../public/google-logo-48 1.svg";
import Image from "next/image";

export default function Authentincation() {
  const [mode, setMode] = useState<"login" | "register">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function submit() {
    if (mode == "login") {
      console.log("Login");
    } else {
      console.log("Cadastrar");
    }
  }

  return (
    <div className={`flex flex-col h-sreen items-center justify-center`}>
      <div className={`w-1/2`}>
        <h1 className={` text-xl font-bold mb-5`}>
          {mode == "login" ? "Entre com a Sua Conta" : "Cadrastre-se na Plataforma"}
        </h1>
        <AuthInput label="Email" type="email" value={email} valueChanged={setEmail} obrigatory />
        <AuthInput
          label="Password"
          type="password"
          value={password}
          valueChanged={setPassword}
          obrigatory
        />
        
      </div>
    </div>
  );
}
