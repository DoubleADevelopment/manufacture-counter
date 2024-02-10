//components
import { Header, ComponentsList } from '../../../../components';
//styles
import style from './chemistry-page.module.scss';

const ChemistryPage = () => {
  return (
    <div className={`${style['chemistry-page']} container-mobile page`}>
      <Header />
      <main className={style['chemistry-page__content']}>
        <h2 className={`${style['chemistry-page__title']} heading-xl-large`}>Chemia</h2>
        <ComponentsList />
      </main>
    </div>
  );
};

export default ChemistryPage;
