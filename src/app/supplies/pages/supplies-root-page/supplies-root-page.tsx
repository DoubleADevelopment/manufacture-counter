//components
import { ItemsList, PageNotification } from '../../../../components';
//services
import suppliesAdapterService from '../../services/supplies-adapter.service';
//store
import { SelectorGetSupplies } from '../../store/slectors/selectors';
import { useAppSelector } from '../../../../hooks/hooks';
//layouts
import { PageWithMenuLayout } from '../../../../layouts';
//variables
import { SUPPLIES_TEXT } from '../../variables';
import { AppRouting, ErrorsText, NotificationType } from '../../../../variables';
//styles
import style from './supplies-root-page.module.scss';

const SuppliesRootPage = () => {
  const suppliesState = useAppSelector(SelectorGetSupplies());
  const adaptedData = suppliesAdapterService.adaptItemsDataToDisplayList(suppliesState);

  return (
    <PageWithMenuLayout headerTitle={SUPPLIES_TEXT.SUPPLIES} backLink={AppRouting.ROOT.path}>
      <main className={style['gums-root-page']}>
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

export default SuppliesRootPage;
