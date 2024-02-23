import { useEffect, useState } from 'react';
//store
import { useAppSelector } from '../../../../hooks/hooks';
import { SelectorGetChemistryState } from '../../store/slectors/selectors';
//services
import chemistryAdapterService from '../../services/chemistry-adapter.service';
//layouts
import { PageWithMenuLayout } from '../../../../layouts';
//components
import { AdditionalNav, ItemsList } from '../../../../components';
//variables
import { ComponentsRouting } from '../../../../variables/component-routing-variables';
//types
import type { ItemsListDataType } from '../../../../types';
//styles
import style from './chemistry-page.module.scss';

const ChemistryPage = () => {
  const [cheistryData, setChemistryData] = useState<ItemsListDataType>();
  const chemistryData = useAppSelector(SelectorGetChemistryState);

  useEffect(() => {
    const adaptedData = chemistryAdapterService.adaptDataToItemsList(chemistryData);
    setChemistryData(adaptedData);
  }, [chemistryData]);

  const additionalNavForChemistry = ['okleina', 'produkcja'];

  return (
    <PageWithMenuLayout
      headerTitle={ComponentsRouting.CHEMISTRY.title}
      additionalNav={<AdditionalNav items={additionalNavForChemistry} />}
    >
      <main className={style['chemistry-page']}>
        {cheistryData && <ItemsList data={cheistryData} />}
      </main>
    </PageWithMenuLayout>
  );
};

export default ChemistryPage;
