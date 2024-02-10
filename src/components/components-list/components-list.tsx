import { Link } from 'react-router-dom';
//types
import type { UnionComponentsDataForView } from '../../types/data-types';
//styles
import style from './components-list.module.scss';

interface IComponentsListProps {
  data: UnionComponentsDataForView;
}

const ComponentsList = ({ data }: IComponentsListProps): JSX.Element => {
  return (
    <ul className={style['components-list']}>
      {data.map((item) => {
        return (
          <li className={style['components-list__item']} key={item.UNID}>
            <div className={style['components-list__info']}>
              <h3 className={`paragraph-primary-a heading-small`}>{item.name}</h3>
              <p className={`paragraph-primary-a paragraph-large`}>
                <span className={`paragraph-secondary-a`}>Opis:</span> {item.description}
              </p>
              <p className={`paragraph-primary-a paragraph-small`}>
                <span className={`paragraph-secondary-a`}>Numer:</span> {item.itemNumber}
              </p>
              <p className={`paragraph-primary-a paragraph-small`}>
                <span className={`paragraph-secondary-a`}>Opakowanie:</span> {item.packagingInfo}
              </p>
            </div>
            <img
              className={style['components-list__image']}
              src={item.image}
              alt={item.description}
              width={150}
              height={150}
            />
            <p
              className={`${style['components-list__amount']} paragraph-primary-a paragraph-small`}
            >
              {item.amount}
            </p>
            <Link className={style['components-list__link']} to={`./${item.UNID}`}>
              <span className="visually-hidden">Otwórz licznik dla {item.name}</span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default ComponentsList;
