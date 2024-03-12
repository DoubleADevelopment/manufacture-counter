//components
import { CounterWithAdditionalValue } from '../../../../../components';
//store
import { useAppDispatch, useAppSelector } from '../../../../../hooks/hooks';
import {
  incrementAction,
  decrementAction,
  changeItemSettingAction,
} from '../../../store/actions/actions';
import { SelectorGetCurrentGumSetting } from '../../../store/slectors/selectors';
//variables
import { GUMS_TEXT, GumsLogsNames, GumsSettingsNames } from '../../../variables';

interface IGumsCardboardCounterProps {
  UNID: string;
}

const GumsCardboardCounter = ({ UNID }: IGumsCardboardCounterProps): JSX.Element => {
  const dispatch = useAppDispatch();

  const cardboardDefaultValue = useAppSelector(
    SelectorGetCurrentGumSetting(UNID, GumsSettingsNames.BASE_CARDBOARD_VALUE),
  );

  const inc = (value: number, additionalValue: number): void => {
    const cardboardQuantity = value;
    const cardboardWeight = additionalValue;
    const valueToAdd = cardboardQuantity * cardboardWeight;

    const logText =
      value === 1
        ? `+${cardboardWeight}`
        : `+${cardboardWeight} * ${cardboardQuantity} = ${valueToAdd}`;

    dispatch(
      incrementAction({
        UNID: UNID,
        value: valueToAdd,
        logName: GumsLogsNames.CARDBOARD,
        logText: logText,
      }),
    );
  };

  const dec = (value: number, additionalValue: number): void => {
    const cardboardQuantity = value;
    const cardboardWeight = additionalValue;
    const valueToAdd = cardboardWeight * cardboardQuantity;

    const logText =
      cardboardQuantity === 1
        ? `-${cardboardWeight}`
        : `-${cardboardWeight} * ${cardboardQuantity} = ${valueToAdd}`;

    dispatch(
      decrementAction({
        UNID: UNID,
        value: valueToAdd,
        logName: GumsLogsNames.CARDBOARD,
        logText: logText,
      }),
    );
  };

  const changeCardboarSetting = (value: number) => {
    if (value !== cardboardDefaultValue) {
      dispatch(
        changeItemSettingAction({
          UNID: UNID,
          settingName: GumsSettingsNames.BASE_CARDBOARD_VALUE,
          newSettingValue: value,
        }),
      );
    }
  };

  return (
    <CounterWithAdditionalValue
      inc={inc}
      dec={dec}
      onAdditionalValueChangeHandler={changeCardboarSetting}
      defaultAdditionalValue={cardboardDefaultValue}
      text={{
        valueTitle: GUMS_TEXT.GUMS_CARDBOARD_COUNTER_INPUT_FIELD_TEXT,
        additionalValueTitleBefore: GUMS_TEXT.GUMS_CARDBOARD_COUNTER_ADDITIONAL_INPUT_BEFORE_TEXT,
        additionalValueTitleAfter: GUMS_TEXT.GUMS_CARDBOARD_COUNTER_ADDITIONAL_INPUT_AFTER_TEXT,
      }}
    />
  );
};

export default GumsCardboardCounter;
