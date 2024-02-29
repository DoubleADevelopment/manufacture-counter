import { ItemsList } from '../../../../components';
import { useAppSelector } from '../../../../hooks/hooks';
import { PageWithMenuLayout } from '../../../../layouts';
import chemistryAdapterService from '../../services/chemistry-adapter.service';
import { SelectorGetExtrusionChemistry } from '../../store/slectors/selectors';
//variables
import { ChemistryAppRouting } from '../../variables';
//styles
import style from './page.module.scss';

const ExtrusionPage = (): JSX.Element => {
  const chemistryState = useAppSelector(SelectorGetExtrusionChemistry());
  const adaptedData = chemistryAdapterService.adaptItemsToCardList(chemistryState);

  return (
    <PageWithMenuLayout headerTitle={ChemistryAppRouting.EXTRUSION.title}>
      <main className={style.page}>{chemistryState && <ItemsList data={adaptedData} />}</main>
    </PageWithMenuLayout>
  );
};

export default ExtrusionPage;
