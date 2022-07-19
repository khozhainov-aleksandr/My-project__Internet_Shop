import React from 'react';
import './Button.scss';

type Props = {
  name: string;
};

export const Button: React.FC<Props> = ({ name }) => {
  return (
    <button
      type="button"
      className="mainButton"
    >
      {name}
    </button>
  );
};
