import { useParams } from 'react-router-dom';
//components
import { PageNotification } from '../../../../components';
import CounterControls from './counter-controls/counter-controls';
//store
import { useAppSelector } from '../../../../hooks/hooks';
import { SelectorCheckIfElementExistsByUNID } from '../../store/slectors/selectors';
//variables
import { ErrorsText, NotificationType } from '../../../../variables';
import { ChemistryPackagesNames } from '../../variables/data-variables';

const Counter = (): JSX.Element => {
  const { UNID, packName } = useParams();
  const itemFromUnidIsset = useAppSelector(
    SelectorCheckIfElementExistsByUNID(UNID, packName as ChemistryPackagesNames),
  );

  const renderComponents = (): JSX.Element => {
    if (UNID && packName && itemFromUnidIsset) {
      return <CounterControls UNID={UNID} packName={packName as ChemistryPackagesNames} />;
    } else {
      return (
        <PageNotification
          headingText={ErrorsText.COUNTER_OPENING_ERROR}
          paragraphText={ErrorsText.COMPONENT_NOT_FOUND}
          type={NotificationType.ERROR}
        />
      );
    }
  };

  return renderComponents();
};

export default Counter;
