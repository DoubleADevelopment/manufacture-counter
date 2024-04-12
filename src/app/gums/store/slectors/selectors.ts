//repository
import gumsRepository from '../../repository/gums-repository';
//selector builder
import SelectorBuilder from '../../../../store/store-builders/selector-builder';
//types
import type { ISelectors } from '../../../../types';

const packageName = gumsRepository.getPackageData().dataPackageName;

const Selectors: ISelectors = SelectorBuilder(packageName);

export default Selectors;
