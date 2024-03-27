import { useParams } from 'react-router-dom';
//components
import { PageNotification } from '../../';
//store
import { useAppSelector } from '../../../hooks/hooks';
//variables
import { ErrorsText, NotificationType } from '../../../variables';
//types
import type { RootState } from '../../../types';

interface ICounterWrapProps {
  SelectorCheckIfElementExistsByUNID: (UNID: string | undefined) => (state: RootState) => boolean;
}

const CounterWrap = ({ SelectorCheckIfElementExistsByUNID }: ICounterWrapProps): JSX.Element => {
  const { UNID } = useParams();
  const itemFromUnidIsset = useAppSelector(SelectorCheckIfElementExistsByUNID(UNID));

  const renderComponents = (): JSX.Element => {
    if (UNID && itemFromUnidIsset) {
      return <p>UNID: {UNID}</p>;
      // <CounterControls UNID={UNID} />
    } else {
      return (
        <PageNotification
          headingText={ErrorsText.COUNTER_OPENING_ERROR}
          paragraphText={ErrorsText.COMPONENT_NOT_FOUND}
          type={NotificationType.ERROR}
          additionalInfo={`${ErrorsText.COMPONENT_NOT_FOUND_WITH_UNID} ${UNID}`}
        />
      );
    }
  };

  return renderComponents();
};

export default CounterWrap;
