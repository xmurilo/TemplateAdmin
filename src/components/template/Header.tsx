import Title from "./Title";

interface HeaderProps {
  title: string;
  subTitle: string;
}

export default function Header(props: HeaderProps) {
  return (
    <header>
      <Title title={props.title} subTitle={props.subTitle} />
    </header>
  );
}
