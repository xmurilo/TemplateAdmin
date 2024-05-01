import { BellIcon, HomeIcon, LogoutIcon, SettingsIcon } from "../Icons";
import ItemMenu from "./ItemMenu";
import Logo from "./Logo";

export default function LateralMenu() {
  return (
    <aside
      className={`flex flex-col 
    bg-gray-200 text-gray-700 
      dark:bg-slate-900 dark:text-gray-200`}
    >
      <div className={` flex items-center justify-center w-24 h-20 bg-gray-950`}>
        <Logo />
      </div>
      <ul className={`flex-grow`}>
        <ItemMenu url="/" text="Inicio" icon={HomeIcon} />
        <ItemMenu url="/settings" text="Configurações" icon={SettingsIcon} />
        <ItemMenu url="/notifications" text="Notificações" icon={BellIcon} />
      </ul>
      <ul>
        <ItemMenu
          text="Sair"
          icon={LogoutIcon}
          onClick={() => console.log("Sair")}
          className={`
          text-[#FD4056] 
          dark:text-red-400 
          hover:bg-red-600 
          hover:text-white
          dark:hover:text-white`}
        />
      </ul>
    </aside>
  );
}
