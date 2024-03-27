//components
import { CounterWithAdditionalValue } from '../../../../../components';
//store
import { useAppDispatch, useAppSelector } from '../../../../../hooks/hooks';
import {
  incrementAction,
  decrementAction,
  changeItemSettingAction,
} from '../../../store/actions/actions';
import { SelectorGetItemSetting } from '../../../store/slectors/selectors';
//variables
import { PIGMENTS_TEXT, PigmentsLogsNames, PigmentsSettingsNames } from '../../../variables';

interface IPigmentsBagCounterProps {
  UNID: string;
}

const GumsBagCounter = ({ UNID }: IPigmentsBagCounterProps): JSX.Element => {
  const dispatch = useAppDispatch();

  const bagDefaultValue = useAppSelector(
    SelectorGetItemSetting(UNID, PigmentsSettingsNames.BASE_BAG_VALUE),
  );

  const inc = (value: number, additionalValue: number): void => {
    const bagQuantity = value;
    const bagWeight = additionalValue;
    const valueToAdd = bagWeight * bagQuantity;

    const logText =
      bagQuantity === 1 ? `+${bagWeight}` : `+${bagWeight} * ${bagQuantity} = ${valueToAdd}`;

    dispatch(
      incrementAction({
        UNID: UNID,
        value: valueToAdd,
        logName: PigmentsLogsNames.BAG,
        logText: logText,
      }),
    );
  };

  const dec = (value: number, additionalValue: number): void => {
    const bagQuantity = value;
    const bagWeight = additionalValue;
    const valueToAdd = bagWeight * bagQuantity;

    const logText =
      bagQuantity === 1 ? `-${bagWeight}` : `-${bagWeight} * ${bagQuantity} = ${valueToAdd}`;

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
      onAdditionalValueChangeHandler={changeCardboarSetting}
      defaultAdditionalValue={bagDefaultValue}
      text={{
        valueTitle: PIGMENTS_TEXT.PIGMENTS_BAGS_COUNTER_INPUT_FIELD_TEXT,
        additionalValueTitleBefore:
          PIGMENTS_TEXT.PIGMENTS_BAGS_COUNTER_ADDITIONAL_INPUT_BEFORE_TEXT,
        additionalValueTitleAfter: PIGMENTS_TEXT.PIGMENTS_BAGS_COUNTER_ADDITIONAL_INPUT_AFTER_TEXT,
      }}
    />
  );
};

export default GumsBagCounter;
