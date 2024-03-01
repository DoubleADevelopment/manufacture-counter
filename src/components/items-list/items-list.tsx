//components
// import { ItemCardFull } from '..';
import ItemsListItem from './items-list-item/items-list-item';
//variables
import { UnitsOfMeasurementText } from '../../variables/';
//types
import type { ItemsDataToDisplayListType } from '../../types/';
//styles
import style from './items-list.module.scss';

interface IComponentsListProps {
  data: ItemsDataToDisplayListType;
}

const ItemsList = ({ data }: IComponentsListProps): JSX.Element => {
  return (
    <ul className={style['items-list']}>
      {data.map((item) => {
        return (
          <ItemsListItem
            item={item}
            measurementText={UnitsOfMeasurementText.AMOUNT}
            key={item.UNID}
          />
        );
      })}
    </ul>
  );
};

export default ItemsList;
