import { FC, ReactNode } from "react";

export interface TextProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
  className?: string;
}

const Text: FC<TextProps> = ({ children, className, ...rest }) => {
  return (
    <span className={`text-[#333333] ${className}`} {...rest}>
      {children}
    </span>
  );
};

export default Text;
