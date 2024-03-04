//types
import { Link } from 'react-router-dom';
import { IComponentData } from '../../../types';
//styles
import style from './components-list-item.module.scss';

interface ICountersListItemProps {
  item: IComponentData;
}

const ComponentsListItem = ({ item }: ICountersListItemProps): JSX.Element => {
  return (
    <li className={style['components-list-item']}>
      <h3 className={`${style['components-list-item__title']} heading-medium content-primary-b`}>
        {item.title}
      </h3>
      <img className={style['components-list-item__image']} src={item.image} alt="" />
      <Link className={style['components-list-item__link']} to={item.link}>
        <span className="visually-hidden">{item.title}</span>
      </Link>
    </li>
  );
};

export default ComponentsListItem;
