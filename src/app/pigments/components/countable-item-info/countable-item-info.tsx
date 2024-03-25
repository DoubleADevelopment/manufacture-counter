import { useParams } from 'react-router-dom';
//components
import { ShortCardWithLogsModal } from '../../../../components';
//store
import { useAppDispatch, useAppSelector } from '../../../../hooks/hooks';
import { clearItemDataAction } from '../../store/actions/actions';
//services
import pigmentsAdapterService from '../../services/pigments-adapter.service';
import {
  SelectorCheckIfElementExistsByUNID,
  SelectorGetCurrentPigment,
} from '../../store/slectors/selectors';
//types
import type { IItemData, IItemDataToDisplay } from '../../../../types';

const CountableItemInfo = (): JSX.Element => {
  const { UNID } = useParams();

  const itemFromUnidIsset = useAppSelector(SelectorCheckIfElementExistsByUNID(UNID));
  const item: IItemData | undefined =
    UNID && itemFromUnidIsset ? useAppSelector(SelectorGetCurrentPigment(UNID)) : undefined;

  const dispatch = useAppDispatch();

  let convertedItem: IItemDataToDisplay | undefined;

  if (item !== undefined && item) {
    convertedItem = pigmentsAdapterService.adaptItemDataToDisplay(item);
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
