//types
import { IComponentsListDataItem } from '../../../types';
//styles
import style from './counter-list-item.module.scss';

interface ICountersListItemProps {
  item: IComponentsListDataItem;
}

const CountersListItem = ({ item }: ICountersListItemProps): JSX.Element => {
  return (
    <li className={style['counters-list-item']}>
      <h3 className={`${style['counters-list-item__title']} heading-medium`}>{item.title}</h3>
      <img className={style['counters-list-item__image']} src={item.image} alt="" />
      <a className={style['counters-list-item__link']} href={item.link}></a>
    </li>
  );
};

export default CountersListItem;
