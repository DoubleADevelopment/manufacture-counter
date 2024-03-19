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
      <h2 className="content-primary-a heading-x-small">Ustawienia liczników</h2>

      <div className={style['components-setting__controll-field']}>
        <p className="label-medium content-primary-a">
          Usunąć danę wszystkich liczników w aplikacji
        </p>
        <ButtonDeleteWithConfirm clickHandler={onClearAppsDataClickHandler} text="Usunać" />
      </div>
    </section>
  );
};

export default ComponentsSetting;
