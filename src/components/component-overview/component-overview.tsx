//styles
import style from './component-overview.module.scss';
//types
import type { ItemsDataToDisplayListType } from '../../types';
import { useState } from 'react';
import { ArrowDownIcon, ArrowUpIcon } from '../../icons';

interface IComponentOverviewProps {
  data: ItemsDataToDisplayListType;
  title: string;
}

const ComponentOverview = ({ data, title }: IComponentOverviewProps): JSX.Element => {
  const [showList, setShowList] = useState<boolean>(false);

  const onShowListButtonClickHandler = () => {
    setShowList((prev) => !prev);
  };

  return (
    <section className={style['component-overview']}>
      <header className={style['component-overview__header']}>
        <h2 className="content-primary-a heading-medium ">{title}</h2>
        <button
          className={style['component-overview__show-button']}
          onClick={onShowListButtonClickHandler}
          type="button"
        >
          {showList ? <ArrowUpIcon /> : <ArrowDownIcon />}
        </button>
      </header>

      {showList && (
        <ul className={style['component-overview__list']}>
          {data.map((item) => {
            return (
              <li className={style['overview-list-item']} key={item.UNID}>
                <div className={style['overview-list-item__info-block']}>
                  <h3 className="content-primary-a heading-x-small">{item.productName}</h3>
                  <p
                    className={`${style['overview-list-item__amount']} content-primary-a label-large`}
                  >
                    {item.amount}
                    <span className="paragraph-small ">{item.unitsOfMeasurement}</span>
                  </p>
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
      )}
    </section>
  );
};

export default ComponentOverview;
