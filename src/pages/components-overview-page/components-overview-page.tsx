//layouts
import { PageWithMenuLayout } from '../../layouts';
//store
import { store } from '../../store/store';
//components
import { ComponentOverview } from '../../components';
//adapter
import { adapterService } from '../../services';
//variables
import { AppRouting } from '../../variables';
//styles
import style from './components-overview-page.module.scss';

const ComponentOverviewPage = (): JSX.Element => {
  const reduxStateArray = Object.values(store.getState().packages);

  return (
    <PageWithMenuLayout headerTitle={AppRouting.COMPONENTS_OVERVIEW.title}>
      <main className={style['components-overview-page']}>
        {reduxStateArray.map((item) => {
          return (
            <ComponentOverview
              data={adapterService.adaptItemsDataToDisplayList(item.items)}
              title={item.packageTitle}
              key={item.dataPackageUNID}
            />
          );
        })}
      </main>
    </PageWithMenuLayout>
  );
};

export default ComponentOverviewPage;
