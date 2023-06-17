import { FC, HTMLAttributes } from "react";

export interface VStackProps extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
}

const VStack: FC<VStackProps> = ({ children, className, ...rest }) => {
  return (
    <div {...rest} className={`flex flex-col ${className}`}>
      {children}
    </div>
  );
};

export default VStack;
