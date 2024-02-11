import { Link } from 'react-router-dom';
//types
import type { UnionComponentsDataItemType } from '../../../types/data-types';
//style
import style from './item.module.scss';

interface IItemProps {
  item: UnionComponentsDataItemType;
}

const Item = ({ item }: IItemProps): JSX.Element => {
  return (
    <li className={style['item']} key={item.UNID}>
      <div className={style['item__info']}>
        <h3 className={`paragraph-primary-a heading-small`}>{item.name}</h3>
        <p className={`paragraph-primary-a paragraph-large`}>
          <span className={`paragraph-secondary-a`}>Opis:</span> {item.description}
        </p>
        <p className={`paragraph-primary-a paragraph-small`}>
          <span className={`paragraph-secondary-a`}>Numer:</span> {item.itemNumber}
        </p>
        <p className={`paragraph-primary-a paragraph-small`}>
          <span className={`paragraph-secondary-a`}>Opakowanie:</span> {item.packagingInfo}
        </p>
      </div>
      <img
        className={style['item__image']}
        src={item.image}
        alt={item.description}
        width={150}
        height={150}
      />
      <p className={`${style['item__amount']} paragraph-primary-a paragraph-small`}>
        {item.amount}
      </p>
      <Link className={style['item__link']} to={`./${item.UNID}`}>
        <span className="visually-hidden">Otwórz licznik dla {item.name}</span>
      </Link>
    </li>
  );
};

export default Item;
