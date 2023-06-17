import { FC, HTMLAttributes } from "react";

export interface HStackProps extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
}

const HStack: FC<HStackProps> = ({ children, className, ...rest }) => {
  return (
    <div className={` flex flex-row ${className}`} {...rest}>
      {children}
    </div>
  );
};

export default HStack;
