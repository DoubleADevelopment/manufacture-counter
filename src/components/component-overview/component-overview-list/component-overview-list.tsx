//styles
import { ArrowUpIcon } from '../../../icons';
import { ItemsDataToDisplayListType } from '../../../types';
import { ButtonWithIcon } from '../../';
import OverviewListItem from '../overview-list-item/overview-list-item';
import style from './component-overview-list.module.scss';

interface IComponentOverviewListProps {
  data: ItemsDataToDisplayListType;
  onCloseListButtonClickHandler: () => void;
}

const ComponentOverviewList = ({
  data,
  onCloseListButtonClickHandler,
}: IComponentOverviewListProps): JSX.Element => {
  return (
    <ul className={style['component-overview__list']}>
      {data.map((item) => {
        return <OverviewListItem item={item} />;
      })}

      <ButtonWithIcon text="ukryj liste" clickHandler={onCloseListButtonClickHandler}>
        {<ArrowUpIcon />}
      </ButtonWithIcon>
    </ul>
  );
};

export default ComponentOverviewList;
