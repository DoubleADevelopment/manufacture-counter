import { useParams } from 'react-router-dom';
//store
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
//services
import { adapterService } from '../../services';
//components
import { ShortCardWithLogsModal } from '../../components';
//types
import type {
  AppThunk,
  IClearItemAction,
  IItemData,
  IItemDataToDisplay,
  RootState,
} from '../../types';

interface ICountableItemInfoProps {
  SelectorCheckIfElementExistsByUNID: (UNID: string | undefined) => (state: RootState) => boolean;
  SelectorGetCurrentItemData: (UNID: string) => (state: RootState) => IItemData;
  clearItemDataAction: (action: IClearItemAction) => AppThunk;
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

  return (
    <>
      <h1>test</h1>
      <ShortCardWithLogsModal item={convertedItem} clearDataHandler={clearDataHandler} />;
    </>
  );
};

export default CountableItemInfo;
