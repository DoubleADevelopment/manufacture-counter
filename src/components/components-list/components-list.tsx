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
        return (
          <li key={item.UNID}>
            <h3>{item.name}</h3>
          </li>
        );
      })}
    </ul>
  );
};

export default ComponentsList;
