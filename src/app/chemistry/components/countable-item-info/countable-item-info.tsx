import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../../hooks/hooks';
//services
import chemistryAdapterService from '../../services/chemistry-adapter.service';
//store
import { clearItemDataAction } from '../../store/actions/actions';
import {
  SelectorCheckIfElementExistsByUNID,
  SelectorGetCurrentChemistry,
} from '../../store/slectors/selectors';
//components
import { ShortCardWithLogsModal } from '../../../../components/cards';
//types
import type { IItemDataToDisplay } from '../../../../types';
import type { IChemistryItem } from '../../types/';

const CountableItemInfo = (): JSX.Element => {
  const { UNID } = useParams();

  const itemFromUnidIsset = useAppSelector(SelectorCheckIfElementExistsByUNID(UNID));
  const item: IChemistryItem | undefined =
    UNID && itemFromUnidIsset ? useAppSelector(SelectorGetCurrentChemistry(UNID)) : undefined;

  const dispatch = useAppDispatch();

  let convertedItem: IItemDataToDisplay | undefined;

  if (item !== undefined && item) {
    convertedItem = chemistryAdapterService.adaptItemDataToDisplay(item);
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
