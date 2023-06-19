import { FC, HTMLAttributes, ReactNode } from "react";

export interface CheckboxProps extends HTMLAttributes<HTMLInputElement> {
  className?: string;
}

const Checkbox: FC<CheckboxProps> = ({ className, children, ...rest }) => {
  return (
    <label className={className}>
      <input type="checkbox" {...rest} />
      {children}
    </label>
  );
};

export default Checkbox;
