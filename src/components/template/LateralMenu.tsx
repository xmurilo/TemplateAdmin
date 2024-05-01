import { BellIcon, HomeIcon, SettingsIcon } from "../Icons";
import ItemMenu from "./ItemMenu";

export default function LateralMenu() {
  return (
    <aside>
      <ul>
        <ItemMenu url="/" text="Inicio" icon={HomeIcon} />
        <ItemMenu url="/settings" text="Configurações" icon={SettingsIcon} />
        <ItemMenu url="/notifications" text="Notificações" icon={BellIcon} />
      </ul>
    </aside>
  );
}
