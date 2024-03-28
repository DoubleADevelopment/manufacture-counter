/* eslint-disable @typescript-eslint/no-unused-vars */
//components
import { useAppDispatch } from '../../../hooks/hooks';
//store
import BasicCounter from '../basic-counter/basic-counter';

interface IBasicCounterWrapProps {
  UNID: string;
  defaultValue: number;
  counterTitle: string;
}

const BasicCounterWrap = ({
  UNID,
  defaultValue,
  counterTitle,
}: IBasicCounterWrapProps): JSX.Element => {
  // const dispatch = useAppDispatch();

  const inc = (value: number): void => {
    // dispatch(incrementAction({ UNID: UNID, value: value, logName: CHEMISTRY_COUNTERS.COUNTER }));
    console.log(value);
  };

  const dec = (value: number): void => {
    console.log(value);
    // dispatch(decrementAction({ UNID: UNID, value: value, logName: CHEMISTRY_COUNTERS.COUNTER }));
  };

  return <BasicCounter inc={inc} dec={dec} title={counterTitle} defaultValue={defaultValue} />;
};

export default BasicCounterWrap;
