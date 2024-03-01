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
//variables
import { ChemistryPackagesNames } from '../../variables/';
//components
import { ShortCardWithLogs } from '../../../../components/cards';
//types
import type { IItemDataToDisplay } from '../../../../types';
import type { IChemistryItem } from '../../types/';

interface ICountableItemInfoProps {
  packageName: ChemistryPackagesNames;
}

const CountableItemInfo = ({ packageName }: ICountableItemInfoProps): JSX.Element => {
  const { UNID } = useParams();

  const itemFromUnidIsset = useAppSelector(SelectorCheckIfElementExistsByUNID(UNID, packageName));
  const item: IChemistryItem | undefined =
    UNID && itemFromUnidIsset
      ? useAppSelector(SelectorGetCurrentChemistry(UNID, packageName))
      : undefined;

  const dispatch = useAppDispatch();

  let convertedItem: IItemDataToDisplay | undefined;

  if (item !== undefined && item) {
    convertedItem = chemistryAdapterService.adaptItemDataToDisplay(item);
  } else {
    convertedItem = undefined;
  }

  const clearDataHandler = () => {
    if (item) {
      dispatch(clearItemDataAction({ item: item, packageName: item.packageName }));
    }
  };

  return (
    <ShortCardWithLogs
      item={convertedItem}
      itemLogs={item?.logs}
      clearDataHandler={clearDataHandler}
    />
  );
};

export default CountableItemInfo;
