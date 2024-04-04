//repository
import suppliesRepository from '../../repository/supplies-repository';
//selector builder
import SelectorBuilder from '../../../../store/selector-builder';

const packageName = suppliesRepository.getPackageData().dataPackageName;

const { SelectorGetData, SelectorGetItemData, SelectorCheckIfElementExistsByUNID } =
  SelectorBuilder(packageName);

export { SelectorGetData, SelectorGetItemData, SelectorCheckIfElementExistsByUNID };
