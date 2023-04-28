"use clinet";

interface AvatarProps {
  src?: string | null | undefined
}

import Image from "next/image";
const Avatar: React.FC<AvatarProps> = ({
  src
}) => {
  return (
    <Image
      alt="Avatar"
      className="rounded-full"
      src={ src || "/images/placeholder.jpg"}
      height="30"
      width="30"
    />
  );
};

export default Avatar;
