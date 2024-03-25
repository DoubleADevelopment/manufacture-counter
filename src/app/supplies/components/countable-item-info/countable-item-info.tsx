import { useParams } from 'react-router-dom';
//components
import { ShortCardWithLogsModal } from '../../../../components';
//store
import { useAppDispatch, useAppSelector } from '../../../../hooks/hooks';
import { clearItemDataAction } from '../../store/actions/actions';
import {
  SelectorCheckIfElementExistsByUNID,
  SelectorGetCurrentSupplie,
} from '../../store/slectors/selectors';
//services
import { adapterService } from '../../../../services';
//types
import type { IItemData, IItemDataToDisplay } from '../../../../types';

const CountableItemInfo = (): JSX.Element => {
  const { UNID } = useParams();

  const itemFromUnidIsset = useAppSelector(SelectorCheckIfElementExistsByUNID(UNID));
  const item: IItemData | undefined =
    UNID && itemFromUnidIsset ? useAppSelector(SelectorGetCurrentSupplie(UNID)) : undefined;

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
