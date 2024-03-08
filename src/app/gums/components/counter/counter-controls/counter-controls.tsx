//components
import { useState } from 'react';
import { AdditionalNav } from '../../../../../components';
import GumsCardboardCounter from '../gums-cardboard-counter/gums-cardboard-counter';
//variables
import { GUMS_COUNTERS, gumsCountersList } from '../../../variables';
//styles
import style from './counter-controls.module.scss';
import GumsBasicCounter from '../gums-basic-counter/gums-basic-counter';

interface ICounterControlsProps {
  UNID: string;
}

const CounterControls = ({ UNID }: ICounterControlsProps): JSX.Element => {
  const [currentCounter, setCurrentCounter] = useState<GUMS_COUNTERS>(GUMS_COUNTERS.CARDBOARD);

  const getCurrentCounterComponent = (): JSX.Element => {
    switch (currentCounter) {
      case GUMS_COUNTERS.CARDBOARD:
        return <GumsCardboardCounter UNID={UNID} />;
      case GUMS_COUNTERS.COUNTER:
        return <GumsBasicCounter UNID={UNID} />;
      default:
        const exhaustiveCheck: never = currentCounter;
        throw new Error(`Unhandled notification type: ${exhaustiveCheck}`);
    }
  };

  const additionalNavHandler = (value: string): void => {
    if (value === GUMS_COUNTERS.CARDBOARD || value === GUMS_COUNTERS.COUNTER) {
      setCurrentCounter(value);
    } else {
      console.log('Value dont pass to GUMS_COUNTERS');
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
