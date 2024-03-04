import { Link } from 'react-router-dom';
//variables
import { CounterText, UnitsOfMeasurementText } from '../../../variables';
//types
import type { IItemDataToDisplay } from '../../../types/';
//style
import style from './items-list-item.module.scss';

interface IItemsListItemProps {
  item: IItemDataToDisplay;
  measurementText: UnitsOfMeasurementText;
}

const ItemsListItem = ({ item, measurementText }: IItemsListItemProps): JSX.Element => {
  const { UNID, name, description, itemNumber, packagingInfo, image, amount } = item;

  return (
    <li className={`${style['items-list-item']} unselectable`} key={UNID}>
      <div className={style['items-list-item__info']}>
        <h3 className={`content-primary-a heading-small`}>{name}</h3>
        <p className={`content-primary-a paragraph-large`}>
          <span className={`content-secondary-a`}>Opis:</span> {description}
        </p>
        <p className={`content-primary-a paragraph-small`}>
          <span className={`content-secondary-a`}>Numer:</span> {itemNumber}
        </p>
        <p className={`content-primary-a paragraph-small`}>
          <span className={`content-secondary-a`}>Opakowanie:</span> {packagingInfo}
        </p>
      </div>
      <img
        className={style['items-list-item__image']}
        src={image}
        alt={description}
        width={150}
        height={150}
      />
      <div className={`${style['items-list-item__amount']} paragraph-primary-a label-medium`}>
        {measurementText} <span className="paragraph-primary-a heading-medium">{amount}</span>
      </div>
      <Link className={style['items-list-item__link']} to={`${UNID}`}>
        <span className="visually-hidden">
          {CounterText.OPEN_COUNTER} {name}
        </span>
      </Link>
    </li>
  );
};

export default ItemsListItem;
