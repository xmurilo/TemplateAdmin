/* eslint-disable @next/next/no-img-element */

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
    <div className={`flex h-sreen items-center justify-center`}>
      <div className=" hidden md:block w-1/2 lg:w-2/3 ">
        <img
          src="https://source.unsplash.com/random"
          alt="Imagem da Tela de Autenticação"
          className="h-screen w-full object-cover"
        />
      </div>
      <div className={`m-10 w-full md:w-1/2 lg:w-1/3  `}>
        <h1 className={` text-3xl font-bold mb-5`}>
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
          {/* <Image src={GoogleIcon} alt="tod" /> */}
          Entrar com Google
        </button>
        {mode === "login" ? (
          <p className="mt-8">
            Novo por aqui?
            <a
              onClick={() => setMode("register")}
              className="text-blue-500 hover:text-blue-700 font-semibold cursor-pointer"
            > Crie uma conta gratuitamente</a>
          </p>
        ) : (
          <p className="mt-8">
            Ja faz parte da nossa comunidade?
            <a
              onClick={() => setMode("login")}
              className="text-blue-500 hover:text-blue-700 font-semibold cursor-pointer"
            > Entre com suas credenciais</a>
          </p>
        )}
        
      </div>
    </div>
  );
}
