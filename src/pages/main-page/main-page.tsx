//styles
import style from './main-page.module.css';

const MainPage = (): JSX.Element => {
  return (
    <div className={style['main-page']}>
      <h1 className="test-title">Test Title uber</h1>
      <p className="test">
        {' '}
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium quas nobis molestiae
        pariatur, repellat odit dolorem sunt? Dolorum, aliquam sapiente!
      </p>
    </div>
  );
};

export default MainPage;
