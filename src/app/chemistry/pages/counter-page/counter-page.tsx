import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
//components
import { CounterItem } from '../../../../components';
//types
import type { IChemistryDataItemType } from '../../types/data-types';
//store
import { useAppSelector } from '../../../../hooks/hooks';
import { SelectorGetCurrentChemistry } from '../../store/slectors/selectors';
//styles
import style from './counter-page.module.scss';

const CounterPage = (): JSX.Element => {
  const { UNID } = useParams();
  const [item, setItem] = useState<IChemistryDataItemType | null>(null);

  const selectedItem = useAppSelector((state) => {
    if (UNID) {
      return SelectorGetCurrentChemistry(UNID)(state);
    }
    return null;
  });

  useEffect(() => {
    setItem(selectedItem);
  }, [UNID]);

  console.log(item);

  return (
    <div className={`${style['counter-page']} container-mobile page-without-menu`}>
      <main className={style['counter-page__content']}>
        <h2 className={`${style['counter-page__title']} heading-xl-large`}>counter</h2>
        {item && <CounterItem item={item} />}
      </main>
    </div>
  );
};

export default CounterPage;
