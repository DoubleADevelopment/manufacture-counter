//styles
import style from './component-overview.module.scss';
//types
import type { ItemsDataToDisplayListType } from '../../types';

interface IComponentOverviewProps {
  data: ItemsDataToDisplayListType;
}

const ComponentOverview = ({ data }: IComponentOverviewProps): JSX.Element => {
  return (
    <section className={style['component-overview']}>
      <h2 className="content-primary-a heading-medium ">Chemia</h2>

      <ul className={style['component-overview__list']}>
        {data.map((item) => {
          return (
            <li className={style['overview-list-item']} key={item.UNID}>
              <div className={style['overview-list-item__info-block']}>
                <h3 className="content-primary-a heading-x-small">{item.productName}</h3>
                <p className="content-primary-a paragraph-small">{item.additionalInfo}</p>
                <p className="content-primary-a label-small">{item.amount}</p>
              </div>
              <img
                className={style['overview-list-item__image']}
                src={item.image}
                alt=""
                width={100}
                height={100}
              />
              <div className={style['overview-list-item__logs']}>
                <h4>logi</h4>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default ComponentOverview;
