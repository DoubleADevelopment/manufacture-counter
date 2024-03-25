//components
import { ItemsList, PageNotification } from '../../../../components';
//services
import { adapterService } from '../../../../services';
//store
import { useAppSelector } from '../../../../hooks/hooks';
import { SelectorGetPigments } from '../../store/slectors/selectors';
//layouts
import { PageWithMenuLayout } from '../../../../layouts';
//variables
import { AppRouting, ErrorsText, NotificationType } from '../../../../variables';
import { PIGMENTS_TEXT } from '../../variables';
//styles
import style from './pigments-root-page.module.scss';

const PigmentsRootPage = () => {
  const pigmentsState = useAppSelector(SelectorGetPigments());
  const adaptedData = adapterService.adaptItemsDataToDisplayList(pigmentsState);

  return (
    <PageWithMenuLayout headerTitle={PIGMENTS_TEXT.PIGMENTS} backLink={AppRouting.ROOT.path}>
      <main className={style['pigments-root-page']}>
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

export default PigmentsRootPage;
