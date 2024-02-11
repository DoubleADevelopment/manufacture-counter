//components
import Item from './item/item';
//types
import type { UnionComponentsDataForView } from '../../types/data-types';
//styles
import style from './components-list.module.scss';

interface IComponentsListProps {
  data: UnionComponentsDataForView;
}

const ComponentsList = ({ data }: IComponentsListProps): JSX.Element => {
  return (
    <ul className={style['components-list']}>
      {data.map((item) => {
        return <Item item={item} />;
      })}
    </ul>
  );
};

export default ComponentsList;
