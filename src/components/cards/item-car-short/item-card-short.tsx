//variables
import { UnitsOfMeasurementText } from '../../../variables/text-variables';
//types
import type { IItemCardData } from '../../../types/data-types';
//styles
import style from './item-card-short.module.scss';

interface IItemCardShortProps {
  item: IItemCardData;
  measurementText: UnitsOfMeasurementText;
}

const ItemCardShort = ({ item, measurementText }: IItemCardShortProps): JSX.Element => {
  return (
    <article className={style['item-card-short']}>
      <div className={style['item-card-short__wrap']}>
        <h3 className={`content-primary-a heading-small`}>{item && item.name}</h3>
        <p className={`content-primary-a paragraph-small`}>
          <span className={`paragraph-secondary-a`}>Numer:</span> {item && item.itemNumber}
        </p>
        <p className={`content-primary-a paragraph-small`}>
          <span className={`content-secondary-a`}>Opakowanie:</span> {item && item.packagingInfo}
        </p>
      </div>
      <img
        className={style['item-card-short__image']}
        src={item && item.image}
        alt={item && item.description}
        width={150}
        height={150}
      />
      <div className={`${style['item-card-short__amount']} paragraph-primary-a label-medium`}>
        {measurementText}
        <span className="paragraph-primary-a heading-medium">{item && item.amount}</span>
      </div>
    </article>
  );
};
export default ItemCardShort;
