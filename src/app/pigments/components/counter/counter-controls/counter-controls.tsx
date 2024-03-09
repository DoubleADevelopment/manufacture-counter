//components
import { useState } from 'react';
import { AdditionalNav, PageNotification } from '../../../../../components';
import GumsBagCounter from '../pigments-bag-counter/pigments-bag-counter';
import GumsBasicCounter from '../pigments-basic-counter/pigments-basic-counter';
import GumsContainerCounter from '../pigments-container-counter/pigments-container-counter';
//variables
import { PIGMENTS_COUNTERS, pigmentsCountersList } from '../../../variables';
import { ErrorsText, NotificationType } from '../../../../../variables';
//styles
import style from './counter-controls.module.scss';

interface ICounterControlsProps {
  UNID: string;
}

const CounterControls = ({ UNID }: ICounterControlsProps): JSX.Element => {
  const [currentCounter, setCurrentCounter] = useState<string>(PIGMENTS_COUNTERS.CONTAINER);

  const getCurrentCounterComponent = (): JSX.Element => {
    switch (currentCounter) {
      case PIGMENTS_COUNTERS.BAGS:
        return <GumsBagCounter UNID={UNID} />;
      case PIGMENTS_COUNTERS.COUNTER:
        return <GumsBasicCounter UNID={UNID} />;
      case PIGMENTS_COUNTERS.CONTAINER:
        return <GumsContainerCounter UNID={UNID} />;
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
      <section className={style['counter-controls']}>
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

export default CounterControls;
