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
//repository
import chemistryRepository from '../../app/chemistry/repository/chemistry-repository';
import gumsRepository from '../../app/gums/repository/gums-repository';
import pigmentsRepository from '../../app/pigments/repository/pigments-repository';
import suppliesRepository from '../../app/supplies/repository/supplies-repository';

const ComponentOverviewPage = (): JSX.Element => {
  const chemistryData = adapterService.adaptItemsDataToDisplayList(
    store.getState()[chemistryRepository.getPackageData().dataPackageName],
  );
  const gumsData = adapterService.adaptItemsDataToDisplayList(
    store.getState()[gumsRepository.getPackageData().dataPackageName],
  );
  const pigmentsData = adapterService.adaptItemsDataToDisplayList(
    store.getState()[pigmentsRepository.getPackageData().dataPackageName],
  );
  const suppliesData = adapterService.adaptItemsDataToDisplayList(
    store.getState()[suppliesRepository.getPackageData().dataPackageName],
  );

  return (
    <PageWithMenuLayout headerTitle={AppRouting.COMPONENTS_OVERVIEW.title}>
      <main className={style['components-overview-page']}>
        <ComponentOverview
          data={chemistryData}
          title={chemistryRepository.getPackageData().packageTitle}
        />
        <ComponentOverview
          data={gumsData}
          title={gumsRepository.getPackageData().dataPackageName}
        />
        <ComponentOverview
          data={pigmentsData}
          title={pigmentsRepository.getPackageData().packageTitle}
        />
        <ComponentOverview
          data={suppliesData}
          title={suppliesRepository.getPackageData().packageTitle}
        />
      </main>
    </PageWithMenuLayout>
  );
};

export default ComponentOverviewPage;
