//components
import { Header } from '../../components';
//styles
import style from './main-page.module.css';

const MainPage = (): JSX.Element => {
  return (
    <div className={style['main-page']}>
      <Header />
    </div>
  );
};

export default MainPage;
