//components
import { ItemCardFull } from '..';
//types
import type { UnionComponentsDataForView } from '../../types/data-types';
//styles
import style from './items-list.module.scss';

interface IComponentsListProps {
  data: UnionComponentsDataForView;
}

const ItemsList = ({ data }: IComponentsListProps): JSX.Element => {
  return (
    <ul className={style['items-list']}>
      {data.map((item) => {
        const itemCardFull = {
          UNID: item.UNID,
          name: item.name,
          description: item.description,
          itemNumber: item.itemNumber,
          packagingInfo: item.packagingInfo,
          image: item.image,
          amount: item.amount,
        };
        return <ItemCardFull item={itemCardFull} key={item.UNID} />;
      })}
    </ul>
  );
};

export default ItemsList;
