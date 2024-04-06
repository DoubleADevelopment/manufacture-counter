//components
import { BasicCounter } from '../../';
//store
import { useAppDispatch } from '../../../hooks/hooks';
//types
import type { ICounter, IncDecActionType } from '../../../types';

interface IBasicCounterWrapProps {
  UNID: string;
  counter: ICounter;
  incrementAction: IncDecActionType;
  decrementAction: IncDecActionType;
}

const BasicCounterWrap = ({
  UNID,
  counter,
  incrementAction,
  decrementAction,
}: IBasicCounterWrapProps): JSX.Element => {
  const dispatch = useAppDispatch();

  const inc = (value: number): void => {
    dispatch(incrementAction({ UNID: UNID, value: value, counterName: counter.counterSystemName }));
  };

  const dec = (value: number): void => {
    dispatch(decrementAction({ UNID: UNID, value: value, counterName: counter.counterSystemName }));
  };

  return (
    <BasicCounter
      inc={inc}
      dec={dec}
      title={counter.counterBaseValueTitle}
      defaultValue={counter.counterBaseValue}
    />
  );
};

export default BasicCounterWrap;
