//layouts
import { PageWithMenuLayout } from '../../layouts';
//components
import { ComponentOverview } from '../../components';
//store
import { useAppSelector } from '../../hooks/hooks';
import { SelectorGetExtrusionChemistry } from '../../app/chemistry/store/slectors/selectors';
import { SelectorGetGums } from '../../app/gums/store/slectors/selectors';
import { SelectorGetPigments } from '../../app/pigments/store/slectors/selectors';
//app services
import chemistryAdapterService from '../../app/chemistry/services/chemistry-adapter.service';
import gumsAdapterService from '../../app/gums/services/gums-adapter.service';
import pigmentsAdapterService from '../../app/pigments/services/pigments-adapter.service';
//variables
import { AppRouting } from '../../variables';
//styles
import style from './components-overview-page.module.scss';

const ComponentOverviewPage = (): JSX.Element => {
  const chemistryData = chemistryAdapterService.adaptItemsDataToDisplayList(
    useAppSelector(SelectorGetExtrusionChemistry()),
  );
  const gumsData = gumsAdapterService.adaptItemsDataToDisplayList(
    useAppSelector(SelectorGetGums()),
  );
  const pigmentsData = pigmentsAdapterService.adaptItemsDataToDisplayList(
    useAppSelector(SelectorGetPigments()),
  );

  console.log(chemistryData, gumsData, pigmentsData);

  return (
    <PageWithMenuLayout headerTitle={AppRouting.COMPONENTS_OVERVIEW.title}>
      <main className={style['components-overview-page']}>
        <ComponentOverview data={chemistryData} title="Chemia" />
        <ComponentOverview data={gumsData} title="Granulaty" />
        <ComponentOverview data={pigmentsData} title="Pigmenty" />
      </main>
    </PageWithMenuLayout>
  );
};

export default ComponentOverviewPage;
