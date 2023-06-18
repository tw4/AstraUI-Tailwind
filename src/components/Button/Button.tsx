import { FC } from "react";

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {}

const Button: FC<ButtonProps> = ({ children, className, ...rest }) => (
  <>
    <button
      className={`flex flex-row items-center bg-[#1890FF] text-white px-[15px] py-[4px] rounded-[2px] hover:bg-[#40A9FF]  ${className}`}
      {...rest}>
      {children}
    </button>
  </>
);

export default Button;
