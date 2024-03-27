//layouts
import { PageWithMenuLayout } from '../../layouts';
//components
import { ComponentOverview } from '../../components';
//store
import { useAppSelector } from '../../hooks/hooks';
import { SelectorGetData as SelectorGetChemistryData } from '../../app/chemistry/store/slectors/selectors';
import { SelectorGetData as SelectorGetGumsData } from '../../app/gums/store/slectors/selectors';
import { SelectorGetData as SelectorGetPigmentsData } from '../../app/pigments/store/slectors/selectors';
import { SelectorGetData as SelectorGetSuppliesData } from '../../app/supplies/store/slectors/selectors';
//adapter
import { adapterService } from '../../services';
//variables
import { AppRouting } from '../../variables';
//styles
import style from './components-overview-page.module.scss';

const ComponentOverviewPage = (): JSX.Element => {
  const chemistryData = adapterService.adaptItemsDataToDisplayList(
    useAppSelector(SelectorGetChemistryData()),
  );
  const gumsData = adapterService.adaptItemsDataToDisplayList(
    useAppSelector(SelectorGetGumsData()),
  );
  const pigmentsData = adapterService.adaptItemsDataToDisplayList(
    useAppSelector(SelectorGetPigmentsData()),
  );
  const suppliesData = adapterService.adaptItemsDataToDisplayList(
    useAppSelector(SelectorGetSuppliesData()),
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
