//layouts
import { PageWithMenuLayout } from '../../layouts';
//variables
import { AppRouting } from '../../variables';
//styles
import style from './components-overview-page.module.scss';

const ComponentOverviewPage = (): JSX.Element => {
  return (
    <PageWithMenuLayout headerTitle={AppRouting.COMPONENTS_OVERVIEW.title}>
      <main className={style['components-overview-page']}></main>
    </PageWithMenuLayout>
  );
};

export default ComponentOverviewPage;
