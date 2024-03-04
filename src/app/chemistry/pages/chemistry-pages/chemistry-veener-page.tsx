//store
import { useAppSelector } from '../../../../hooks/hooks';
import { SelectorGetVeenerChemistry } from '../../store/slectors/selectors';
//services
import chemistryAdapterService from '../../services/chemistry-adapter.service';
//components
import { ItemsList } from '../../../../components';
//layouts
import { PageWithMenuLayout } from '../../../../layouts';
//variables
import { ChemistryAppRouting } from '../../variables';
//styles
import style from './chemistry-page.module.scss';

const ChemistryVeneerPage = (): JSX.Element => {
  const chemistryState = useAppSelector(SelectorGetVeenerChemistry());
  const adaptedData = chemistryAdapterService.adaptItemsDataToDisplayList(chemistryState);

  return (
    <PageWithMenuLayout
      headerTitle={ChemistryAppRouting.VENEER.title}
      backLink={ChemistryAppRouting.ROOT.path}
    >
      <main className={style['chemistry-page']}>
        {chemistryState && <ItemsList data={adaptedData} />}
      </main>
    </PageWithMenuLayout>
  );
};

export default ChemistryVeneerPage;
