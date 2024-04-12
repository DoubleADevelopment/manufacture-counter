//layouts
import { PageWithMenuLayout } from '../../layouts';
//component
import { OverviewSetting, CountersSetting } from '../../components/';
//variables
import { AppRouting } from '../../variables';
//styles
import style from './settings-page.module.scss';

const SettingsPage = (): JSX.Element => {
  return (
    <PageWithMenuLayout headerTitle={AppRouting.SETTINGS.title}>
      <main className={style['settings-page']}>
        <CountersSetting />
        <OverviewSetting />
      </main>
    </PageWithMenuLayout>
  );
};

export default SettingsPage;
