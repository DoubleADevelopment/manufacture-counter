//layouts
import { PageWithMenuLayout } from '../../layouts';
//styles
import style from './settings-page.module.scss';

const SettingsPage = (): JSX.Element => {
  return (
    <PageWithMenuLayout>
      <main className={style['settings-page']}>
        <h2 className={`${style['settings-page__title']} heading-xl-large content-primary-a`}>
          Ustawienia
        </h2>
      </main>
    </PageWithMenuLayout>
  );
};

export default SettingsPage;
