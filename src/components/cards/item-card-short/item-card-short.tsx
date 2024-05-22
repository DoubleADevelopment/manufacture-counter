//components
import ItemCardShortSkeleton from './item-card-short-skeleton/item-card-short-skeleton';
//variables
import { InterfaceText } from '../../../variables/';
//types
import type { IItemDataToDisplay } from '../../../types/';
//styles
import style from './item-card-short.module.scss';

interface IItemCardShortProps {
  item: IItemDataToDisplay | undefined;
  onCardClickHandler?: () => void;
}

const ItemCardShort = ({ item, onCardClickHandler }: IItemCardShortProps): JSX.Element => {
  return (
    <>
      {item ? (
        <article
          className={`${style['item-card-short']} ${onCardClickHandler && style['item-card-short--with-modal']}`}
          style={{ borderBottomColor: item.color }}
        >
          <div className={style['item-card-short__wrap']}>
            <h3 className={`content-primary-a label-medium `}>{item.productName}</h3>

            {item.description && (
              <p className={`content-primary-a paragraph-small`}>{item.description}</p>
            )}

            {item.systemCode && (
              <p className={`content-primary-a paragraph-small`}>
                <span className={`paragraph-secondary-a`}>Numer:</span> {item.systemCode}
              </p>
            )}
          </div>
          <img
            className={style['item-card-short__image']}
            src={item.image}
            alt={item.description}
            width={100}
            height={100}
          />
          <div className={`${style['item-card-short__amount']} paragraph-primary-a label-small`}>
            {InterfaceText.AMOUNT}
            <span className="paragraph-primary-a heading-medium">{item.amount}</span>
            {item.unitsOfMeasurement}
          </div>

          {onCardClickHandler && (
            <button
              className={style['item-card-short__open-modal-button']}
              type="button"
              onClick={onCardClickHandler}
            >
              <span className="visually-hidden">otwórz dodatkową informację</span>
            </button>
          )}
        </article>
      ) : (
        <ItemCardShortSkeleton />
      )}
    </>
  );
};
export default ItemCardShort;
