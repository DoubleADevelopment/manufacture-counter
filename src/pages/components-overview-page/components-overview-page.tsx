import { useEffect, useState } from 'react';
//layouts
import { PageWithMenuLayout } from '../../layouts';
//store
import { store } from '../../store/store';
import { useAppSelector } from '../../hooks/hooks';
import { SelectorGetOverviewPanelStatus } from '../../store/app-selectors';
//components
import { ComponentOverview, ButtonSecondarySmall } from '../../components';
//adapter
import { adapterService } from '../../services';
//variables
import { AppRouting, InterfaceText } from '../../variables';
//utils
import { componentOverviewItemsHasOpenStatus } from '../../utils/utils';
//types
import type {
  IComponentOverviewOpenItems,
  IOverviewRefreshStatusKey,
  overviewPanelStatusType,
} from '../../types';
//styles
import style from './components-overview-page.module.scss';

const ComponentOverviewPage = (): JSX.Element => {
  const overviewPanelStatus = useAppSelector(SelectorGetOverviewPanelStatus());

  const reduxStateArray = Object.values(store.getState().packages);

  const [refreshStatushKey, setRefreshStatusKey] = useState<IOverviewRefreshStatusKey>({
    key: overviewPanelStatus,
  });

  const [openItems, setOpenItems] = useState<IComponentOverviewOpenItems>({});

  const closeAllOverviews = () => {
    setRefreshStatusKey(() => {
      return { key: 'close' };
    });
  };

  const openAllOverviews = () => {
    setRefreshStatusKey(() => {
      return { key: 'open' };
    });
  };

  const setItemShowStatus = (status: overviewPanelStatusType, packageName: string): void => {
    setOpenItems((prev) => {
      return { ...prev, [packageName]: status };
    });
  };

  useEffect(() => {
    const initOpenItemsObject: IComponentOverviewOpenItems =
      reduxStateArray.reduce<IComponentOverviewOpenItems>((acc, item) => {
        acc[item.packageTitle] = overviewPanelStatus;
        return acc;
      }, {});

    setOpenItems(initOpenItemsObject);
  }, []);

  return (
    <PageWithMenuLayout
      headerTitle={AppRouting.COMPONENTS_OVERVIEW.title}
      additionalNav={
        componentOverviewItemsHasOpenStatus(openItems) ? (
          <ButtonSecondarySmall
            clickHandler={closeAllOverviews}
            text={InterfaceText.CLOSE_ALL_OVERVIEWS}
          />
        ) : (
          <ButtonSecondarySmall
            clickHandler={openAllOverviews}
            text={InterfaceText.OPEN_ALL_OVERVIEWS}
          />
        )
      }
    >
      <main className={style['components-overview-page']}>
        {reduxStateArray.map((item) => {
          return (
            <ComponentOverview
              data={adapterService.adaptItemsDataToDisplayList(item.items)}
              title={item.packageTitle}
              key={item.dataPackageUNID}
              isOpen={overviewPanelStatus}
              refreshStatushKey={refreshStatushKey}
              setItemShowStatus={setItemShowStatus}
            />
          );
        })}
      </main>
    </PageWithMenuLayout>
  );
};

export default ComponentOverviewPage;
