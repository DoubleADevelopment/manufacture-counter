//components
import { BasicCounter } from '../../../../../components';
//store
import { useAppDispatch } from '../../../../../hooks/hooks';
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

  return <BasicCounter inc={inc} dec={dec} />;
};

export default GumsBasicCounter;
