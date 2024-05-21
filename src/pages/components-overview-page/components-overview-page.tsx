/* eslint-disable @typescript-eslint/no-unused-vars */
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
//styles
import style from './components-overview-page.module.scss';
import { overviewPanelStatusType } from '../../types';

const ComponentOverviewPage = (): JSX.Element => {
  const overviewPanelStatus = useAppSelector(SelectorGetOverviewPanelStatus());

  const reduxStateArray = Object.values(store.getState().packages);

  const [refreshKey, setRefreshKey] = useState<{ refresh: overviewPanelStatusType }>({
    refresh: overviewPanelStatus,
  });
  const [openItems, setOpenItems] = useState<{ [key: string]: overviewPanelStatusType }>({});

  const closeAllOverviews = () => {
    setRefreshKey(() => {
      return { refresh: 'close' };
    });
  };
  const openAllOverviews = () => {
    setRefreshKey(() => {
      return { refresh: 'open' };
    });
  };

  const setItemShowStatus = (status: overviewPanelStatusType, packageName: string): void => {
    console.log(status, packageName);
    setOpenItems((prev) => {
      return { ...prev, [packageName]: status };
    });
  };

  useEffect(() => {
    const initOpenItemsObject: { [key: string]: overviewPanelStatusType } = {};
    const defaultItemOpenStatus = overviewPanelStatus;

    reduxStateArray.map((item) => {
      initOpenItemsObject[item.packageTitle] = defaultItemOpenStatus;
    });

    setOpenItems(initOpenItemsObject);
  }, []);

  const hasOpenStatus = () => Object.values(openItems).some((status) => status === 'open');

  useEffect(() => {
    console.log(openItems);
  }, [openItems]);

  return (
    <PageWithMenuLayout
      headerTitle={AppRouting.COMPONENTS_OVERVIEW.title}
      additionalNav={
        <ButtonSecondarySmall
          clickHandler={hasOpenStatus() ? closeAllOverviews : openAllOverviews}
          text={
            hasOpenStatus() ? InterfaceText.CLOSE_ALL_OVERVIEWS : InterfaceText.OPEN_ALL_OVERVIEWS
          }
        />
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
              refreshKey={refreshKey}
              setItemShowStatus={setItemShowStatus}
            />
          );
        })}
      </main>
    </PageWithMenuLayout>
  );
};

export default ComponentOverviewPage;
