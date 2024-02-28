//components
import CountersListItem from '../cards/component-card/component-card';
//types
import { ComponentsListDataType } from '../../types';
//styles
import style from './components-list.module.scss';

interface IComponentsListProps {
  dataList: ComponentsListDataType;
}

const ComponentsList = ({ dataList }: IComponentsListProps): JSX.Element => {
  return (
    <ul className={style['components-list']}>
      {dataList.map((item, i) => {
        return <CountersListItem item={item} key={item.title + i} />;
      })}
    </ul>
  );
};

export default ComponentsList;
