/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react';
//layouts
import { PageWithMenuLayout } from '../../layouts';
//store
import { store } from '../../store/store';
import { useAppSelector } from '../../hooks/hooks';
import { SelectorGetOverviewPanelStatus } from '../../store/app-selectors';
//components
import { ComponentOverview } from '../../components';
//adapter
import { adapterService } from '../../services';
//variables
import { AppRouting } from '../../variables';
//styles
import style from './components-overview-page.module.scss';

const ComponentOverviewPage = (): JSX.Element => {
  const overviewPanelStatus = useAppSelector(SelectorGetOverviewPanelStatus());

  const reduxStateArray = Object.values(store.getState().packages);

  const [refreshKey, setRefreshKey] = useState<number>(0);

  const refreshOverview = () => {
    setRefreshKey((prevKey) => prevKey + 1);
  };

  return (
    <PageWithMenuLayout
      headerTitle={AppRouting.COMPONENTS_OVERVIEW.title}
      additionalNav={<button onClick={refreshOverview}>test close</button>}
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
            />
          );
        })}
      </main>
    </PageWithMenuLayout>
  );
};

export default ComponentOverviewPage;
