import { Link, useParams } from 'react-router-dom';
//components
import { ItemCardShort } from '../../../../components';
//variables
import { CounterRouting } from '../../variables/counter-routing';
//icons
import { ArrowBackIcon } from '../../../../icons';
//styles
import style from './counter-header.module.scss';
import chemistryAdapterService from '../../services/chemistry-adapter.service';
import { IItemCardData } from '../../../../types/data-types';
import { useAppSelector } from '../../../../hooks/hooks';
import { SelectorGetCurrentChemistry } from '../../store/slectors/selectors';

interface UNIDParams {
  UNID: string;
}

const CounterHeader = (): JSX.Element => {
  const { UNID } = useParams<keyof UNIDParams>() as UNIDParams;
  const item: IItemCardData = chemistryAdapterService.adaptItemToShort(
    useAppSelector(SelectorGetCurrentChemistry(UNID)),
  );

  return (
    <header className={style.header}>
      <Link className={style['header__back-link']} to={CounterRouting.ROOT}>
        <ArrowBackIcon />
        <span className="visually-hidden">Powrót do przeglądu</span>
      </Link>
      <h1 className={`${style.header__title} heading-medium  content-primary-a`}>Licznik chemii</h1>

      <div className={style['header__counter-controls']}>
        <ItemCardShort item={item} />
      </div>
    </header>
  );
};

export default CounterHeader;
