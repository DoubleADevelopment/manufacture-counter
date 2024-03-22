//components
import { PageNotification } from '../../../../components';

//services

//store

//layouts
import { PageWithMenuLayout } from '../../../../layouts';
//variables
import { SUPPLIES_TEXT } from '../../variables';
import { AppRouting, ErrorsText, NotificationType } from '../../../../variables';
//styles
import style from './supplies-root-page.module.scss';

const SuppliesRootPage = () => {
  return (
    <PageWithMenuLayout headerTitle={SUPPLIES_TEXT.SUPPLIES} backLink={AppRouting.ROOT.path}>
      <main className={style['gums-root-page']}>
        <PageNotification
          type={NotificationType.ERROR}
          headingText={ErrorsText.SOMETHING_WENT_WRONG}
          paragraphText={ErrorsText.ITEMS_LIST_NOT_FOUND}
        />
      </main>
    </PageWithMenuLayout>
  );
};

export default SuppliesRootPage;
