import { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
//types
import type { ISetActiveLink } from '../../../types';
//styles
import style from './navigation-link.module.scss';

interface INavigationLinkPropsType {
  to: string;
  name: string;
  children: ReactNode;
}

const NavigationLink = ({ to, name, children }: INavigationLinkPropsType): JSX.Element => {
  const activeLinkClass = style['navigation-link--active'];
  const basicLinkClass = style['navigation-link'];

  const setActiveLink = ({ isActive }: ISetActiveLink) =>
    isActive ? `${basicLinkClass}  ${activeLinkClass}` : `${basicLinkClass}`;

  return (
    <NavLink className={setActiveLink} to={to}>
      <span className="visually-hidden">{name}</span>
      {children}
    </NavLink>
  );
};

export default NavigationLink;
