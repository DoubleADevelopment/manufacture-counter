//components
import { Header } from '../../components';
//styles
import style from './components-overview-page.module.scss';

const ComponentOverviewPage = (): JSX.Element => {
  return (
    <div className={`${style['components-overview-page']} container-mobile page`}>
      <Header />
      <main className={style['components-overview-page__content']}>
        <h2 className={`${style['components-overview-page__title']} heading-xl-large`}>
          Przegląd komponentów
        </h2>
      </main>
    </div>
  );
};

export default ComponentOverviewPage;
