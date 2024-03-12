import { Link } from 'react-router-dom';
//variables
import { CounterText, InterfaceText } from '../../../variables';
//types
import type { IItemDataToDisplay } from '../../../types/';
//style
import style from './items-list-item.module.scss';

interface IItemsListItemProps {
  item: IItemDataToDisplay;
}

const ItemsListItem = ({ item }: IItemsListItemProps): JSX.Element => {
  const {
    UNID,
    productName,
    description,
    additionalInfo,
    systemCode,
    image,
    amount,
    manufactured,
    unitsOfMeasurement,
  } = item;

  return (
    <li className={`${style['items-list-item']} unselectable`} key={UNID}>
      <div className={style['items-list-item__info']}>
        <h2 className={`content-primary-a heading-x-small`}>{productName}</h2>
        {description && <p className={`content-primary-a paragraph-medium`}> {description}</p>}

        {additionalInfo && (
          <p className={`content-primary-a paragraph-medium`}> {additionalInfo}</p>
        )}

        {systemCode && (
          <p className={`content-primary-a paragraph-small`}>
            <span className={`content-secondary-a`}>Kod systemowy:</span> {systemCode}
          </p>
        )}
        {manufactured && <p className={`content-primary-a paragraph-small`}> {manufactured}</p>}

        <div className={`${style['items-list-item__amount']} paragraph-primary-a label-small`}>
          {InterfaceText.AMOUNT}:
          <span className="paragraph-primary-a heading-x-small">
            {amount} {unitsOfMeasurement}
          </span>
        </div>
      </div>
      <img
        className={style['items-list-item__image']}
        src={image}
        alt={description}
        width={150}
        height={150}
      />

      <Link className={style['items-list-item__link']} to={`${UNID}`}>
        <span className="visually-hidden">
          {CounterText.OPEN_COUNTER} {productName}
        </span>
      </Link>
    </li>
  );
};

export default ItemsListItem;
