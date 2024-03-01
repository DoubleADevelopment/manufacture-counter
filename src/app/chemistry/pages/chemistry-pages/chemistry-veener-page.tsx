import { ItemsList } from '../../../../components';
import { useAppSelector } from '../../../../hooks/hooks';
import { PageWithMenuLayout } from '../../../../layouts';
import chemistryAdapterService from '../../services/chemistry-adapter.service';
import { SelectorGetVeenerChemistry } from '../../store/slectors/selectors';
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
