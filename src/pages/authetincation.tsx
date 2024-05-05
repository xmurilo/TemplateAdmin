import { useState } from "react";
import AuthInput from "../components/auth/AuthInput";

export default function Authentincation() {
  const [email, setEmail] = useState<"login" | "register">("login");
  const [password, setPassword] = useState("");

  return (
    <div>
      <h1>Authentincation</h1>
      <AuthInput label="Email" type="email" value={email} valueChanged={setEmail} obrigatory />
      <AuthInput
        label="Password"
        type="password"
        value={password}
        valueChanged={setPassword}
        obrigatory
      />
    </div>
  );
}
