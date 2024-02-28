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

interface ICounterProps {
  packageName: ChemistryPackagesNames;
}

const Counter = ({ packageName }: ICounterProps): JSX.Element => {
  const { UNID } = useParams();
  const itemFromUnidIsset = useAppSelector(SelectorCheckIfElementExistsByUNID(UNID, packageName));

  const renderComponents = (): JSX.Element => {
    if (UNID && itemFromUnidIsset) {
      return <CounterControls UNID={UNID} packName={packageName} />;
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
