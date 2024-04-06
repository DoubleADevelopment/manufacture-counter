//components
import { ComponentsList } from '../../components';
//store
import { store } from '../../store/store';
//layouts
import { PageWithMenuLayout } from '../../layouts';
//variables
import { AppRouting } from '../../variables';
//styles
import style from './main-page.module.scss';

const MainPage = (): JSX.Element => {
  const reduxStateArray = Object.values(store.getState());

  return (
    <PageWithMenuLayout headerTitle={AppRouting.ROOT.title}>
      <main className={style['main-page']}>
        <ComponentsList dataList={reduxStateArray} />
      </main>
    </PageWithMenuLayout>
  );
};

export default MainPage;
