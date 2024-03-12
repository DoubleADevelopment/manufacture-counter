//components
import { CounterWithAdditionalValue } from '../../../../../components';
//store
import { useAppDispatch, useAppSelector } from '../../../../../hooks/hooks';
import {
  incrementAction,
  decrementAction,
  changeItemSettingAction,
} from '../../../store/actions/actions';
import { SelectorGetCurrentPigmentSetting } from '../../../store/slectors/selectors';
//variables
import { PIGMENTS_TEXT, PigmentsLogsNames, PigmentsSettingsNames } from '../../../variables';

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
    <CounterWithAdditionalValue
      inc={inc}
      dec={dec}
      onValueChangeHandler={changeCardboarSetting}
      defaultValue={bagDefaultValue}
      text={{
        quantityTitle: PIGMENTS_TEXT.PIGMENTS_BAGS_COUNTER_INPUT_FIELD_TEXT,
        valueTitleBefore: PIGMENTS_TEXT.PIGMENTS_BAGS_COUNTER_ADDITIONAL_INPUT_BEFORE_TEXT,
        valueTitleAfter: PIGMENTS_TEXT.PIGMENTS_BAGS_COUNTER_ADDITIONAL_INPUT_AFTER_TEXT,
      }}
    />
  );
};

export default GumsBagCounter;
