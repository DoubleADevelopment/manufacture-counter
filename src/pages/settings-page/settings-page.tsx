//layouts
import { PageWithMenuLayout } from '../../layouts';
//variables
import { AppRouting } from '../../variables';
//styles
import style from './settings-page.module.scss';

const SettingsPage = (): JSX.Element => {
  return (
    <PageWithMenuLayout headerTitle={AppRouting.SETTINGS.title}>
      <main className={style['settings-page']}></main>
    </PageWithMenuLayout>
  );
};

export default SettingsPage;
