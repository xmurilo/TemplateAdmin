import useAppData from "@/src/data/hooks/useAppData";
import Content from "./Content";
import Header from "./Header";
import LateralMenu from "./LateralMenu";

interface LayoutProps {
  title: string;
  subTitle: string;
  children?: React.ReactNode;
}

export default function Layout(props: LayoutProps) {
  const { theme } = useAppData();
  return (
    <div className={`${theme} flex h-screen w-screen`}>
      <LateralMenu />
      <div className={`flex flex-col w-full p-7  bg-gray-300 dark:bg-gray-900  `}>
        <Header title={props.title} subTitle={props.subTitle} />
        <Content>{props.children}</Content>
      </div>
    </div>
  );
}
