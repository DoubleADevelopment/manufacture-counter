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
import { ItemCardShortSkeleton, ShortCardWithLogs } from '../../../../components/cards';
//types
import type { IItemCardData } from '../../../../types';
import type { IChemistryDataItem } from '../../types/data-types';

const CountableItemInfo = (): JSX.Element => {
  const { UNID, packName } = useParams();
  const itemFromUnidIsset = useAppSelector(SelectorCheckIfElementExistsByUNID(UNID, packName));
  const item: IChemistryDataItem | null =
    UNID && packName && itemFromUnidIsset
      ? useAppSelector(SelectorGetCurrentChemistry(UNID, packName))
      : null;

  const dispatch = useAppDispatch();

  let convertedItem: IItemCardData | undefined;

  if (item !== undefined && item) {
    convertedItem = chemistryAdapterService.adaptItemDataToCard(item);
  } else {
    convertedItem = undefined;
  }

  const clearDataHandler = () => {
    if (item) {
      dispatch(clearItemDataAction({ UNID: item.UNID, packageName: item.packageName }));
    }
  };

  return (
    <>
      {convertedItem && !!item ? (
        <ShortCardWithLogs
          item={convertedItem}
          itemLogs={item.logs}
          clearDataHandler={clearDataHandler}
        />
      ) : (
        <ItemCardShortSkeleton />
      )}
    </>
  );
};

export default CountableItemInfo;
