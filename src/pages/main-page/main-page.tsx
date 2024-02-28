//components
import { ComponentsList } from '../../components';
//data
import { componentsListData } from '../../data/components-list-data';
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
        <ComponentsList dataList={componentsListData} />
      </main>
    </PageWithMenuLayout>
  );
};

export default MainPage;
