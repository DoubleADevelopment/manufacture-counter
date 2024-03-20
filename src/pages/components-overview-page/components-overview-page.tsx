//layouts
import { PageWithMenuLayout } from '../../layouts';
//store
import { useAppSelector } from '../../hooks/hooks';
//variables
import { AppRouting } from '../../variables';
//styles
import style from './components-overview-page.module.scss';
import { SelectorGetExtrusionChemistry } from '../../app/chemistry/store/slectors/selectors';

const ComponentOverviewPage = (): JSX.Element => {
  const chemistryData = useAppSelector(SelectorGetExtrusionChemistry());
  console.log(chemistryData);

  return (
    <PageWithMenuLayout headerTitle={AppRouting.COMPONENTS_OVERVIEW.title}>
      <main className={style['components-overview-page']}></main>
    </PageWithMenuLayout>
  );
};

export default ComponentOverviewPage;
