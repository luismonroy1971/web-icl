import React, { FC } from 'react';

interface ButtonProps {
  color?: string;
  children: React.ReactNode;
}

export const Button: FC<ButtonProps> = ({ children, color }) => {
  return (
    <button
      className={`${
        color ? color : 'bg-primary'
      } text-white font-lato rounded-md px-2 py-2 w-full`}
    >
      {children}
    </button>
  );
};
