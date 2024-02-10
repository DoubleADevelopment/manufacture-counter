//components
import { Header } from '../../../../components';
//styles
import style from './chemistry-page.module.scss';

const ChemistryPage = () => {
  return (
    <div className={`${style['info-page']} container-mobile page`}>
      <Header />
      <main className={style['info-page__content']}>
        <h2 className={`${style['info-page__title']} heading-xl-large`}>Chemia</h2>
      </main>
    </div>
  );
};

export default ChemistryPage;
