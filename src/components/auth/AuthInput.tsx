interface AuthInputProps {
  label: string;
  value: any;
  obrigatory?: boolean;
  notRenderWhen?: boolean;
  type?: "text" | "email" | "password";
  valueChanged: (newValue: any) => void;
}

export default function AuthInput(props: AuthInputProps) {
  return props.notRenderWhen ? null : (
    <div className="flex flex-col ">
      <label>{props.label}</label>
      <input
        type={props.type ?? "text"}
        value={props.value}
        onChange={e => props?.valueChanged(e.target.value)}
        required={props.obrigatory}
      />
    </div>
  );
}
