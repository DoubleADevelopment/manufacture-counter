//types
import { useState } from 'react';
import { AdditionalNav, PageNotification } from '../../../../../components';
import { COUNTERS_TYPES, ErrorsText, NotificationType } from '../../../../../variables';
//styles
import style from './counter-switcher.module.scss';
import SuppliesBasicCounter from '../supplies-basic-counter/supplies-basic-counter';
import { SuppliesCardboardCounter } from '../..';
import { SUPPLIES_COUNTERS } from '../../../variables';

interface ICounterSwitcheProps {
  counters: { counterName: string; counterComponent: COUNTERS_TYPES }[];
  UNID: string;
}

const CounterSwitcher = ({ counters, UNID }: ICounterSwitcheProps): JSX.Element => {
  const [currentCounter, setCurrentCounter] = useState<string>(counters[0].counterName);

  const countersArray: string[] = [];
  counters.forEach((counter) => {
    countersArray.push(counter.counterName);
  });

  const getCurrentCounterComponent = (): JSX.Element => {
    switch (currentCounter) {
      case SUPPLIES_COUNTERS.COUNTER:
        return <SuppliesBasicCounter UNID={UNID} />;
      case SUPPLIES_COUNTERS.CARDBOARD:
        return <SuppliesCardboardCounter UNID={UNID} />;
      default:
        return (
          <PageNotification
            type={NotificationType.ERROR}
            headingText={ErrorsText.COUNTER_OPENING_ERROR}
            paragraphText={`${ErrorsText.FAILED_OPEN_COUNTER_CALLED_COUNTERNAME} "${currentCounter}".`}
            additionalInfo={`"${currentCounter}" nie odpowiada liscie liczników GUMS_COUNTERS.`}
          />
        );
    }
  };

  const additionalNavHandler = (value: string): void => {
    setCurrentCounter(value);
  };

  return (
    <>
      <section className={style['counter-switcher']}>
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

export default CounterSwitcher;
