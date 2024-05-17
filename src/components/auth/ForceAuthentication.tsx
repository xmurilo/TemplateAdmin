import Head from "next/head";
import Image from "next/image";
import loading from "../../../public/images/load.gif";
import useAuth from "@/src/data/hooks/useAuth";
import router from "next/router";

interface ForceAuthenticationProps {
  children: React.ReactNode;
}

export default function ForceAuthentication(props: ForceAuthenticationProps): JSX.Element | null {
  const { user, isLoading } = useAuth();
  function renderContent() {
    return <>{props.children}</>;
  }

  function renderLoading() {
    return (
      <div className={`flex justify-center items-center h-screen`}>
        <Image src={loading} alt="loading" />
      </div>
    );
  }

  if (!isLoading && user?.email) {
    return renderContent();
  } else if (isLoading) {
    return renderLoading();
  } else {
    router.push("/authentication");
    return null;
  }
}
