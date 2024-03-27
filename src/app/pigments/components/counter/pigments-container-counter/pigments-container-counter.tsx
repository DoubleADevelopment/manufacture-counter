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

const GumsContainerCounter = ({ UNID }: IPigmentsBagCounterProps): JSX.Element => {
  const dispatch = useAppDispatch();

  const containerWeightValue = useAppSelector(
    SelectorGetItemSetting(UNID, PigmentsSettingsNames.CONTAINER_WEIGHT),
  );
  const baseContainerValue = useAppSelector(
    SelectorGetItemSetting(UNID, PigmentsSettingsNames.BASE_CONTAINER_VALUE),
  );

  const inc = (value: number, additionalValue: number): void => {
    const containerWeight = additionalValue;
    const pigmentsInsideContainerWeight = value;
    const valueToAdd = pigmentsInsideContainerWeight - containerWeight;
    const logText = `+${valueToAdd} (${pigmentsInsideContainerWeight} - ${containerWeight})`;
    dispatch(
      incrementAction({
        UNID: UNID,
        value: valueToAdd,
        logName: PigmentsLogsNames.CONTAINER,
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
        logName: PigmentsLogsNames.CONTAINER,
        logText: logText,
      }),
    );
  };

  const changeContainerSetting = (value: number) => {
    if (value !== containerWeightValue) {
      dispatch(
        changeItemSettingAction({
          UNID: UNID,
          settingName: PigmentsSettingsNames.CONTAINER_WEIGHT,
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
      defaultAdditionalValue={containerWeightValue}
      defaultValue={baseContainerValue}
      text={{
        valueTitle: PIGMENTS_TEXT.PIGMENTS_CONTAINER_COUNTER_INPUT_FIELD_TEXT,
        additionalValueTitleBefore:
          PIGMENTS_TEXT.PIGMENTS_CONTAINER_COUNTER_ADDITIONAL_INPUT_BEFORE_TEXT,
        additionalValueTitleAfter:
          PIGMENTS_TEXT.PIGMENTS_CONTAINER_COUNTER_ADDITIONAL_INPUT_AFTER_TEXT,
      }}
    />
  );
};

export default GumsContainerCounter;
