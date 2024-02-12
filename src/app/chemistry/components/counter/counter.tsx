//style
import { useParams } from 'react-router-dom';
import style from './counter.module.scss';
import { useState, useEffect } from 'react';
import { ItemCardShort } from '../../../../components';
import { useAppSelector } from '../../../../hooks/hooks';
import { IItemCardShort } from '../../../../types/data-types';
import { SelectorGetCurrentChemistry } from '../../store/slectors/selectors';
import { IChemistryDataItemType } from '../../types/data-types';

const Counter = (): JSX.Element => {
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
    <main className={style['counter']}>
      {itemCardShortData && <ItemCardShort item={itemCardShortData} />}
    </main>
  );
};

export default Counter;
