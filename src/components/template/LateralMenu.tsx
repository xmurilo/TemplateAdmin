import { BellIcon, HomeIcon, SettingsIcon } from "../Icons";
import ItemMenu from "./ItemMenu";
import Logo from "./Logo";

export default function LateralMenu() {
  return (
    <aside>
      <div className={` flex items-center justify-center w-20 h-20 bg-gray-950`}>
        <Logo />
      </div>
      <ul>
        <ItemMenu url="/" text="Inicio" icon={HomeIcon} />
        <ItemMenu url="/settings" text="Configurações" icon={SettingsIcon} />
        <ItemMenu url="/notifications" text="Notificações" icon={BellIcon} />
      </ul>
    </aside>
  );
}
