//layouts
import { PageWithMenuLayout } from '../../layouts';
//components
import { ComponentOverview } from '../../components';
//store
import { useAppSelector } from '../../hooks/hooks';
import { SelectorGetData as SelectorGetPigmentsData } from '../../app/pigments/store/slectors/selectors';
//adapter
import { adapterService } from '../../services';
//variables
import { AppRouting } from '../../variables';
//styles
import style from './components-overview-page.module.scss';

const ComponentOverviewPage = (): JSX.Element => {
  const pigmentsData = adapterService.adaptItemsDataToDisplayList(
    useAppSelector(SelectorGetPigmentsData()),
  );

  return (
    <PageWithMenuLayout headerTitle={AppRouting.COMPONENTS_OVERVIEW.title}>
      <main className={style['components-overview-page']}>
        <ComponentOverview data={pigmentsData} title="Pigmenty" />
      </main>
    </PageWithMenuLayout>
  );
};

export default ComponentOverviewPage;
