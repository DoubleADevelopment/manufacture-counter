//components
import { useState } from 'react';
import { AdditionalNav, BasicCounter, ItemsCounter } from '../../../../../components';
//store
import { useAppDispatch, useAppSelector } from '../../../../../hooks/hooks';
import {
  changeItemSettingAction,
  decrementAction,
  incrementAction,
} from '../../../store/actions/actions';
import {
  GUMS_COUNTERS,
  GumsLogsNames,
  GumsSettingsNames,
  gumsCountersList,
} from '../../../variables';
//styles
import style from './counter-controls.module.scss';
import { SelectorGetCurrentGumSetting } from '../../../store/slectors/selectors';

interface ICounterControlsProps {
  UNID: string;
}

const CounterControls = ({ UNID }: ICounterControlsProps): JSX.Element => {
  const [currentCounter, setCurrentCounter] = useState<GUMS_COUNTERS>(GUMS_COUNTERS.CARDBOARD);
  const dispatch = useAppDispatch();
  const cardboardDefaultValue = useAppSelector(
    SelectorGetCurrentGumSetting(UNID, GumsSettingsNames.BASE_CARDBOARD_VALUE),
  );

  const getCurrentLogName = (): GumsLogsNames => {
    switch (currentCounter) {
      case GUMS_COUNTERS.CARDBOARD:
        return GumsLogsNames.CARDBOARD;
      case GUMS_COUNTERS.COUNTER:
        return GumsLogsNames.COUNTER;
      default:
        const exhaustiveCheck: never = currentCounter;
        throw new Error(`Unhandled notification type: ${exhaustiveCheck}`);
    }
  };

  const inc = (value: number): void => {
    dispatch(incrementAction({ UNID: UNID, value: value, logName: getCurrentLogName() }));
  };

  const dec = (value: number): void => {
    dispatch(decrementAction({ UNID: UNID, value: value, logName: getCurrentLogName() }));
  };

  const additionalNavHandler = (value: string): void => {
    if (value === GUMS_COUNTERS.CARDBOARD || value === GUMS_COUNTERS.COUNTER) {
      setCurrentCounter(value);
    } else {
      console.log('Value dont pass to GUMS_COUNTERS');
    }
  };

  const changeCardboarSetting = (value: number) => {
    dispatch(
      changeItemSettingAction({
        UNID: UNID,
        settingName: GumsSettingsNames.BASE_CARDBOARD_VALUE,
        newSettingValue: value,
      }),
    );
  };

  const getCurrentCounterComponent = (): JSX.Element => {
    switch (currentCounter) {
      case GUMS_COUNTERS.CARDBOARD:
        return (
          <ItemsCounter
            inc={inc}
            dec={dec}
            onValueChangeHandler={changeCardboarSetting}
            defaultValue={cardboardDefaultValue}
          />
        );
      case GUMS_COUNTERS.COUNTER:
        return <BasicCounter inc={inc} dec={dec} />;
      default:
        const exhaustiveCheck: never = currentCounter;
        throw new Error(`Unhandled notification type: ${exhaustiveCheck}`);
    }
  };

  return (
    <>
      <section className={style['counter-controls']}>
        <h2 className="visually-hidden">Licnik</h2>
        <AdditionalNav
          changeHandler={additionalNavHandler}
          items={gumsCountersList}
          defaultItem={currentCounter}
        />

        {getCurrentCounterComponent()}
      </section>
    </>
  );
};

export default CounterControls;
