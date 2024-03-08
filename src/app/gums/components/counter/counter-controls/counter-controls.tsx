//components
import { useState } from 'react';
import { AdditionalNav, PageNotification } from '../../../../../components';
import GumsCardboardCounter from '../gums-cardboard-counter/gums-cardboard-counter';
import GumsBasicCounter from '../gums-basic-counter/gums-basic-counter';
//variables
import { GUMS_COUNTERS, gumsCountersList } from '../../../variables';
import { ErrorsText, NotificationType } from '../../../../../variables';
//styles
import style from './counter-controls.module.scss';

interface ICounterControlsProps {
  UNID: string;
}

const CounterControls = ({ UNID }: ICounterControlsProps): JSX.Element => {
  const [currentCounter, setCurrentCounter] = useState<string>(GUMS_COUNTERS.CARDBOARD);

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
            paragraphText={`Nie udało się otworzyć licznik o nazwie - "${currentCounter}".`}
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
