import { FC, ReactNode } from "react";

export interface DividerProps extends React.HTMLAttributes<HTMLHRElement> {
  children?: ReactNode;
  className?: string;
}

const Divider: FC<DividerProps> = ({ children, className, ...rest }) => {
  return (
    <hr className={`border-[#333333] ${className}`} {...rest}>
      {children}
    </hr>
  );
};

export default Divider;
