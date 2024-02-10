//components
import CountersListItem from './counter-list-item/counter-list-item';
//data
import { componentsListData } from '../../data/components-list-data';
//styles
import style from './counters-list.module.scss';

const CountersList = (): JSX.Element => {
  return (
    <ul className={style['counters-list']}>
      {componentsListData.map((item, i) => {
        return <CountersListItem item={item} key={item.title + i} />;
      })}
    </ul>
  );
};

export default CountersList;
