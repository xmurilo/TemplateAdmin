import Title from "./Title";
import ButtonToggleTheme from "./ButtonToggleTheme";
import useAppData from "@/src/data/hooks/useAppData";

interface HeaderProps {
  title: string;
  subTitle: string;
}

export default function Header(props: HeaderProps) {
  const ctx = useAppData();
  return (
    <header className={`flex`}>
      <Title title={props.title} subTitle={props.subTitle} />
      <div className={`flex flex-grow justify-end`}>
        <ButtonToggleTheme theme={ctx.theme} toggleTheme={ctx.toggleTheme} />
      </div>
    </header>
  );
}
