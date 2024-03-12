//components
import { BasicCounter } from '../../../../../components';
//store
import { useAppDispatch, useAppSelector } from '../../../../../hooks/hooks';
import { decrementAction, incrementAction } from '../../../store/actions/actions';
import { SelectorGetCurrentPigmentSetting } from '../../../store/slectors/selectors';
//variables
import { CounterText } from '../../../../../variables';
import { PigmentsLogsNames, PigmentsSettingsNames } from '../../../variables';

interface IPigmentsBasicCounterProps {
  UNID: string;
}

const GumsBasicCounter = ({ UNID }: IPigmentsBasicCounterProps): JSX.Element => {
  const pigmentBasicCounterDefaultValue = useAppSelector(
    SelectorGetCurrentPigmentSetting(UNID, PigmentsSettingsNames.BASE_CONTAINER_VALUE),
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
      title={CounterText.PIGMENTS_BASIC_COUNTER_INPUT_TEXT}
      defaultValue={pigmentBasicCounterDefaultValue}
    />
  );
};

export default GumsBasicCounter;
