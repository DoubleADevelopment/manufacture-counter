//store
import { useAppSelector } from '../../../../hooks/hooks';
import { SelectorGetChemistry } from '../../store/slectors/selectors';
//services
import chemistryAdapterService from '../../services/chemistry-adapter.service';
//components
import { ItemsList, PageNotification } from '../../../../components';
//layouts
import { PageWithMenuLayout } from '../../../../layouts';
//variables
import { CHEMISTRY_TEXT } from '../../variables';
import { AppRouting, ErrorsText, NotificationType } from '../../../../variables';
//styles
import style from './chemistry-root-page.module.scss';

const ChemistryExtrusionPage = (): JSX.Element => {
  const chemistryState = useAppSelector(SelectorGetChemistry());
  const adaptedData = chemistryAdapterService.adaptItemsDataToDisplayList(chemistryState);

  return (
    <PageWithMenuLayout headerTitle={CHEMISTRY_TEXT.CHEMISTRY} backLink={AppRouting.ROOT.path}>
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
