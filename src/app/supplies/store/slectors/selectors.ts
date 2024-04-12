//repository
import suppliesRepository from '../../repository/supplies-repository';
//selector builder
import SelectorBuilder from '../../../../store/store-builders/selector-builder';
//types
import type { ISelectors } from '../../../../types';

const packageName = suppliesRepository.getPackageData().dataPackageName;

const Selectors: ISelectors = SelectorBuilder(packageName);

export default Selectors;
