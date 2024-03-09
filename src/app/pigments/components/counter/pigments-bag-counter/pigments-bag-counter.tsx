//components
import { ItemsCounter } from '../../../../../components';
//store
import { useAppDispatch, useAppSelector } from '../../../../../hooks/hooks';
import {
  incrementAction,
  decrementAction,
  changeItemSettingAction,
} from '../../../store/actions/actions';
import { SelectorGetCurrentPigmentSetting } from '../../../store/slectors/selectors';
//variables
import { CounterText, UnitsOfMeasurementText } from '../../../../../variables';
import { PigmentsLogsNames, PigmentsSettingsNames } from '../../../variables';

interface IPigmentsBagCounterProps {
  UNID: string;
}

const GumsBagCounter = ({ UNID }: IPigmentsBagCounterProps): JSX.Element => {
  const dispatch = useAppDispatch();

  const bagDefaultValue = useAppSelector(
    SelectorGetCurrentPigmentSetting(UNID, PigmentsSettingsNames.BASE_BAG_VALUE),
  );

  const inc = (value: number, quantity: number): void => {
    const valueToAdd = value * quantity;
    const logText = quantity === 1 ? `+${value}` : `+${value} * ${quantity} = ${valueToAdd}`;
    dispatch(
      incrementAction({
        UNID: UNID,
        value: valueToAdd,
        logName: PigmentsLogsNames.BAG,
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
        logName: PigmentsLogsNames.BAG,
        logText: logText,
      }),
    );
  };

  const changeCardboarSetting = (value: number) => {
    if (value !== bagDefaultValue) {
      dispatch(
        changeItemSettingAction({
          UNID: UNID,
          settingName: PigmentsSettingsNames.BASE_BAG_VALUE,
          newSettingValue: value,
        }),
      );
    }
  };

  return (
    <ItemsCounter
      inc={inc}
      dec={dec}
      onValueChangeHandler={changeCardboarSetting}
      defaultValue={bagDefaultValue}
      text={{
        quantityTitle: CounterText.PIGMENTS_BAGS_COUNTER_TITLE,
        valueTitleBefore: CounterText.PIGMENTS_BAG_VALUE_IS,
        valueTitleAfter: UnitsOfMeasurementText.KG,
      }}
    />
  );
};

export default GumsBagCounter;
