//layouts
import { PageWithMenuLayout } from '../../layouts';
//component
import { ComponentsSetting } from '../../components/settings';
//variables
import { AppRouting } from '../../variables';
//styles
import style from './settings-page.module.scss';

const SettingsPage = (): JSX.Element => {
  return (
    <PageWithMenuLayout headerTitle={AppRouting.SETTINGS.title}>
      <main className={style['settings-page']}>
        <ComponentsSetting />
      </main>
    </PageWithMenuLayout>
  );
};

export default SettingsPage;
