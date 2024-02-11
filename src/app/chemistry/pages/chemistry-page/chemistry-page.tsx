import { useEffect, useState } from 'react';
//store
import { useAppSelector } from '../../../../hooks/hooks';
import { SelectorGetChemistryState } from '../../store/slectors/selectors';
//services
import chemistryAdapterService from '../../services/chemistry-adapter.service';
//components
import { Header, ComponentsList } from '../../../../components';
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
    <div className={`${style['chemistry-page']} container-mobile page`}>
      <Header />
      <main className={style['chemistry-page__content']}>
        <h2 className={`${style['chemistry-page__title']} heading-xl-large`}>
          {ComponentsRouting.CHEMISTRY.title}
        </h2>

        {/* add a loader here!!! */}
        {cheistryData && <ComponentsList data={cheistryData} />}
      </main>
    </div>
  );
};

export default ChemistryPage;
