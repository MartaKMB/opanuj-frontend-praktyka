import React from 'react';

type ButtonProps = {
  handleOnClick: () => void;
  children: React.ReactNode;
};

export const ButtonComponent: React.FC<ButtonProps> = ({
  handleOnClick,
  children,
}: ButtonProps) => (
  <button
    className="bg-blue-200 px-2 py-4 text-lg hover:bg-blue-500 hover:text-white rounded-md"
    onClick={handleOnClick}
  >
    {children}
  </button>
);
