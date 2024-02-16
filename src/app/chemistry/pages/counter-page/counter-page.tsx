import { useParams } from 'react-router-dom';
//layouts
import { PageWithHeaderLayout } from '../../../../layouts';
//components
import { CounterHeader, Counter } from '../../components';
//store
import { useAppSelector } from '../../../../hooks/hooks';
import { SelectorGetCurrentChemistry } from '../../store/slectors/selectors';
//types
import type { IChemistryDataItemType } from '../../types/data-types';
import type { IItemCardShort } from '../../../../types/data-types';

const CounterPage = (): JSX.Element => {
  const { UNID } = useParams();

  let currentItemUNID: string;

  if (UNID) {
    currentItemUNID = UNID.toString();
  } else {
    currentItemUNID = 'undefined';
  }

  const item: IChemistryDataItemType = useAppSelector(SelectorGetCurrentChemistry(currentItemUNID));
  const itemCardShortData: IItemCardShort = item
    ? {
        UNID: item.UNID,
        name: item.name,
        description: item.description,
        itemNumber: item.itemNumber,
        packagingInfo: item.packagingInfo,
        image: item.image,
        amount: item.amount,
      }
    : {
        UNID: 'undefined',
        name: 'undefined',
        description: 'undefined',
        itemNumber: 'undefined',
        packagingInfo: 'undefined',
        image: 'undefined',
        amount: 0,
      };

  return (
    <PageWithHeaderLayout>
      <CounterHeader />
      {itemCardShortData && <Counter item={itemCardShortData} />}
    </PageWithHeaderLayout>
  );
};

export default CounterPage;
