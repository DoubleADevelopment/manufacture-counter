import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
//layouts
import { PageWithHeaderLayout } from '../../../../layouts';
//components
import { ItemCardShort } from '../../../../components';
//types
import type { IChemistryDataItemType } from '../../types/data-types';
import { IItemCardShort } from '../../../../types/data-types';
//store
import { useAppSelector } from '../../../../hooks/hooks';
import { SelectorGetCurrentChemistry } from '../../store/slectors/selectors';
//styles
import style from './counter-page.module.scss';

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
      <header className={style['counter-page__header']}>
        <h2 className={`${style['counter-page__title']} heading-xl-large content-primary-a`}>
          Licznik chemii
        </h2>
      </header>
      <main className={style['counter-page']}>
        {itemCardShortData && <ItemCardShort item={itemCardShortData} />}
      </main>
    </PageWithHeaderLayout>
  );
};

export default CounterPage;
