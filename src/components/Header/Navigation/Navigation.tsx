import React from 'react';
import { NavLink } from './NavLink';
import { Button } from '../../Generic/Button';
import './Navigation.scss';

export const Navigation: React.FC = () => {
  return (
    <nav className="navigation">
      <div className="container">
        <div className="navigation__wrapper">
          <img
            className="navigation__logo"
            src="./images/icons/main-logo.svg"
            alt="Main Logo Developers"
          />

          <div className="navigation__listAndButtonWrapper">
            <ul className="navigation__list">
              <li className="navigation__item">
                <NavLink name="Услуги" />
              </li>

              <li className="navigation__item">
                <NavLink name="Портфолио" />
              </li>

              <li className="navigation__item">
                <NavLink name="Этапы" />
              </li>

              <li className="navigation__item">
                <NavLink name="Дизайнеры" />
              </li>
            </ul>

            <Button name="Заказать" />
          </div>
        </div>
      </div>
    </nav>
  );
};
