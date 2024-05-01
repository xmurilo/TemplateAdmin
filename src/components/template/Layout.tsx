import Content from "./Content";
import Header from "./Header";
import LateralMenu from "./LateralMenu";

interface LayoutProps {
  title: string;
  subTitle: string;
  children?: React.ReactNode;
}

export default function Layout(props: LayoutProps) {
  return (
    <div>
      <LateralMenu />
      <Header title={props.title} subTitle={props.subTitle} />
      <Content>{props.children}</Content>
    </div>
  );
}
