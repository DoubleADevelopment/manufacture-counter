//types
import type { IItemCardShort } from '../../../types/data-types';
//styles
import style from './item-card-short.module.scss';

interface IItemCardShortProps {
  item: IItemCardShort;
}

const ItemCardShort = ({ item }: IItemCardShortProps): JSX.Element => {
  return (
    <article className={style['item-card-short']}>
      <div className={style['item-card-short__wrap']}>
        <h3 className={`content-primary-a heading-small`}>{item?.name}</h3>
        <p className={`content-primary-a paragraph-small`}>
          <span className={`paragraph-secondary-a`}>Numer:</span> {item?.itemNumber}
        </p>
        <p className={`content-primary-a paragraph-small`}>
          <span className={`content-secondary-a`}>Opakowanie:</span> {item?.packagingInfo}
        </p>
      </div>
      <img
        className={style['item-card-short__image']}
        src={item?.image}
        alt={item?.description}
        width={150}
        height={150}
      />
    </article>
  );
};
export default ItemCardShort;
