//layouts
import { PageWithMenuLayout } from '../../layouts';
//styles
import style from './components-overview-page.module.scss';

const ComponentOverviewPage = (): JSX.Element => {
  return (
    <PageWithMenuLayout>
      <main className={style['components-overview-page']}>
        <h2
          className={`${style['components-overview-page__title']} heading-xl-large content-primary-a`}
        >
          Przegląd komponentów
        </h2>
      </main>
    </PageWithMenuLayout>
  );
};

export default ComponentOverviewPage;
