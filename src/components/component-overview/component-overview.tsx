//styles
import style from './component-overview.module.scss';
//types
import type { ItemsDataToDisplayListType } from '../../types';
import { useState } from 'react';
import { ArrowDownIcon, ArrowUpIcon } from '../../icons';
import ComponentOverviewList from './component-overview-list/component-overview-list';
import { ButtonWithIcon } from '../';

interface IComponentOverviewProps {
  data: ItemsDataToDisplayListType;
  title: string;
}

const ComponentOverview = ({ data, title }: IComponentOverviewProps): JSX.Element => {
  const [showList, setShowList] = useState<boolean>(false);

  const onShowListButtonClickHandler = () => {
    setShowList((prev) => !prev);
  };

  const onCloseListButtonClickHandler = () => {
    setShowList(false);
  };

  return (
    <section className={style['component-overview']}>
      <header className={style['component-overview__header']}>
        <h2
          className={`${style['component-overview__title']} unselectable content-primary-a heading-medium`}
          onClick={onShowListButtonClickHandler}
        >
          {title}
        </h2>

        <ButtonWithIcon text="pokaz liste" clickHandler={onShowListButtonClickHandler}>
          {showList ? <ArrowUpIcon /> : <ArrowDownIcon />}
        </ButtonWithIcon>
      </header>

      {showList && (
        <ComponentOverviewList
          data={data}
          onCloseListButtonClickHandler={onCloseListButtonClickHandler}
        />
      )}
    </section>
  );
};

export default ComponentOverview;
