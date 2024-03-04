//store
import { useAppSelector } from '../../../../hooks/hooks';
import { SelectorGetExtrusionChemistry } from '../../store/slectors/selectors';
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

const ChemistryExtrusionPage = (): JSX.Element => {
  const chemistryState = useAppSelector(SelectorGetExtrusionChemistry());
  const adaptedData = chemistryAdapterService.adaptItemsDataToDisplayList(chemistryState);

  return (
    <PageWithMenuLayout
      headerTitle={ChemistryAppRouting.EXTRUSION.title}
      backLink={ChemistryAppRouting.ROOT.path}
    >
      <main className={style['chemistry-page']}>
        {chemistryState && <ItemsList data={adaptedData} />}
      </main>
    </PageWithMenuLayout>
  );
};

export default ChemistryExtrusionPage;
