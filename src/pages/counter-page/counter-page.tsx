import { useParams } from 'react-router-dom';
//store
import { useAppSelector } from '../../hooks/hooks';
//layouts
import { CounterPageLayout } from '../../layouts';
//components
import { CountableItemInfo, CounterSwitcher, PageNotification } from '../../components';
//types
import { ISelectors, IActions } from '../../types';
//variables
import { ErrorsText, NotificationType } from '../../variables';
//style
import style from './counter-page.module.scss';

interface ICounterPageProps {
  backLink: string;
  headerTitle: string;
  Selectors: ISelectors;
  Actions: IActions;
}

const CounterPage = ({
  backLink,
  headerTitle,
  Selectors,
  Actions,
}: ICounterPageProps): JSX.Element => {
  const { UNID } = useParams();
  const itemFromUnidIsset = useAppSelector(Selectors.SelectorCheckIfElementExistsByUNID(UNID));

  const renderComponents = (): JSX.Element => {
    if (UNID && itemFromUnidIsset) {
      return (
        <CounterSwitcher
          UNID={UNID}
          incrementAction={Actions.incrementAction}
          decrementAction={Actions.decrementAction}
          changeItemAdditionalSettingAction={Actions.changeItemAdditionalSettingAction}
          SelectorGetItemData={Selectors.SelectorGetItemData}
        />
      );
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

  return (
    <CounterPageLayout backLink={backLink} headerTitle={headerTitle}>
      <main className={style['counter-page']}>
        <CountableItemInfo
          SelectorCheckIfElementExistsByUNID={Selectors.SelectorCheckIfElementExistsByUNID}
          SelectorGetCurrentItemData={Selectors.SelectorGetItemData}
          clearItemDataAction={Actions.clearItemDataAction}
        />
        {renderComponents()}
      </main>
    </CounterPageLayout>
  );
};

export default CounterPage;
