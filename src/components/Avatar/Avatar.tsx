import { FC } from "react";

export interface AvatarProps {
  className?: string;
  href: string;
}

const Avatar: FC<AvatarProps> = ({ className, href, ...rest }) => {
  return <img src={href} className={`rounded-full ${className}`} {...rest} />;
};

export default Avatar;
