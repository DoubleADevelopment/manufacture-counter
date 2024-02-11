//layouts
import { PageWithMenuLayout } from '../../../../layouts';
//styles
import style from './gums-page.module.scss';

const GumsPage = () => {
  return (
    <PageWithMenuLayout>
      <main className={style['info-page__content']}>
        <h2 className={`${style['info-page__title']} heading-xl-large content-primary-a`}>
          Uszczelka
        </h2>
      </main>
    </PageWithMenuLayout>
  );
};

export default GumsPage;
