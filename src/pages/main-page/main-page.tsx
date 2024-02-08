//components
import { Header } from '../../components';
//styles
import style from './main-page.module.css';

const MainPage = (): JSX.Element => {
  return (
    <div className={`${style['main-page']} container-mobile page`}>
      <Header />
      <main className={style['main-page__content']}></main>
    </div>
  );
};

export default MainPage;
