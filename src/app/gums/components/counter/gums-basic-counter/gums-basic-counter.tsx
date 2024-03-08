//components
import { BasicCounter } from '../../../../../components';
//store
import { useAppDispatch } from '../../../../../hooks/hooks';
import { CounterText } from '../../../../../variables';
import { decrementAction, incrementAction } from '../../../store/actions/actions';
//variables
import { GumsLogsNames } from '../../../variables';

interface IGumsBasicCounterProps {
  UNID: string;
}

const GumsBasicCounter = ({ UNID }: IGumsBasicCounterProps): JSX.Element => {
  const dispatch = useAppDispatch();

  const inc = (value: number): void => {
    dispatch(incrementAction({ UNID: UNID, value: value, logName: GumsLogsNames.COUNTER }));
  };

  const dec = (value: number): void => {
    dispatch(decrementAction({ UNID: UNID, value: value, logName: GumsLogsNames.COUNTER }));
  };

  return <BasicCounter inc={inc} dec={dec} title={CounterText.GUMS_BASIC_COUNTER_INPUT_TEXT} />;
};

export default GumsBasicCounter;
