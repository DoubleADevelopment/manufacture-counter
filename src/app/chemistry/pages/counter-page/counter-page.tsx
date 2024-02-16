//layouts
import { useParams } from 'react-router-dom';
import { PageWithHeaderLayout } from '../../../../layouts';
//components
import { CounterHeader, Counter } from '../../components';
import { useEffect, useState } from 'react';
import { useAppSelector } from '../../../../hooks/hooks';
import { SelectorGetCurrentChemistry } from '../../store/slectors/selectors';
import { IChemistryDataItemType } from '../../types/data-types';
import { IItemCardShort } from '../../../../types/data-types';

const CounterPage = (): JSX.Element => {
  const { UNID } = useParams();
  const [item, setItem] = useState<IChemistryDataItemType | null>(null);
  const [itemCardShortData, setItemCardShortData] = useState<IItemCardShort | null>(null);

  const selectedItem = useAppSelector((state) => {
    if (UNID) {
      return SelectorGetCurrentChemistry(UNID)(state);
    }
    return null;
  });

  useEffect(() => {
    setItem(selectedItem);

    if (item) {
      const itemCardShortData = {
        name: item.name,
        description: item.description,
        itemNumber: item.itemNumber,
        packagingInfo: item.packagingInfo,
        image: item.image,
      };
      setItemCardShortData(itemCardShortData);
    }
  }, [UNID, item]);

  return (
    <PageWithHeaderLayout>
      <CounterHeader />
      {itemCardShortData && <Counter item={itemCardShortData} />}
    </PageWithHeaderLayout>
  );
};

export default CounterPage;
