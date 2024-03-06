//store
import { useAppSelector } from '../../../../hooks/hooks';
import { SelectorGetExtrusionChemistry } from '../../store/slectors/selectors';
//services
import chemistryAdapterService from '../../services/chemistry-adapter.service';
//components
import { ItemsList, PageNotification } from '../../../../components';
//layouts
import { PageWithMenuLayout } from '../../../../layouts';
//variables
import { ChemistryAppRouting } from '../../variables';
import { ErrorsText, NotificationType } from '../../../../variables';
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
        {adaptedData ? (
          <ItemsList data={adaptedData} />
        ) : (
          <PageNotification
            type={NotificationType.ERROR}
            headingText={ErrorsText.SOMETHING_WENT_WRONG}
            paragraphText={ErrorsText.ITEMS_LIST_NOT_FOUND}
          />
        )}
      </main>
    </PageWithMenuLayout>
  );
};

export default ChemistryExtrusionPage;
