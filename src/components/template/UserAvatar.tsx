import avatarDefault from "../../../public/images/default-avatar.svg";
import useAuth from "@/src/data/hooks/useAuth";
import Image from "next/image";
import Link from "next/link";

interface UserAvatarProps {
  className?: string;
}
export default function UserAvatar(props: UserAvatarProps) {
  const { user } = useAuth();
  return (
    <Link href={"/profile"}>
      <Image
        src={user?.imageUrl ?? avatarDefault}
        alt="avatar do usuario"
        className={`h-10 w-10 rounded-full cursor-pointer ${props.className}`}
        width={100} height={100}
      />
    </Link>
  );
}
