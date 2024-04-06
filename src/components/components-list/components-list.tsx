//components
import ComponentsListItem from './components-list-item/components-list-item';
//types
import { IState } from '../../types';
//styles
import style from './components-list.module.scss';

interface IComponentsListProps {
  dataList: IState[];
}

const ComponentsList = ({ dataList }: IComponentsListProps): JSX.Element => {
  return (
    <ul className={style['components-list']}>
      {dataList.map((item) => {
        return <ComponentsListItem item={item} key={item.dataPackageUNID} />;
      })}
    </ul>
  );
};

export default ComponentsList;
