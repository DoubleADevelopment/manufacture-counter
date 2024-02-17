import { Link, useParams } from 'react-router-dom';
//services
import chemistryAdapterService from '../../services/chemistry-adapter.service';
//store
import { useAppSelector } from '../../../../hooks/hooks';
import { SelectorGetCurrentChemistry } from '../../store/slectors/selectors';
//components
import { ItemCardShort } from '../../../../components';
//variables
import { CounterRouting } from '../../variables/counter-routing';
//types
import type { IItemCardData } from '../../../../types/data-types';
//icons
import { ArrowBackIcon } from '../../../../icons';
//styles
import style from './counter-header.module.scss';
import { IChemistryDataItemType } from '../../types/data-types';

const CounterHeader = (): JSX.Element => {
  const { UNID } = useParams();
  const item: IChemistryDataItemType | undefined = UNID
    ? useAppSelector(SelectorGetCurrentChemistry(UNID))
    : undefined;
  let convertedItem: IItemCardData | undefined;

  if (item !== undefined && item) {
    convertedItem = chemistryAdapterService.adaptItemToShort(item);
  } else {
    convertedItem = undefined;
  }

  return (
    <header className={style.header}>
      <Link className={style['header__back-link']} to={CounterRouting.ROOT}>
        <ArrowBackIcon />
        <span className="visually-hidden">Powrót do przeglądu</span>
      </Link>
      <h1 className={`${style.header__title} heading-medium  content-primary-a`}>Licznik chemii</h1>

      <div className={style['header__counter-controls']}>
        <ItemCardShort item={convertedItem} />
      </div>
    </header>
  );
};

export default CounterHeader;
