//styles
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../../hooks/hooks';
import { ItemCardShortSkeleton, ShortCardWithLogs } from '../../../../components/cards';
import { IItemCardData } from '../../../../types';
import chemistryAdapterService from '../../services/chemistry-adapter.service';
import { clearItemDataAction } from '../../store/actions/actions';
import { SelectorGetCurrentChemistry } from '../../store/slectors/selectors';
import { IChemistryDataItemType } from '../../types/data-types';

const CountableItemInfo = (): JSX.Element => {
  const { UNID } = useParams();
  const item: IChemistryDataItemType | null = UNID
    ? useAppSelector(SelectorGetCurrentChemistry(UNID))
    : null;

  const dispatch = useAppDispatch();

  let convertedItem: IItemCardData | undefined;

  if (item !== undefined && item) {
    convertedItem = chemistryAdapterService.adaptItemDataToCard(item);
  } else {
    convertedItem = undefined;
  }

  const clearDataHandler = (id: string) => {
    dispatch(clearItemDataAction({ UNID: id }));
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
