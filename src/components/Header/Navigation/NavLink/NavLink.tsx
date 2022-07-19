import React from 'react';
import './NavLink.scss';

type Props = {
  name: string;
};

export const NavLink: React.FC<Props> = ({ name }) => {
  return (
    <a
      href="/#/"
      className="mainLinks"
    >
      {name}
    </a>
  );
};
