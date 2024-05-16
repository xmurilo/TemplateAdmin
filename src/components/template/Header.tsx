import Title from "./Title";
import ButtonToggleTheme from "./ButtonToggleTheme";
import useAppData from "@/src/data/hooks/useAppData";
import UserAvatar from "./UserAvatar";

interface HeaderProps {
  title: string;
  subTitle: string;
}

export default function Header(props: HeaderProps) {
  const ctx = useAppData();
  return (
    <header className={`flex`}>
      <Title title={props.title} subTitle={props.subTitle} />
      <div className={`flex flex-grow justify-end items-center`}>
        <ButtonToggleTheme theme={ctx.theme} toggleTheme={ctx.toggleTheme} />
        <UserAvatar className="ml-3" />
      </div>
    </header>
  );
}
