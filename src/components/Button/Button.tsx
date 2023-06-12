import { FC } from "react";

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {}

const Button: FC<ButtonProps> = ({ children, className, ...rest }) => (
  <>
    <button
      className={`bg-blue-500 text-white px-4 py-2 rounded-md ${className}`}
      {...rest}>
      {children}
    </button>
  </>
);

export default Button;
