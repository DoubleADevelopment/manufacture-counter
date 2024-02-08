//styles
import style from './counters-list.module.scss';

const CountersList = (): JSX.Element => {
  return (
    <ul className={style['counters-list']}>
      <li className={style['counter-list__item']}>
        <h3 className={`${style['counter-list__title']} heading-medium`}>Pigmenty</h3>
        <img
          className={style['counters-list__image']}
          src="https://webp-konwerter.infor.pl/eyJmIjoiaHR0cHM6Ly9nO/S5pbmZvci5wbC9wL19maW/xlcy8yMDIwMDAvcGlnbWV/udHkuanBnIiwidyI6ODAwfQ.png"
          alt=""
        />
        <a className={style['counters-list__link']} href=""></a>
      </li>
      <li className={style['counter-list__item']}>
        <h3 className={`${style['counter-list__title']} heading-medium`}>Uszczelka</h3>
        <img
          className={style['counters-list__image']}
          src="https://media.istockphoto.com/id/1221227912/pl/zdj%C4%99cie/granulki-z-czarnej-gumy.jpg?s=612x612&w=is&k=20&c=BDCbsa8HfJpGgPErJtdesdVwAA7vJCu_kZchYSGVaIE="
          alt=""
        />
        <a className={style['counters-list__link']} href=""></a>
      </li>
      <li className={style['counter-list__item']}>
        <h3 className={`${style['counter-list__title']} heading-medium`}>Chemia</h3>
        <img
          className={style['counters-list__image']}
          src="https://prus.edu.pl/wp-content/uploads/2022/09/chemia-.jpg"
          alt=""
        />
        <a className={style['counters-list__link']} href=""></a>
      </li>
    </ul>
  );
};

export default CountersList;
