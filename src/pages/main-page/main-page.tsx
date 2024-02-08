//components
import { Header, CountersList } from '../../components';
//styles
import style from './main-page.module.css';

const MainPage = (): JSX.Element => {
  return (
    <div className={`${style['main-page']} container-mobile page`}>
      <Header />
      <main className={style['main-page__content']}>
        <h2 className={`${style['main-page__title']} heading-xl-large`}>Strona główna</h2>

        <CountersList />
      </main>
    </div>
  );
};

export default MainPage;
