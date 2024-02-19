//components
import { ItemCardFull } from '..';
//variables
import { UnitsOfMeasurementText } from '../../variables/text-variables';
//types
import type { ItemsListDataType } from '../../types/data-types';
//styles
import style from './items-list.module.scss';

interface IComponentsListProps {
  data: ItemsListDataType;
}

const ItemsList = ({ data }: IComponentsListProps): JSX.Element => {
  return (
    <ul className={style['items-list']}>
      {data.map((item) => {
        return (
          <ItemCardFull
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
