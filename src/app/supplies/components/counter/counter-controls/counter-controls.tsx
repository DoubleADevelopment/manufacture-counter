//store
import { SelectorGetItemData } from '../../../store/slectors/selectors';
import { useAppSelector } from '../../../../../hooks/hooks';
//components
import { CounterSwitcher, SuppliesBasicCounter } from '../../';
//styles
import style from './counter-controls.module.scss';

interface ICounterControlsProps {
  UNID: string;
}

const CounterControls = ({ UNID }: ICounterControlsProps): JSX.Element => {
  const itemData = useAppSelector(SelectorGetItemData(UNID));

  const renderedCounters = (): JSX.Element => {
    if (itemData.counters?.length > 1) {
      return <CounterSwitcher counters={itemData.counters} UNID={UNID} />;
    } else {
      return (
        <section className={style['counter-controls']}>
          <h2 className="visually-hidden">Licnik</h2>
          <SuppliesBasicCounter UNID={UNID} />
        </section>
      );
    }
  };

  return <>{renderedCounters()}</>;
};

export default CounterControls;
