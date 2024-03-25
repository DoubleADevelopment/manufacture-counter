import { useParams } from 'react-router-dom';
//components
import { ShortCardWithLogsModal } from '../../../../components';
//store
import { useAppDispatch, useAppSelector } from '../../../../hooks/hooks';
import { clearItemDataAction } from '../../store/actions/actions';
//services
import gumsAdapterService from '../../services/gums-adapter.service';
import {
  SelectorCheckIfElementExistsByUNID,
  SelectorGetCurrentGum,
} from '../../store/slectors/selectors';
//types
import type { IItemData, IItemDataToDisplay } from '../../../../types';

const CountableItemInfo = (): JSX.Element => {
  const { UNID } = useParams();

  const itemFromUnidIsset = useAppSelector(SelectorCheckIfElementExistsByUNID(UNID));
  const item: IItemData | undefined =
    UNID && itemFromUnidIsset ? useAppSelector(SelectorGetCurrentGum(UNID)) : undefined;

  const dispatch = useAppDispatch();

  let convertedItem: IItemDataToDisplay | undefined;

  if (item !== undefined && item) {
    convertedItem = gumsAdapterService.adaptItemDataToDisplay(item);
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
