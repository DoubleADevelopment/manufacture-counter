//components
import { BasicCounter } from '../../../../../components';
//store
import { useAppDispatch, useAppSelector } from '../../../../../hooks/hooks';
import { decrementAction, incrementAction } from '../../../store/actions/actions';
import { SelectorGetItemSetting } from '../../../store/slectors/selectors';
//variables
import { CHEMISTRY_COUNTERS, CHEMISTRY_TEXT, ChemistrySettingsNames } from '../../../variables';

interface ISuppliesBasicCounterProps {
  UNID: string;
}

const ChemistryBasicCounter = ({ UNID }: ISuppliesBasicCounterProps): JSX.Element => {
  const chemistryBasicCounterDefaultValue = useAppSelector(
    SelectorGetItemSetting(UNID, ChemistrySettingsNames.BASE_COUNTER_VALUE),
  );

  const dispatch = useAppDispatch();

  const inc = (value: number): void => {
    dispatch(incrementAction({ UNID: UNID, value: value, logName: CHEMISTRY_COUNTERS.COUNTER }));
  };

  const dec = (value: number): void => {
    dispatch(decrementAction({ UNID: UNID, value: value, logName: CHEMISTRY_COUNTERS.COUNTER }));
  };

  return (
    <BasicCounter
      inc={inc}
      dec={dec}
      title={CHEMISTRY_TEXT.CHEMISTRY_BASIC_COUNTER_INPUT_FIELD_TEXT}
      defaultValue={chemistryBasicCounterDefaultValue}
    />
  );
};

export default ChemistryBasicCounter;
