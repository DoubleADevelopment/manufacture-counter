//components
import { BasicCounter } from '../../../../../components';
//store
import { useAppDispatch } from '../../../../../hooks/hooks';
import { CounterText } from '../../../../../variables';
import { decrementAction, incrementAction } from '../../../store/actions/actions';
//variables
import { ChemistryPackagesNames } from '../../../variables/';
//styles
import style from './counter-controls.module.scss';

interface ICounterControlsProps {
  UNID: string;
  packName: ChemistryPackagesNames;
}

const CounterControls = ({ UNID, packName }: ICounterControlsProps): JSX.Element => {
  const dispatch = useAppDispatch();

  const inc = (value: number): void => {
    dispatch(incrementAction({ UNID: UNID, value: value, packageName: packName }));
  };
  const dec = (value: number): void => {
    dispatch(decrementAction({ UNID: UNID, value: value, packageName: packName }));
  };
  return (
    <section className={style['counter-controls']}>
      <h2 className="visually-hidden">Licnik</h2>
      <BasicCounter inc={inc} dec={dec} title={CounterText.CHEMISTRY_BASIC_COUNTER_INPUT_TEXT} />
    </section>
  );
};

export default CounterControls;
