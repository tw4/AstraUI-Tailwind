import { FC, ReactNode } from "react";
import { useState } from "react";

export interface DropDownProps {
  children: ReactNode;
  className?: string;
  button: ReactNode;
}

const DropDown: FC<DropDownProps> = ({ button, children, className }) => {
  const [show, setShow] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  return (
    <div
      onClick={() => setShow(!show)}
      className={`relative w-full ${className}`}>
      {button}
      {show && (
        <div className="absolute  left-[-1%] z-40 mt-1 overflow-hidden bg-white rounded-md shadow-lg dark:bg-gray-800">
          <div className="flex flex-col  w-full py-[4px]">{children}</div>
        </div>
      )}
    </div>
  );
};

export default DropDown;
