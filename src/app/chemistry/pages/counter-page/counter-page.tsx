//styles
import style from './counter-page.module.scss';

const CounterPage = (): JSX.Element => {
  return (
    <div className={`${style['chemistry-page']} container-mobile page`}>
      <main className={style['chemistry-page__content']}>
        <h2 className={`${style['chemistry-page__title']} heading-xl-large`}>counter</h2>
      </main>
    </div>
  );
};

export default CounterPage;
