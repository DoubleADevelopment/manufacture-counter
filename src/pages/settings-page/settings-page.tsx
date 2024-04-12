//layouts
import { PageWithMenuLayout } from '../../layouts';
//component
import { AppSetting, CountersSetting } from '../../components/';
//variables
import { AppRouting } from '../../variables';
//styles
import style from './settings-page.module.scss';

const SettingsPage = (): JSX.Element => {
  return (
    <PageWithMenuLayout headerTitle={AppRouting.SETTINGS.title}>
      <main className={style['settings-page']}>
        <CountersSetting />
        <AppSetting />
      </main>
    </PageWithMenuLayout>
  );
};

export default SettingsPage;
