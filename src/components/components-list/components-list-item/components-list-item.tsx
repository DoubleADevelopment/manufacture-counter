import { Link } from 'react-router-dom';
//types
import type { IState } from '../../../types';
//styles
import style from './components-list-item.module.scss';

interface ICountersListItemProps {
  item: IState;
}

const ComponentsListItem = ({ item }: ICountersListItemProps): JSX.Element => {
  return (
    <li className={`${style['components-list-item']} unselectable`}>
      <h3 className={`heading-x-small content-primary-a`}>{item.packageTitle}</h3>
      <img className={style['components-list-item__image']} src={item.packageImage} alt="" />
      <Link className={style['components-list-item__link']} to={item.dataPackageName}>
        <span className="visually-hidden">{item.packageTitle}</span>
      </Link>
    </li>
  );
};

export default ComponentsListItem;
