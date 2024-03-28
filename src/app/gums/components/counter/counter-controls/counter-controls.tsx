//store
import { useAppSelector } from '../../../../../hooks/hooks';
import { SelectorGetItemData } from '../../../store/slectors/selectors';
//components
import { GumsBasicCounter, GumsCounterSwitcher } from '../../';
//styles
import style from './counter-controls.module.scss';

interface ICounterControlsProps {
  UNID: string;
}

const CounterControls = ({ UNID }: ICounterControlsProps): JSX.Element => {
  const itemData = useAppSelector(SelectorGetItemData(UNID));

  const renderedCounters = (): JSX.Element => {
    if (itemData.counters?.length) {
      return <GumsCounterSwitcher counters={itemData.counters} UNID={UNID} />;
    } else {
      return (
        <section className={style['counter-controls']}>
          <h2 className="visually-hidden">Licnik</h2>
          <GumsBasicCounter UNID={UNID} />
        </section>
      );
    }
  };

  return <>{renderedCounters()}</>;
};

export default CounterControls;
