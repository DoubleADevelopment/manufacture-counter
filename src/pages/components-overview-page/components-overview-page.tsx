//layouts
import { PageWithMenuLayout } from '../../layouts';
//components
import { ComponentOverview } from '../../components';
//store
import { useAppSelector } from '../../hooks/hooks';
import { SelectorGetChemistry } from '../../app/chemistry/store/slectors/selectors';
import { SelectorGetGums } from '../../app/gums/store/slectors/selectors';
import { SelectorGetPigments } from '../../app/pigments/store/slectors/selectors';
import { SelectorGetSupplies } from '../../app/supplies/store/slectors/selectors';
//adapter
import { adapterService } from '../../services';
//variables
import { AppRouting } from '../../variables';
//styles
import style from './components-overview-page.module.scss';

const ComponentOverviewPage = (): JSX.Element => {
  const chemistryData = adapterService.adaptItemsDataToDisplayList(
    useAppSelector(SelectorGetChemistry()),
  );
  const gumsData = adapterService.adaptItemsDataToDisplayList(useAppSelector(SelectorGetGums()));
  const pigmentsData = adapterService.adaptItemsDataToDisplayList(
    useAppSelector(SelectorGetPigments()),
  );
  const suppliesData = adapterService.adaptItemsDataToDisplayList(
    useAppSelector(SelectorGetSupplies()),
  );

  return (
    <PageWithMenuLayout headerTitle={AppRouting.COMPONENTS_OVERVIEW.title}>
      <main className={style['components-overview-page']}>
        <ComponentOverview data={chemistryData} title="Chemia" />
        <ComponentOverview data={gumsData} title="Granulaty" />
        <ComponentOverview data={pigmentsData} title="Pigmenty" />
        <ComponentOverview data={suppliesData} title="Komponenty" />
      </main>
    </PageWithMenuLayout>
  );
};

export default ComponentOverviewPage;
