//layouts
import { PageWithMenuLayout } from '../../layouts';
//styles
import style from './info-page.module.scss';

const InfoPage = (): JSX.Element => {
  return (
    <PageWithMenuLayout>
      <main className={style['info-page']}>
        <h2 className={`${style['info-page__title']} heading-xl-large content-primary-a`}>
          Informacja o aplikacji
        </h2>
      </main>
    </PageWithMenuLayout>
  );
};

export default InfoPage;
