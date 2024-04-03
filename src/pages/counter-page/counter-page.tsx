//layouts
import { CounterPageLayout } from '../../layouts';
//components
import { CountableItemInfo, CounterSwitcher, PageNotification } from '../../components';
//types
import {
  ISelectorCheckIfElementExistsByUNID,
  ISelectorGetItemData,
  ClearItemDataActionType,
  IncDecActionType,
  IChangeItemAdditionalSettingActionType,
} from '../../types';
//style
import style from './counter-page.module.scss';
import { ErrorsText, NotificationType } from '../../variables';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../hooks/hooks';

interface ICounterPageProps {
  backLink: string;
  headerTitle: string;
  SelectorCheckIfElementExistsByUNID: ISelectorCheckIfElementExistsByUNID;
  SelectorGetCurrentItemData: ISelectorGetItemData;
  clearItemDataAction: ClearItemDataActionType;
  incrementAction: IncDecActionType;
  decrementAction: IncDecActionType;
  changeItemSettingAction: IChangeItemAdditionalSettingActionType;
}

const CounterPage = ({
  backLink,
  headerTitle,
  SelectorCheckIfElementExistsByUNID,
  SelectorGetCurrentItemData,
  clearItemDataAction,
  incrementAction,
  decrementAction,
  changeItemSettingAction,
}: ICounterPageProps): JSX.Element => {
  const { UNID } = useParams();
  const itemFromUnidIsset = useAppSelector(SelectorCheckIfElementExistsByUNID(UNID));

  const renderComponents = (): JSX.Element => {
    if (UNID && itemFromUnidIsset) {
      return (
        <CounterSwitcher
          UNID={UNID}
          incrementAction={incrementAction}
          decrementAction={decrementAction}
          changeItemSettingAction={changeItemSettingAction}
          SelectorGetItemData={SelectorGetCurrentItemData}
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
          SelectorCheckIfElementExistsByUNID={SelectorCheckIfElementExistsByUNID}
          SelectorGetCurrentItemData={SelectorGetCurrentItemData}
          clearItemDataAction={clearItemDataAction}
        />
        {renderComponents()}
      </main>
    </CounterPageLayout>
  );
};

export default CounterPage;
