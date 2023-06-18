import { FC, ReactNode } from "react";

export interface BoxProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}

const Box: FC<BoxProps> = ({ children, className, ...rest }) => {
  return (
    <div className={`box ${className}`} {...rest}>
      {children}
    </div>
  );
};

export default Box;
