//store
import { useAppSelector } from '../../../../hooks/hooks';
import { SelectorGetChemistryState } from '../../store/eslectors/selectors';
//components
import { Header, ComponentsList } from '../../../../components';
//variables
import { ComponentsRouting } from '../../../../variables/component-routing-variables';
//types
import type { ChemistryDataForViewType, IChemistryDataType } from '../../types/data-types';
//styles
import style from './chemistry-page.module.scss';

const ChemistryPage = () => {
  const chemistryData = useAppSelector(SelectorGetChemistryState);

  const storeDataToClient = (data: IChemistryDataType): ChemistryDataForViewType => {
    const itemsArray: ChemistryDataForViewType = [];

    for (const item in data) {
      itemsArray.push(data[item]);
    }

    return itemsArray;
  };

  const adaptedData = storeDataToClient(chemistryData);

  return (
    <div className={`${style['chemistry-page']} container-mobile page`}>
      <Header />
      <main className={style['chemistry-page__content']}>
        <h2 className={`${style['chemistry-page__title']} heading-xl-large`}>
          {ComponentsRouting.CHEMISTRY.title}
        </h2>
        <ComponentsList data={adaptedData} />
      </main>
    </div>
  );
};

export default ChemistryPage;
