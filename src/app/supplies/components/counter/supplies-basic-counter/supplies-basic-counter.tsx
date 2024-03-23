//components
import { BasicCounter } from '../../../../../components';
//store
import { useAppDispatch, useAppSelector } from '../../../../../hooks/hooks';
import { decrementAction, incrementAction } from '../../../store/actions/actions';
import { SelectorGetCurrentSupplieSetting } from '../../../store/slectors/selectors';
//variables
import { SUPPLIES_TEXT, SuppliesLogsNames, SuppliesSettingsNames } from '../../../variables';

interface IGumsBasicCounterProps {
  UNID: string;
}

const GumsBasicCounter = ({ UNID }: IGumsBasicCounterProps): JSX.Element => {
  const gumsBasicCounterDefaultValue = useAppSelector(
    SelectorGetCurrentSupplieSetting(UNID, SuppliesSettingsNames.BASE_COUNTER_VALUE),
  );

  const dispatch = useAppDispatch();

  const inc = (value: number): void => {
    dispatch(incrementAction({ UNID: UNID, value: value, logName: SuppliesLogsNames.COUNTER }));
  };

  const dec = (value: number): void => {
    dispatch(decrementAction({ UNID: UNID, value: value, logName: SuppliesLogsNames.COUNTER }));
  };

  return (
    <BasicCounter
      inc={inc}
      dec={dec}
      title={SUPPLIES_TEXT.SUPPLIES_BASIC_COUNTER_INPUT_FIELD_TEXT}
      defaultValue={gumsBasicCounterDefaultValue}
    />
  );
};

export default GumsBasicCounter;
