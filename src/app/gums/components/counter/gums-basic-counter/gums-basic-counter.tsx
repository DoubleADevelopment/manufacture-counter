//components
import { BasicCounter } from '../../../../../components';
//store
import { useAppDispatch, useAppSelector } from '../../../../../hooks/hooks';
import { decrementAction, incrementAction } from '../../../store/actions/actions';
import { SelectorGetCurrentGumSetting } from '../../../store/slectors/selectors';
//variables
import { CounterText } from '../../../../../variables';
import { GumsLogsNames, GumsSettingsNames } from '../../../variables';

interface IGumsBasicCounterProps {
  UNID: string;
}

const GumsBasicCounter = ({ UNID }: IGumsBasicCounterProps): JSX.Element => {
  const gumsBasicCounterDefaultValue = useAppSelector(
    SelectorGetCurrentGumSetting(UNID, GumsSettingsNames.BASE_CARDBOARD_VALUE),
  );

  const dispatch = useAppDispatch();

  const inc = (value: number): void => {
    dispatch(incrementAction({ UNID: UNID, value: value, logName: GumsLogsNames.COUNTER }));
  };

  const dec = (value: number): void => {
    dispatch(decrementAction({ UNID: UNID, value: value, logName: GumsLogsNames.COUNTER }));
  };

  return (
    <BasicCounter
      inc={inc}
      dec={dec}
      title={CounterText.GUMS_BASIC_COUNTER_INPUT_TEXT}
      defaultValue={gumsBasicCounterDefaultValue}
    />
  );
};

export default GumsBasicCounter;
