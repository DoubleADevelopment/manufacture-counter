//repository
import pigmentsRepository from '../../repository/pigments-repository';
//selector builder
import SelectorBuilder from '../../../../store/selector-builder';

const packageName = pigmentsRepository.getPackageData().dataPackageName;

const { SelectorGetData, SelectorGetItemData, SelectorCheckIfElementExistsByUNID } =
  SelectorBuilder(packageName);

export { SelectorGetData, SelectorGetItemData, SelectorCheckIfElementExistsByUNID };
