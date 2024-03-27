import { useParams } from 'react-router-dom';
//store
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
//services
import { adapterService } from '../../services';
//components
import { ShortCardWithLogsModal } from '../../components';
//types
import type {
  ClearItemDataActionType,
  IItemData,
  IItemDataToDisplay,
  ISelectorCheckIfElementExistsByUNID,
  ISelectorGetItemData,
} from '../../types';

interface ICountableItemInfoProps {
  SelectorCheckIfElementExistsByUNID: ISelectorCheckIfElementExistsByUNID;
  SelectorGetCurrentItemData: ISelectorGetItemData;
  clearItemDataAction: ClearItemDataActionType;
}

const CountableItemInfo = ({
  SelectorCheckIfElementExistsByUNID,
  SelectorGetCurrentItemData,
  clearItemDataAction,
}: ICountableItemInfoProps): JSX.Element => {
  const { UNID } = useParams();

  const itemFromUnidIsset = useAppSelector(SelectorCheckIfElementExistsByUNID(UNID));
  const item: IItemData | undefined =
    UNID && itemFromUnidIsset ? useAppSelector(SelectorGetCurrentItemData(UNID)) : undefined;

  const dispatch = useAppDispatch();

  let convertedItem: IItemDataToDisplay | undefined;

  if (item !== undefined && item) {
    convertedItem = adapterService.adaptItemDataToDisplay(item);
  } else {
    convertedItem = undefined;
  }

  const clearDataHandler = () => {
    if (item) {
      dispatch(clearItemDataAction({ item: item }));
    }
  };

  return <ShortCardWithLogsModal item={convertedItem} clearDataHandler={clearDataHandler} />;
};

export default CountableItemInfo;
