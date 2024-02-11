//types
import type { IChemistryDataItemType } from '../../app/chemistry/types/data-types';
//styles
import style from './counter-item.module.scss';

interface ICounterItemProps {
  item: IChemistryDataItemType;
}

const CounterItem = ({ item }: ICounterItemProps): JSX.Element => {
  return (
    <article className={style['counter-item']}>
      <div className={style['counter-item__info']}>
        <h3 className={`paragraph-primary-a heading-small`}>{item?.name}</h3>
        <p className={`paragraph-primary-a paragraph-small`}>
          <span className={`paragraph-secondary-a`}>Numer:</span> {item?.itemNumber}
        </p>
        <p className={`paragraph-primary-a paragraph-small`}>
          <span className={`paragraph-secondary-a`}>Opakowanie:</span> {item?.packagingInfo}
        </p>
      </div>
      <img
        className={style['counter-item__image']}
        src={item?.image}
        alt={item?.description}
        width={150}
        height={150}
      />
    </article>
  );
};
export default CounterItem;
