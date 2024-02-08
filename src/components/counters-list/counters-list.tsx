//components
import CountersListItem from './counter-list-item/counter-list-item';
//data
import { countersListData } from '../../data/counters-list-data';
//styles
import style from './counters-list.module.scss';

const CountersList = (): JSX.Element => {
  return (
    <ul className={style['counters-list']}>
      {countersListData.map((item) => {
        return <CountersListItem item={item} />;
      })}
    </ul>
  );
};

export default CountersList;
