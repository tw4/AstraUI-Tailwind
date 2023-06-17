import { FC, HTMLAttributes } from "react";

export interface InputProps extends HTMLAttributes<HTMLInputElement> {
  className?: string;
}

const Input: FC<InputProps> = ({ className, ...rest }) => {
  return (
    <input
      className={`bg-white border-solid border-[#E7E7E7] border-[1px] rounded-[6px] px-[12px] py-[6px] ${className}`}
      {...rest}
    />
  );
};

export default Input;
