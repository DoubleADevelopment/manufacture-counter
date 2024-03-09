//components
import { BasicCounter } from '../../../../../components';
//store
import { useAppDispatch } from '../../../../../hooks/hooks';
import { CounterText } from '../../../../../variables';
import { decrementAction, incrementAction } from '../../../store/actions/actions';
//variables
import { PigmentsLogsNames } from '../../../variables';

interface IPigmentsBasicCounterProps {
  UNID: string;
}

const GumsBasicCounter = ({ UNID }: IPigmentsBasicCounterProps): JSX.Element => {
  const dispatch = useAppDispatch();

  const inc = (value: number): void => {
    dispatch(incrementAction({ UNID: UNID, value: value, logName: PigmentsLogsNames.COUNTER }));
  };

  const dec = (value: number): void => {
    dispatch(decrementAction({ UNID: UNID, value: value, logName: PigmentsLogsNames.COUNTER }));
  };

  return <BasicCounter inc={inc} dec={dec} title={CounterText.PIGMENTS_BASIC_COUNTER_INPUT_TEXT} />;
};

export default GumsBasicCounter;
