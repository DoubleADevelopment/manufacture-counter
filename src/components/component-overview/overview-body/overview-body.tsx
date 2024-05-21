//components
import { ButtonWithIcon, ComponentOverviewList } from '../..';
//types
import type { ItemsDataToDisplayListType, overviewPanelStatusType } from '../../../types';
//icons
import { ArrowDownIcon, ArrowUpIcon } from '../../../icons';
//styles
import style from '../component-overview.module.scss';

interface IOverviewBody {
  data: ItemsDataToDisplayListType;
  onShowListButtonClickHandler: () => void;
  onCloseListButtonClickHandler: () => void;
  showList: overviewPanelStatusType;
  title: string;
}

const OverviewBody = ({
  data,
  onShowListButtonClickHandler,
  onCloseListButtonClickHandler,
  showList,
  title,
}: IOverviewBody): JSX.Element => {
  return (
    <>
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
    </>
  );
};

export default OverviewBody;
