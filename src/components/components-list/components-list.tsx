//components
import CountersListItem from '../cards/component-card/component-card';
//data
import { componentsListData } from '../../data/components-list-data';
//styles
import style from './components-list.module.scss';

const ComponentsList = (): JSX.Element => {
  return (
    <ul className={style['components-list']}>
      {componentsListData.map((item, i) => {
        return <CountersListItem item={item} key={item.title + i} />;
      })}
    </ul>
  );
};

export default ComponentsList;
