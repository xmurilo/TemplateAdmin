import { MoonIcon, SunIcon } from "../Icons";

interface ButtonToggleThemeProps {
  theme: string;
  toggleTheme: () => void;
}

export default function ButtonToggleTheme(props: ButtonToggleThemeProps) {
  return props.theme === "dark" ? (
    <div
      onClick={props.toggleTheme}
      className={`sm:flex items-center cursor-pointer bg-gradient-to-r from-yellow-300 to-orange-600 sm:w-14 lg:w-24 h-8 p-1 rounded-full `}
    >
      <div
        className={` 
      flex items-center justify-center bg-white text-orange-600 w-6 h-6 rounded-full`}
      >
        {SunIcon(5)}
      </div>
      <div className={` hidden lg:flex items-center ml-4 text-white`}>
        <span className={`text-sm`}>Claro</span>
      </div>
    </div>
  ) : (
    <div
      onClick={props.toggleTheme}
      className={` sm:flex items-center  sm:justify-end cursor-pointer bg-gradient-to-r from-gray-500 to-gray-900 sm:w-14 lg:w-24 h-8 p-1 rounded-full `}
    >
      <div className={`hidden lg:flex items-center mr-1 text-gray-300`}>
        <span className={`text-sm`}>Escuro</span>
      </div>
      <div
        className={` 
        flex items-center justify-center bg-black text-yellow-300 w-6 h-6 rounded-full`}
      >
        {MoonIcon(5)}
      </div>
    </div>
  );
}
