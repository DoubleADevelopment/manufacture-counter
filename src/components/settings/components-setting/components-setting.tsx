//components
import { ButtonDeleteWithConfirm } from '../../buttons';
//styles
import style from './components-setting.module.scss';

const ComponentsSetting = (): JSX.Element => {
  const onClearAppsDataClickHandler = () => {
    console.log('clear');
  };
  return (
    <section className={style['components-setting']}>
      <h2>ustawienia liczników</h2>
      <ButtonDeleteWithConfirm clickHandler={onClearAppsDataClickHandler} text="text" />
    </section>
  );
};

export default ComponentsSetting;
