//components
import { BasicCounter } from '../../../../../components';
//store
import { useAppDispatch, useAppSelector } from '../../../../../hooks/hooks';
import { decrementAction, incrementAction } from '../../../store/actions/actions';
import { SelectorGetCurrentChemistrySetting } from '../../../store/slectors/selectors';
//variables
import {
  CHEMISTRY_TEXT,
  ChemistryPackagesNames,
  ChemistrySettingsNames,
} from '../../../variables/';
//styles
import style from './counter-controls.module.scss';

interface ICounterControlsProps {
  UNID: string;
  packName: ChemistryPackagesNames;
}

const CounterControls = ({ UNID, packName }: ICounterControlsProps): JSX.Element => {
  const chemistryBasicCounterDefaultValue = useAppSelector(
    SelectorGetCurrentChemistrySetting(UNID, ChemistrySettingsNames.BASE_COUNTER_VALUE, packName),
  );
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
      <BasicCounter
        inc={inc}
        dec={dec}
        title={CHEMISTRY_TEXT.CHEMISTRY_BASIC_COUNTER_INPUT_FIELD_TEXT}
        defaultValue={chemistryBasicCounterDefaultValue}
      />
    </section>
  );
};

export default CounterControls;
