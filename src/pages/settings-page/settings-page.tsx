//components
import { Header } from '../../components';
//styles
import style from './settings-page.module.scss';

const SettingsPage = (): JSX.Element => {
  return (
    <div className={`${style['settings-page']} container-mobile page`}>
      <Header />
      <main className={style['settings-page__content']}>
        <h2 className={`${style['settings-page__title']} heading-xl-large`}>Ustawienia</h2>
      </main>
    </div>
  );
};

export default SettingsPage;
