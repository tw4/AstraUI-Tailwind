import { FC, ReactNode } from "react";

export interface MenuItemProps {
  children: ReactNode;
  className?: string;
}

const MenuItem: FC<MenuItemProps> = ({ children, className, ...rest }) => {
  return (
    <div
      className={`flex flex-row px-[12px] py-[5px] hover:bg-[#F5F5F5] ${className}`}
      {...rest}>
      {children}
    </div>
  );
};

export default MenuItem;
