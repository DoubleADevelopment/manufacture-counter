//repository
import chemistryRepository from '../../repository/chemistry-repository';
//selector builder
import SelectorBuilder from '../../../../store/selector-builder';

const packageName = chemistryRepository.getPackageData().dataPackageName;

const { SelectorGetData, SelectorGetItemData, SelectorCheckIfElementExistsByUNID } =
  SelectorBuilder(packageName);

export { SelectorGetData, SelectorGetItemData, SelectorCheckIfElementExistsByUNID };
