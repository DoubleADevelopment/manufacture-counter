//repository
import chemistryRepository from '../../repository/chemistry-repository';
//selector builder
import SelectorBuilder from '../../../../store/store-builders/selector-builder';
//types
import type { ISelectors } from '../../../../types';

const packageName = chemistryRepository.getPackageData().dataPackageName;

const Selectors: ISelectors = SelectorBuilder(packageName);

export default Selectors;
