//repository
import bigbagsRepository from '../../repository/bigbags-repository';
//selector builder
import SelectorBuilder from '../../../../store/selector-builder';
//types
import type { ISelectors } from '../../../../types';

const packageName = bigbagsRepository.getPackageData().dataPackageName;

const Selectors: ISelectors = SelectorBuilder(packageName);

export default Selectors;
