//components
import { BasicCounter } from '../../../../../components';
//store
import { useAppDispatch, useAppSelector } from '../../../../../hooks/hooks';
import { decrementAction, incrementAction } from '../../../store/actions/actions';
import { SelectorGetItemSetting } from '../../../store/slectors/selectors';
//variables
import { PIGMENTS_TEXT, PigmentsLogsNames, PigmentsSettingsNames } from '../../../variables';

interface IPigmentsBasicCounterProps {
  UNID: string;
}

const GumsBasicCounter = ({ UNID }: IPigmentsBasicCounterProps): JSX.Element => {
  const pigmentBasicCounterDefaultValue = useAppSelector(
    SelectorGetItemSetting(UNID, PigmentsSettingsNames.BASE_COUNTER_VALUE),
  );

  const dispatch = useAppDispatch();

  const inc = (value: number): void => {
    dispatch(incrementAction({ UNID: UNID, value: value, logName: PigmentsLogsNames.COUNTER }));
  };

  const dec = (value: number): void => {
    dispatch(decrementAction({ UNID: UNID, value: value, logName: PigmentsLogsNames.COUNTER }));
  };

  return (
    <BasicCounter
      inc={inc}
      dec={dec}
      title={PIGMENTS_TEXT.PIGMENTS_BASIC_COUNTER_INPUT_FIELD_TEXT}
      defaultValue={pigmentBasicCounterDefaultValue}
    />
  );
};

export default GumsBasicCounter;
