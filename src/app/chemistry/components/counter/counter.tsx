import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
//components
import { ItemCardShort } from '../../../../components';
import { ControlSetValue } from '../../../../components/controls';
//store
import { useAppSelector } from '../../../../hooks/hooks';
import { SelectorGetCurrentChemistry } from '../../store/slectors/selectors';
//types
import type { IItemCardShort } from '../../../../types/data-types';
import type { IChemistryDataItemType } from '../../types/data-types';
//style
import style from './counter.module.scss';

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

      <ControlSetValue />
    </main>
  );
};

export default Counter;
