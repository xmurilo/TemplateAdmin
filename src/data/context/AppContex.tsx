import { createContext, useState } from "react";

type Theme = "dark" | "";

interface AppContextProps {
  theme: Theme;
  toggleTheme: () => void;
}

const AppContext = createContext<AppContextProps>({} as AppContextProps);

export function AppProvider(props: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("");

  function toggleTheme(): void {
    setTheme(theme === "" ? "dark" : "");
  }

  return <AppContext.Provider value={{ theme, toggleTheme }}>{props.children}</AppContext.Provider>;
}

export default AppContext;
