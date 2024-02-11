import { Link } from 'react-router-dom';
//types
import type { IItemCardFull } from '../../../types/data-types';
//style
import style from './item-card-full.module.scss';

interface IItemProps {
  item: IItemCardFull;
}

const ItemCardFull = ({ item }: IItemProps): JSX.Element => {
  const { UNID, name, description, itemNumber, packagingInfo, image, amount } = item;

  return (
    <li className={style['item-card-full']} key={UNID}>
      <div className={style['item-card-full__info']}>
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
        className={style['item-card-full__image']}
        src={image}
        alt={description}
        width={150}
        height={150}
      />
      <p className={`${style['item-card-full__amount']} paragraph-primary-a paragraph-small`}>
        {amount}
      </p>
      <Link className={style['item-card-full__link']} to={`./${UNID}`}>
        <span className="visually-hidden">Otwórz licznik dla {name}</span>
      </Link>
    </li>
  );
};

export default ItemCardFull;
