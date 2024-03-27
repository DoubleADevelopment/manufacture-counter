import { ReactNode } from 'react';
//layouts
import { CounterPageLayout } from '../../layouts';
//components
import { CountableItemInfo } from '../../components';
//style
import style from './counter-page.module.scss';
import { clearItemDataAction } from '../../app/chemistry/store/actions/actions';
import {
  SelectorCheckIfElementExistsByUNID,
  SelectorGetItemData,
} from '../../app/chemistry/store/slectors/selectors';
import {
  ISelectorCheckIfElementExistsByUNID,
  ISelectorGetItemData,
  ClearItemDataActionType,
} from '../../types';

interface ICounterPageProps {
  backLink: string;
  headerTitle: string;
  SelectorCheckIfElementExistsByUNID: ISelectorCheckIfElementExistsByUNID;
  SelectorGetCurrentItemData: ISelectorGetItemData;
  clearItemDataAction: ClearItemDataActionType;
  children: ReactNode;
}

const CounterPage = ({ backLink, headerTitle, children }: ICounterPageProps): JSX.Element => {
  return (
    <CounterPageLayout backLink={backLink} headerTitle={headerTitle}>
      <main className={style['counter-page']}>
        <CountableItemInfo
          SelectorCheckIfElementExistsByUNID={SelectorCheckIfElementExistsByUNID}
          SelectorGetCurrentItemData={SelectorGetItemData}
          clearItemDataAction={clearItemDataAction}
        />
        {children}
      </main>
    </CounterPageLayout>
  );
};

export default CounterPage;
