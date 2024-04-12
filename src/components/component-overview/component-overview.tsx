import { useState } from 'react';
//components
import ComponentOverviewList from './component-overview-list/component-overview-list';
import { ButtonWithIcon } from '../';
//styles
import style from './component-overview.module.scss';
//icons
import { ArrowDownIcon, ArrowUpIcon } from '../../icons';
//types
import type { ItemsDataToDisplayListType, overviewPanelStatusType } from '../../types';
import { useAppSelector } from '../../hooks/hooks';
import { SelectorGetOverviewPanelStatus } from '../../store/app-selectors';

interface IComponentOverviewProps {
  data: ItemsDataToDisplayListType;
  title: string;
}

const ComponentOverview = ({ data, title }: IComponentOverviewProps): JSX.Element => {
  const overviewPanelStatus = useAppSelector(SelectorGetOverviewPanelStatus());
  const [showList, setShowList] = useState<overviewPanelStatusType>(overviewPanelStatus);

  const onShowListButtonClickHandler = () => {
    setShowList((prev) => (prev === 'close' ? 'open' : 'close'));
  };

  const onCloseListButtonClickHandler = () => {
    setShowList('close');
  };

  return (
    <section className={style['component-overview']}>
      <header className={style['component-overview__header']}>
        <h2
          className={`${style['component-overview__title']} unselectable content-primary-a heading-medium`}
        >
          {title}
        </h2>

        <div className={style['component-overview__fake-button']} aria-hidden="true">
          {showList === 'open' ? <ArrowUpIcon /> : <ArrowDownIcon />}
        </div>

        <button
          className={style['component-overview__show-button']}
          type="button"
          onClick={onShowListButtonClickHandler}
        >
          <span className="visually-hidden">pokaz liste</span>
        </button>
      </header>

      <div
        className={`${style['component-overview__list']} ${showList === 'open' && style['component-overview__list--open']}`}
      >
        <div className={style['component-overview__list-wrap']}>
          <ComponentOverviewList data={data} />
        </div>
      </div>

      {showList === 'open' && (
        <ButtonWithIcon
          text="ukryj liste"
          fullWidth={true}
          clickHandler={onCloseListButtonClickHandler}
        >
          {<ArrowUpIcon />}
        </ButtonWithIcon>
      )}
    </section>
  );
};

export default ComponentOverview;
