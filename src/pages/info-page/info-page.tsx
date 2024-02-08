//components
import { Header } from '../../components';
//styles
import style from './info-page.module.scss';

const InfoPage = (): JSX.Element => {
  return (
    <div className={`${style['info-page']} container-mobile page`}>
      <Header />
      <main className={style['info-page__content']}>
        <h2 className={`${style['info-page__title']} heading-xl-large`}>Informacja o aplikacji</h2>
      </main>
    </div>
  );
};

export default InfoPage;
