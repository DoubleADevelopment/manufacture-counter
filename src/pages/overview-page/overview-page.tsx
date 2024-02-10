//components
import { Header } from '../../components';
//styles
import style from './overview-page.module.scss';

const OverviewPage = (): JSX.Element => {
  return (
    <div className={`${style['overview-page']} container-mobile page`}>
      <Header />
      <main className={style['overview-page__content']}>
        <h2 className={`${style['overview-page__title']} heading-xl-large`}>Przegląd</h2>
      </main>
    </div>
  );
};

export default OverviewPage;
