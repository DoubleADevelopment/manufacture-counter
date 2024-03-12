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
import { CounterText, UnitsOfMeasurementText } from '../../../../../variables';
import { GumsLogsNames, GumsSettingsNames } from '../../../variables';

interface IGumsCardboardCounterProps {
  UNID: string;
}

const GumsCardboardCounter = ({ UNID }: IGumsCardboardCounterProps): JSX.Element => {
  const dispatch = useAppDispatch();

  const cardboardDefaultValue = useAppSelector(
    SelectorGetCurrentGumSetting(UNID, GumsSettingsNames.BASE_CARDBOARD_VALUE),
  );

  const inc = (value: number, quantity: number): void => {
    const valueToAdd = value * quantity;
    const logText = quantity === 1 ? `+${value}` : `+${value} * ${quantity} = ${valueToAdd}`;
    dispatch(
      incrementAction({
        UNID: UNID,
        value: valueToAdd,
        logName: GumsLogsNames.CARDBOARD,
        logText: logText,
      }),
    );
  };

  const dec = (value: number, quantity: number): void => {
    const valueToAdd = value * quantity;
    const logText = quantity === 1 ? `-${value}` : `-${value} * ${quantity} = ${valueToAdd}`;
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
      onValueChangeHandler={changeCardboarSetting}
      defaultValue={cardboardDefaultValue}
      text={{
        quantityTitle: CounterText.QUANTITY_COUNTER_TITLE,
        valueTitleBefore: CounterText.ONE_CARDBOARD_VALUE_IS,
        valueTitleAfter: UnitsOfMeasurementText.KG,
      }}
    />
  );
};

export default GumsCardboardCounter;
