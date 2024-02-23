//layouts
import { PageWithMenuLayout } from '../../../../layouts';
//variables
import { ComponentsRouting } from '../../../../variables';
//styles
import style from './pigments-page.module.scss';

const PigmentsPage = () => {
  return (
    <PageWithMenuLayout headerTitle={ComponentsRouting.PIGMENTS.title}>
      <main className={style['info-page']}></main>
    </PageWithMenuLayout>
  );
};

export default PigmentsPage;
