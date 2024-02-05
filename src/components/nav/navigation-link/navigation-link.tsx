import { NavLink } from 'react-router-dom';
//styles
import style from './navigation-link.module.scss';
import { ReactNode } from 'react';

interface INavigationLinkPropsType {
  to: string;
  name: string;
  children: ReactNode;
}

const NavigationLink = ({ to, name, children }: INavigationLinkPropsType): JSX.Element => {
  return (
    <NavLink className={style['navigation-link']} to={to}>
      <span className="visually-hidden">{name}</span>
      {children}
    </NavLink>
  );
};

export default NavigationLink;
