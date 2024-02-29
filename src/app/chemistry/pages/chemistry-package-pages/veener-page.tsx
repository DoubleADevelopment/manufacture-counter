import { ItemsList } from '../../../../components';
import { useAppSelector } from '../../../../hooks/hooks';
import { PageWithMenuLayout } from '../../../../layouts';
import chemistryAdapterService from '../../services/chemistry-adapter.service';
import { SelectorGetVeenerChemistry } from '../../store/slectors/selectors';
//variables
import { ChemistryAppRouting } from '../../variables';
//styles
import style from './page.module.scss';

const VeneerPage = (): JSX.Element => {
  const chemistryState = useAppSelector(SelectorGetVeenerChemistry());
  const adaptedData = chemistryAdapterService.adaptItemsToCardList(chemistryState);

  return (
    <PageWithMenuLayout headerTitle={ChemistryAppRouting.VENEER.title}>
      <main className={style.page}>{chemistryState && <ItemsList data={adaptedData} />}</main>
    </PageWithMenuLayout>
  );
};

export default VeneerPage;
