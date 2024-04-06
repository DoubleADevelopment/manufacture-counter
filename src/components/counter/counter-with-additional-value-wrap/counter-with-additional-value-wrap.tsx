//components
import { CounterWithAdditionalValue } from '../';
//store
import { useAppDispatch } from '../../../hooks/hooks';
//types
import type {
  IChangeItemAdditionalSettingActionType,
  IncDecActionType,
  ICounter,
} from '../../../types';
import { calculateWithOperator } from '../../../utils/utils';

interface ICounterWithAdditionalValueWrapProps {
  UNID: string;
  counter: ICounter;
  incrementAction: IncDecActionType;
  decrementAction: IncDecActionType;
  changeItemAdditionalSettingAction?: IChangeItemAdditionalSettingActionType;
}

const CounterWithAdditionalValueWrap = ({
  UNID,
  counter,
  incrementAction,
  decrementAction,
  changeItemAdditionalSettingAction,
}: ICounterWithAdditionalValueWrapProps): JSX.Element => {
  const dispatch = useAppDispatch();

  const inc = (value: number, additionalValue: number): void => {
    const calculateResult = calculateWithOperator(
      value,
      additionalValue,
      counter.operationBetweenBaseAndAddition,
      '+',
    );

    dispatch(
      incrementAction({
        UNID: UNID,
        value: calculateResult.valueToAdd,
        counterName: counter.counterSystemName,
        logText: calculateResult.logText,
      }),
    );
  };

  const dec = (value: number, additionalValue: number): void => {
    const calculateResult = calculateWithOperator(
      value,
      additionalValue,
      counter.operationBetweenBaseAndAddition,
      '-',
    );

    dispatch(
      decrementAction({
        UNID: UNID,
        value: calculateResult.valueToAdd,
        counterName: counter.counterSystemName,
        logText: calculateResult.logText,
      }),
    );
  };

  const changeContainerSetting = (value: number) => {
    if (
      value !== counter.counterAdditionalValue &&
      typeof changeItemAdditionalSettingAction === 'function'
    ) {
      dispatch(
        changeItemAdditionalSettingAction({
          UNID: UNID,
          counterName: counter.counterSystemName,
          newSettingValue: value,
        }),
      );
    } else {
      console.log(
        'function changeContainerSetting can run because changeItemAdditionalSettingAction method is absent.',
      );
    }
  };

  return (
    <CounterWithAdditionalValue
      inc={inc}
      dec={dec}
      onAdditionalValueChangeHandler={changeContainerSetting}
      counter={counter}
    />
  );
};

export default CounterWithAdditionalValueWrap;
