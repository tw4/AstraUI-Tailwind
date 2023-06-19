import { FC, HTMLAttributes, ReactNode, useEffect } from "react";
import { useState } from "react";

export interface ModalProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
  isOpen: boolean;
}

const Modal: FC<ModalProps> = ({ isOpen, className, children, ...rest }) => {
  return (
    <>
      {isOpen && (
        <>
          <div className="absolute inset-0 flex justify-center items-center w-[100vw] h-[100vh] backdrop-brightness-50 z-40">
            <div
              className={`absolute p-5 bg-white shadow-xl z-50  ${className}`}
              {...rest}>
              {children}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Modal;
