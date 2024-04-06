//components
import { ComponentsList } from '../../components';
//layouts
import { PageWithMenuLayout } from '../../layouts';
//variables
import { AppRouting } from '../../variables';
//styles
import style from './main-page.module.scss';

const MainPage = (): JSX.Element => {
  return (
    <PageWithMenuLayout headerTitle={AppRouting.ROOT.title}>
      <main className={style['main-page']}>
        <ComponentsList />
      </main>
    </PageWithMenuLayout>
  );
};

export default MainPage;
