import { useState } from 'react';
//components
import { AdditionalNav, PageNotification } from '../../../../../components';
import { SuppliesCardboardCounter, SuppliesBasicCounter } from '../..';
//variables
import { SUPPLIES_COUNTERS } from '../../../variables';
import { ErrorsText, NotificationType } from '../../../../../variables';
//styles
import style from './counter-switcher.module.scss';

interface ICounterSwitcheProps {
  counters: string[];
  UNID: string;
}

const CounterSwitcher = ({ counters, UNID }: ICounterSwitcheProps): JSX.Element => {
  const [currentCounter, setCurrentCounter] = useState<string>(counters[0]);

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
            additionalInfo={`"${currentCounter}" nie odpowiada liscie liczników SUPPLIES_COUNTERS.`}
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
          items={counters}
          defaultItem={currentCounter}
        />

        {getCurrentCounterComponent()}
      </section>
    </>
  );
};

export default CounterSwitcher;
