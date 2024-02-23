//layouts
import { PageWithMenuLayout } from '../../../../layouts';
//variables
import { ComponentsRouting } from '../../../../variables';
//styles
import style from './gums-page.module.scss';

const GumsPage = () => {
  return (
    <PageWithMenuLayout headerTitle={ComponentsRouting.GUMS.title}>
      <main className={style['info-page__content']}></main>
    </PageWithMenuLayout>
  );
};

export default GumsPage;
