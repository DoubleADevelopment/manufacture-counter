//layouts
import { PageWithMenuLayout } from '../../../../layouts';
//styles
import style from './pigments-page.module.scss';

const PigmentsPage = () => {
  return (
    <PageWithMenuLayout>
      <main className={style['info-page']}>
        <h2 className={`${style['info-page__title']} heading-xl-large content-primary-a`}>
          Pigmenty
        </h2>
      </main>
    </PageWithMenuLayout>
  );
};

export default PigmentsPage;
