import Link from "next/link";

interface ItemMenuProps {
  url?: string;
  text: string;
  icon: any;
  className?: string;
  onClick?: (e: any) => void;
}

export default function ItemMenu(props: ItemMenuProps) {
  function renderContent(): JSX.Element {
    return (
      <a
        className={`flex flex-col items-center justify-center h-20 w-24
        text-gray-600 ${props.className}`}
      >
        {props.icon}
        <span className={`text-xs font-light `}>{props.text}</span>
      </a>
    );
  }

  return (
    <li onClick={props.onClick} className={`hover:bg-gray-100 cursor-pointer `}>
      {props.url ? (
        <Link legacyBehavior href={props.url}>
          {renderContent()}
        </Link>
      ) : (
        renderContent()
      )}
    </li>
  );
}


