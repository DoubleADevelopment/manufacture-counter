import { useParams } from 'react-router-dom';
//components
import { NotificationStatic } from '../../../../components';
import CounterControls from './counter-controls/counter-controls';
//store
import { useAppSelector } from '../../../../hooks/hooks';
import { SelectorCheckIfElementExistsByUNID } from '../../store/slectors/selectors';
//variables
import { ErrorsText, NotificationType } from '../../../../variables';
//style
import style from './counter.module.scss';

const Counter = (): JSX.Element => {
  const { UNID } = useParams();
  const itemFromUnidIsset = useAppSelector(SelectorCheckIfElementExistsByUNID(UNID));
  const displayCounter = UNID && itemFromUnidIsset;

  return (
    <main className={style['counter']}>
      {displayCounter ? (
        <CounterControls UNID={UNID} />
      ) : (
        <NotificationStatic
          headingText="Błąd przy otwarciu licznika"
          paragraphText={ErrorsText.COMPONENT_NOT_FOUND}
          type={NotificationType.ERROR}
        />
      )}
    </main>
  );
};

export default Counter;
