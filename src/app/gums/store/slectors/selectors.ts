//repository
import gumsRepository from '../../repository/gums-repository';
//selector builder
import SelectorBuilder from '../../../../store/selector-builder';

const packageName = gumsRepository.getPackageData().dataPackageName;

const { SelectorGetData, SelectorGetItemData, SelectorCheckIfElementExistsByUNID } =
  SelectorBuilder(packageName);

export { SelectorGetData, SelectorGetItemData, SelectorCheckIfElementExistsByUNID };
