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
import { CounterText, UnitsOfMeasurementText } from '../../../../../variables';
import { PigmentsLogsNames, PigmentsSettingsNames } from '../../../variables';

interface IPigmentsBagCounterProps {
  UNID: string;
}

const GumsContainerCounter = ({ UNID }: IPigmentsBagCounterProps): JSX.Element => {
  const dispatch = useAppDispatch();

  const containerWeightValue = useAppSelector(
    SelectorGetCurrentPigmentSetting(UNID, PigmentsSettingsNames.CONTAINER_WEIGHT),
  );
  const baseContainerValue = useAppSelector(
    SelectorGetCurrentPigmentSetting(UNID, PigmentsSettingsNames.BASE_CONTAINER_VALUE),
  );

  const inc = (containerWeight: number, pigmentWeight: number): void => {
    const valueToAdd = pigmentWeight - containerWeight;
    const logText = `+${valueToAdd} (${pigmentWeight} - ${containerWeight})`;
    dispatch(
      incrementAction({
        UNID: UNID,
        value: valueToAdd,
        logName: PigmentsLogsNames.CONTAINER,
        logText: logText,
      }),
    );
  };

  const dec = (containerWeight: number, pigmentWeight: number): void => {
    const valueToAdd = pigmentWeight - containerWeight;
    const logText = `- ${valueToAdd} (${pigmentWeight} - ${containerWeight}) `;
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
      onValueChangeHandler={changeContainerSetting}
      defaultValue={containerWeightValue}
      defaultQuantity={baseContainerValue}
      text={{
        quantityTitle: CounterText.PIGMENTS_CONTAINER_COUNTER_TITLE,
        valueTitleBefore: CounterText.PIGMENTS_CONTAINER_WEIGHT,
        valueTitleAfter: UnitsOfMeasurementText.KG,
      }}
    />
  );
};

export default GumsContainerCounter;
