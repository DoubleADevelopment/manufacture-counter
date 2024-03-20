//layouts
import { PageWithMenuLayout } from '../../layouts';
//store
import { useAppSelector } from '../../hooks/hooks';
import { SelectorGetExtrusionChemistry } from '../../app/chemistry/store/slectors/selectors';
import { SelectorGetGums } from '../../app/gums/store/slectors/selectors';
import { SelectorGetPigments } from '../../app/pigments/store/slectors/selectors';
//variables
import { AppRouting } from '../../variables';
//styles
import style from './components-overview-page.module.scss';

const ComponentOverviewPage = (): JSX.Element => {
  const chemistryData = useAppSelector(SelectorGetExtrusionChemistry());
  const gumsData = useAppSelector(SelectorGetGums());
  const pigmentsData = useAppSelector(SelectorGetPigments());

  console.log(chemistryData);
  console.log(gumsData);
  console.log(pigmentsData);

  return (
    <PageWithMenuLayout headerTitle={AppRouting.COMPONENTS_OVERVIEW.title}>
      <main className={style['components-overview-page']}></main>
    </PageWithMenuLayout>
  );
};

export default ComponentOverviewPage;
