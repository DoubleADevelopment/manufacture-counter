//components
import { ComponentsList } from '../../components';
//layouts
import { PageWithMenuLayout } from '../../layouts';
//styles
import style from './main-page.module.scss';

const MainPage = (): JSX.Element => {
  return (
    <PageWithMenuLayout>
      <main className={style['main-page']}>
        <h2 className={`${style['main-page__title']} heading-xl-large content-primary-a`}>
          Strona główna
        </h2>

        <ComponentsList />
      </main>
    </PageWithMenuLayout>
  );
};

export default MainPage;
