//components
import { Header } from '../../../../components';
//styles
import style from './gums-page.module.scss';

const GumsPage = () => {
  return (
    <div className={`${style['info-page']} container-mobile page`}>
      <Header />
      <main className={style['info-page__content']}>
        <h2 className={`${style['info-page__title']} heading-xl-large`}>Uszczelka</h2>
      </main>
    </div>
  );
};

export default GumsPage;
