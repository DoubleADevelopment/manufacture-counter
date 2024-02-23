//layouts
import { PageWithMenuLayout } from '../../layouts';
//variables
import { AppRouting } from '../../variables';
//styles
import style from './info-page.module.scss';

const InfoPage = (): JSX.Element => {
  return (
    <PageWithMenuLayout headerTitle={AppRouting.INFORMATION.title}>
      <main className={style['info-page']}></main>
    </PageWithMenuLayout>
  );
};

export default InfoPage;
