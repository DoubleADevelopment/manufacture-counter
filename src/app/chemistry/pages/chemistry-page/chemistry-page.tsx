import { useEffect, useState } from 'react';
//store
import { useAppSelector } from '../../../../hooks/hooks';
import { SelectorGetChemistryState } from '../../store/slectors/selectors';
//services
import chemistryAdapterService from '../../services/chemistry-adapter.service';
//layouts
import { PageWithMenuLayout } from '../../../../layouts';
//components
import { ItemsList } from '../../../../components';
//variables
import { ComponentsRouting } from '../../../../variables/component-routing-variables';
//types
import type { ChemistryDataForViewType } from '../../types/data-types';
//styles
import style from './chemistry-page.module.scss';

const ChemistryPage = () => {
  const [cheistryData, setChemistryData] = useState<ChemistryDataForViewType>();
  const chemistryData = useAppSelector(SelectorGetChemistryState);

  useEffect(() => {
    const adaptedData = chemistryAdapterService.adaptDataToView(chemistryData);
    setChemistryData(adaptedData);
  }, [chemistryData]);

  return (
    <PageWithMenuLayout>
      <main className={style['chemistry-page']}>
        <h2 className={`${style['chemistry-page__title']} heading-medium content-primary-a`}>
          {ComponentsRouting.CHEMISTRY.title}
        </h2>

        {/* add a loader here!!! */}
        {cheistryData && <ItemsList data={cheistryData} />}
      </main>
    </PageWithMenuLayout>
  );
};

export default ChemistryPage;
