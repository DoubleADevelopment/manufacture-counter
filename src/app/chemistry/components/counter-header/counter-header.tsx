import { Link, useParams } from 'react-router-dom';
//services
import chemistryAdapterService from '../../services/chemistry-adapter.service';
//store
import { useAppSelector } from '../../../../hooks/hooks';
import { SelectorGetCurrentChemistry } from '../../store/slectors/selectors';
//components
import { ItemCardShortSkeleton } from '../../../../components';
import { CounterItemInfo } from '../';
//variables
import { ChemistryAppRouting } from '../../../../variables';
import { InterfaceText } from '../../../../variables';
//types
import type { IItemCardData } from '../../../../types/data-types';
import type { IChemistryDataItemType } from '../../types/data-types';
//icons
import { ArrowBackIcon } from '../../../../icons';
//styles
import style from './counter-header.module.scss';

const CounterHeader = (): JSX.Element => {
  const { UNID } = useParams();

  const item: IChemistryDataItemType | undefined = UNID
    ? useAppSelector(SelectorGetCurrentChemistry(UNID))
    : undefined;

  let convertedItem: IItemCardData | undefined;

  if (item !== undefined && item) {
    convertedItem = chemistryAdapterService.adaptItemDataToCard(item);
  } else {
    convertedItem = undefined;
  }
  return (
    <header className={style.header}>
      <Link className={style['header__back-link']} to={ChemistryAppRouting.ROOT}>
        <ArrowBackIcon />
        <span className="visually-hidden">{InterfaceText.BACK_TO_OVERVIEW}</span>
      </Link>
      <h1 className={`${style.header__title} heading-medium  content-primary-a`}>Licznik chemii</h1>

      <div className={style['header__counter-controls']}>
        {convertedItem && item ? (
          <CounterItemInfo itemLogs={item.logs} convertedItem={convertedItem} />
        ) : (
          <ItemCardShortSkeleton />
        )}
      </div>
    </header>
  );
};

export default CounterHeader;
