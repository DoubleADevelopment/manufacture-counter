import { useState } from 'react';
//components
import {
  AdditionalNav,
  BasicCounterWrap,
  CounterWithAdditionalValueWrap,
  PageNotification,
} from '../../../../../components';
//variables
import { COUNTERS, ErrorsText, NotificationType } from '../../../../../variables';
//styles
import style from './pigments-counter-switcher.module.scss';
import { IAdditionalNavItem, IItemData } from '../../../../../types';
import { useAppSelector } from '../../../../../hooks/hooks';
import { SelectorGetItemData } from '../../../store/slectors/selectors';
import {
  changeItemSettingAction,
  decrementAction,
  incrementAction,
} from '../../../store/actions/actions';

interface IPigmentsCounterSwitcherProps {
  UNID: string;
}

const PigmentsCounterSwitcher = ({ UNID }: IPigmentsCounterSwitcherProps): JSX.Element => {
  const item: IItemData = useAppSelector(SelectorGetItemData(UNID));

  const countersArray: IAdditionalNavItem[] = Object.entries(item.counters).map(([key, value]) => {
    return {
      value: key,
      title: value.counterTitle,
    };
  });

  const [currentCounter, setCurrentCounter] = useState<string>(countersArray[0].value);

  const getCurrentCounterComponent = (): JSX.Element => {
    const curCounterType = item.counters[currentCounter].counterType;

    switch (curCounterType) {
      case COUNTERS.ADDITIONAL_VALUE_COUNTER:
        return (
          <CounterWithAdditionalValueWrap
            UNID={item.UNID}
            counter={item.counters[currentCounter]}
            incrementAction={incrementAction}
            decrementAction={decrementAction}
            changeItemSettingAction={changeItemSettingAction}
          />
        );
      case COUNTERS.BASIC_COUNTER:
        return (
          <BasicCounterWrap
            UNID={item.UNID}
            counter={item.counters[currentCounter]}
            incrementAction={incrementAction}
            decrementAction={decrementAction}
          />
        );
      default:
        return (
          <PageNotification
            type={NotificationType.ERROR}
            headingText={ErrorsText.COUNTER_OPENING_ERROR}
            paragraphText={`${ErrorsText.FAILED_OPEN_COUNTER_CALLED_COUNTERNAME} "${currentCounter}".`}
            additionalInfo={`"${currentCounter}" nie odpowiada liscie liczników PIGMENTS_COUNTERS.`}
          />
        );
    }
  };

  const additionalNavHandler = (value: string): void => {
    setCurrentCounter(value);
  };

  return (
    <>
      <section className={style['pigments-counter-switcher']}>
        <h2 className="visually-hidden">Licnik</h2>
        <AdditionalNav
          changeHandler={additionalNavHandler}
          items={countersArray}
          defaultItem={currentCounter}
        />

        {getCurrentCounterComponent()}
      </section>
    </>
  );
};

export default PigmentsCounterSwitcher;
