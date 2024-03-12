//components
import { ItemsList, PageNotification } from '../../../../components';
//services
import gumsAdapterService from '../../services/gums-adapter.service';
//store
import { useAppSelector } from '../../../../hooks/hooks';
import { SelectorGetGums } from '../../store/slectors/selectors';
//layouts
import { PageWithMenuLayout } from '../../../../layouts';
//variables
import { GUMS_TEXT } from '../../variables';
import { AppRouting, ErrorsText, NotificationType } from '../../../../variables';
//styles
import style from './gums-root-page.module.scss';

const GumsRootPage = () => {
  const gumsState = useAppSelector(SelectorGetGums());
  const adaptedData = gumsAdapterService.adaptItemsDataToDisplayList(gumsState);

  return (
    <PageWithMenuLayout headerTitle={GUMS_TEXT.GUMS} backLink={AppRouting.ROOT.path}>
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

export default GumsRootPage;
