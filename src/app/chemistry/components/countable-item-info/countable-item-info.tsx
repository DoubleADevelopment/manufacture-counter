import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../../hooks/hooks';
//services
import chemistryAdapterService from '../../services/chemistry-adapter.service';
//store
import { clearItemDataAction } from '../../store/actions/actions';
import { SelectorGetCurrentChemistry } from '../../store/slectors/selectors';
//components
import { ItemCardShortSkeleton, ShortCardWithLogs } from '../../../../components/cards';
//types
import type { IItemCardData } from '../../../../types';
import type { IChemistryDataItem } from '../../types/data-types';
import { ChemistryPackagesNames } from '../../variables/data-variables';

const CountableItemInfo = (): JSX.Element => {
  const { UNID, packName } = useParams();
  const item: IChemistryDataItem | null =
    UNID && packName
      ? useAppSelector(SelectorGetCurrentChemistry(UNID, packName as ChemistryPackagesNames))
      : null;

  const dispatch = useAppDispatch();

  let convertedItem: IItemCardData | undefined;

  if (item !== undefined && item) {
    convertedItem = chemistryAdapterService.adaptItemDataToCard(item);
  } else {
    convertedItem = undefined;
  }

  const clearDataHandler = (id: string) => {
    dispatch(clearItemDataAction({ UNID: id, packageName: packName as ChemistryPackagesNames }));
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
