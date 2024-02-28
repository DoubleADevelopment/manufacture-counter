//types
import { Link } from 'react-router-dom';
import { IComponentsListDataItem } from '../../../types';
//styles
import style from './component-card.module.scss';

interface ICountersListItemProps {
  item: IComponentsListDataItem;
}

const ComponentCard = ({ item }: ICountersListItemProps): JSX.Element => {
  return (
    <li className={style['component-card']}>
      <h3 className={`${style['component-card__title']} heading-medium content-primary-b`}>
        {item.title}
      </h3>
      <img className={style['component-card__image']} src={item.image} alt="" />
      <Link className={style['component-card__link']} to={item.link}></Link>
    </li>
  );
};

export default ComponentCard;
