//components
import { Header } from '../../../../components';
//styles
import style from './pigments-page.module.scss';

const PigmentsPage = () => {
  return (
    <div className={`${style['info-page']} container-mobile page`}>
      <Header />
      <main className={style['info-page__content']}>
        <h2 className={`${style['info-page__title']} heading-xl-large`}>Pigmenty</h2>
      </main>
    </div>
  );
};

export default PigmentsPage;
