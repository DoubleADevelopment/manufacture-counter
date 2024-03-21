//components
import OverviewListItem from '../overview-list-item/overview-list-item';
//types
import { ItemsDataToDisplayListType } from '../../../types';
//styles
import style from './component-overview-list.module.scss';

interface IComponentOverviewListProps {
  data: ItemsDataToDisplayListType;
}

const ComponentOverviewList = ({ data }: IComponentOverviewListProps): JSX.Element => {
  return (
    <ul className={style['component-overview__list']}>
      {data.map((item) => {
        return <OverviewListItem item={item} key={item.UNID} />;
      })}
    </ul>
  );
};

export default ComponentOverviewList;
