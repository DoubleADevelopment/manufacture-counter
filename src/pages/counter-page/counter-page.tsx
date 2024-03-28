import { ReactNode } from 'react';
//layouts
import { CounterPageLayout } from '../../layouts';
//components
import { CountableItemInfo } from '../../components';
//types
import {
  ISelectorCheckIfElementExistsByUNID,
  ISelectorGetItemData,
  ClearItemDataActionType,
} from '../../types';
//style
import style from './counter-page.module.scss';

interface ICounterPageProps {
  backLink: string;
  headerTitle: string;
  SelectorCheckIfElementExistsByUNID: ISelectorCheckIfElementExistsByUNID;
  SelectorGetCurrentItemData: ISelectorGetItemData;
  clearItemDataAction: ClearItemDataActionType;
  children: ReactNode;
}

const CounterPage = ({
  backLink,
  headerTitle,
  children,
  SelectorCheckIfElementExistsByUNID,
  SelectorGetCurrentItemData,
  clearItemDataAction,
}: ICounterPageProps): JSX.Element => {
  return (
    <CounterPageLayout backLink={backLink} headerTitle={headerTitle}>
      <main className={style['counter-page']}>
        <CountableItemInfo
          SelectorCheckIfElementExistsByUNID={SelectorCheckIfElementExistsByUNID}
          SelectorGetCurrentItemData={SelectorGetCurrentItemData}
          clearItemDataAction={clearItemDataAction}
        />
        {children}
      </main>
    </CounterPageLayout>
  );
};

export default CounterPage;
