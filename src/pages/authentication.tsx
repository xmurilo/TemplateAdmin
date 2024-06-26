/* eslint-disable @next/next/no-img-element */

import { useState } from "react";
import AuthInput from "../components/auth/AuthInput";
import { WarningIcon } from "../components/Icons";
import GoogleIcon from "../../public/google-logo-48 1.svg";
import Image from "next/image";
import useAuth from "../data/hooks/useAuth";

export default function Authentincation() {
  const { login, registerUser, loginGoogle } = useAuth();

  const [error, setError] = useState<any>(null);
  const [mode, setMode] = useState<"login" | "register">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function showError(msg: string, timeInSeconds = 5) {
    setError(msg);
    setTimeout(() => setError(null), timeInSeconds * 1000);
  }

  async function submit() {
    try {
      if (mode == "login") {
        await login(email, password);
      } else {
        await registerUser(email, password);
      }
    } catch (e: any) {
      showError(e?.message ?? "Erro desconhecido!");
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
        {error ? (
          <div
            className={`flex items-center bg-red-400 text-white py-3 px-5 my-2 border border-red-700 rounded`}
          >
            {WarningIcon()} <span className="ml-3">{error}</span>
          </div>
        ) : (
          false
        )}

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
          className={`flex justify-center gap-4 items-center w-full hover:bg-black hover:text-white transition duration-450 rounded-lg px-4 py-3`}
          onClick={loginGoogle}
        >
          <Image src={GoogleIcon} alt="Google Icon" />
          Entrar com Google
        </button>

        {mode === "login" ? (
          <p className="mt-8">
            Novo por aqui?
            <a
              onClick={() => setMode("register")}
              className="text-blue-500 hover:text-blue-700 font-semibold cursor-pointer"
            >
              {" "}
              Crie uma conta gratuitamente
            </a>
          </p>
        ) : (
          <p className="mt-8">
            Ja faz parte da nossa comunidade?
            <a
              onClick={() => setMode("login")}
              className="text-blue-500 hover:text-blue-700 font-semibold cursor-pointer"
            >
              {" "}
              Entre com suas credenciais
            </a>
          </p>
        )}
      </div>
    </div>
  );
}
