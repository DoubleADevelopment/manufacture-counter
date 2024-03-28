import { useState } from 'react';
//components
import { AdditionalNav, PageNotification } from '../../../../../components';
import { GumsCardboardCounter, GumsBasicCounter } from '../../';
//variables
import { GUMS_COUNTERS, gumsCountersList } from '../../../variables';
import { ErrorsText, NotificationType } from '../../../../../variables';
//styles
import style from './gums-counter-switcher.module.scss';

interface IGumsCounterSwitcherProps {
  counters: string[];
  UNID: string;
}

const GumsCounterSwitcher = ({ counters, UNID }: IGumsCounterSwitcherProps): JSX.Element => {
  const [currentCounter, setCurrentCounter] = useState<string>(counters[0]);

  const getCurrentCounterComponent = (): JSX.Element => {
    switch (currentCounter) {
      case GUMS_COUNTERS.CARDBOARD:
        return <GumsCardboardCounter UNID={UNID} />;
      case GUMS_COUNTERS.COUNTER:
        return <GumsBasicCounter UNID={UNID} />;
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
      <section className={style['gums-counter-switcher']}>
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

export default GumsCounterSwitcher;
