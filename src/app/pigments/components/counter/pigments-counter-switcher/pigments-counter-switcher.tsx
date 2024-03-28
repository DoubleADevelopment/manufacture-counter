import { useState } from 'react';
//components
import { AdditionalNav, PageNotification } from '../../../../../components';
import { PigmentsBagCounter, PigmentsBasicCounter, PigmentsContainerCounter } from '../../';
//variables
import { PIGMENTS_COUNTERS, pigmentsCountersList } from '../../../variables';
import { ErrorsText, NotificationType } from '../../../../../variables';
//styles
import style from './pigments-counter-switcher.module.scss';

interface IPigmentsCounterSwitcherProps {
  UNID: string;
  counters: string[];
}

const PigmentsCounterSwitcher = ({
  counters,
  UNID,
}: IPigmentsCounterSwitcherProps): JSX.Element => {
  const [currentCounter, setCurrentCounter] = useState<string>(counters[0]);

  const getCurrentCounterComponent = (): JSX.Element => {
    switch (currentCounter) {
      case PIGMENTS_COUNTERS.BAGS:
        return <PigmentsBagCounter UNID={UNID} />;
      case PIGMENTS_COUNTERS.COUNTER:
        return <PigmentsBasicCounter UNID={UNID} />;
      case PIGMENTS_COUNTERS.CONTAINER:
        return <PigmentsContainerCounter UNID={UNID} />;
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
          items={pigmentsCountersList}
          defaultItem={currentCounter}
        />

        {getCurrentCounterComponent()}
      </section>
    </>
  );
};

export default PigmentsCounterSwitcher;
