//components
import { BasicCounter } from '../../../../../components';
//store
import { useAppDispatch, useAppSelector } from '../../../../../hooks/hooks';
import { decrementAction, incrementAction } from '../../../store/actions/actions';
import { SelectorGetItemSetting } from '../../../store/slectors/selectors';
//variables
import { GUMS_TEXT, GumsLogsNames, GumsSettingsNames } from '../../../variables';

interface IGumsBasicCounterProps {
  UNID: string;
}

const GumsBasicCounter = ({ UNID }: IGumsBasicCounterProps): JSX.Element => {
  const gumsBasicCounterDefaultValue = useAppSelector(
    SelectorGetItemSetting(UNID, GumsSettingsNames.BASE_COUNTER_VALUE),
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
      title={GUMS_TEXT.GUMS_BASIC_COUNTER_INPUT_FIELD_TEXT}
      defaultValue={gumsBasicCounterDefaultValue}
    />
  );
};

export default GumsBasicCounter;
