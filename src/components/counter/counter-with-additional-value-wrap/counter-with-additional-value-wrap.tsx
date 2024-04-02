//components
import { CounterWithAdditionalValue } from '../';
//store
import { useAppDispatch } from '../../../hooks/hooks';
import { IChangeItemAdditionalSettingActionType, IncDecActionType } from '../../../types';
import { ICounter } from '../../../types/data-types';

interface ICounterWithAdditionalValueWrapProps {
  UNID: string;
  counter: ICounter;
  incrementAction: IncDecActionType;
  decrementAction: IncDecActionType;
  changeItemSettingAction: IChangeItemAdditionalSettingActionType;
}

const CounterWithAdditionalValueWrap = ({
  UNID,
  counter,
  incrementAction,
  decrementAction,
  changeItemSettingAction,
}: ICounterWithAdditionalValueWrapProps): JSX.Element => {
  const dispatch = useAppDispatch();

  const inc = (value: number, additionalValue: number): void => {
    const containerWeight = additionalValue;
    const pigmentsInsideContainerWeight = value;
    const valueToAdd = pigmentsInsideContainerWeight - containerWeight;

    const logText = `+${valueToAdd} (${pigmentsInsideContainerWeight} - ${containerWeight})`;

    dispatch(
      incrementAction({
        UNID: UNID,
        value: valueToAdd,
        counterName: counter.counterSystemName,
        logText: logText,
      }),
    );
  };

  const dec = (value: number, additionalValue: number): void => {
    const containerWeight = additionalValue;
    const pigmentsInsideContainerWeight = value;
    const valueToAdd = pigmentsInsideContainerWeight - containerWeight;
    const logText = `- ${valueToAdd} (${pigmentsInsideContainerWeight} - ${containerWeight}) `;
    dispatch(
      decrementAction({
        UNID: UNID,
        value: valueToAdd,
        counterName: counter.counterSystemName,
        logText: logText,
      }),
    );
  };

  const changeContainerSetting = (value: number) => {
    if (value !== counter.counterAdditionalValue) {
      dispatch(
        changeItemSettingAction({
          UNID: UNID,
          counterName: counter.counterSystemName,
          newSettingValue: value,
        }),
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
