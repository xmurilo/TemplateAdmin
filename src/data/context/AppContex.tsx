import { createContext, useEffect, useState } from "react";

interface AppContextProps {
  theme: string;
  toggleTheme: () => void;
}

const AppContext = createContext<AppContextProps>({} as AppContextProps);

export function AppProvider(props: { children: React.ReactNode }) {
  const [theme, setTheme] = useState("dark");

  function toggleTheme(): void {
    const newTheme = theme === "" ? "dark" : "";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  }

  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    if (localTheme) {
      setTheme(localTheme);
    } else {
      setTheme("");
    }
  }, []);

  return <AppContext.Provider value={{ theme, toggleTheme }}>{props.children}</AppContext.Provider>;
}

export default AppContext;
