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
        <button
          className={`w-full bg-indigo-500 hover:bg-indigo-400
      text-white rounded-lg px-4 py-3 mt-6`}
          onClick={submit}
        >
          {mode == "login" ? "Entrar" : "Cadastrar"}
        </button>
        <hr className={`my-6 border-gray-300 w-full`} />
        <button
          className={` w-full bg-red-500 hover:bg-red-400
      text-white rounded-lg px-4 py-3 `}
          onClick={submit}
        >
          <Image src={GoogleIcon} alt="tod" />
          Entrar com Google
        </button>
      </div>
    </div>
  );
}
