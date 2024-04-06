//repository
import pigmentsRepository from '../../repository/pigments-repository';
//selector builder
import SelectorBuilder from '../../../../store/selector-builder';
//types
import type { ISelectors } from '../../../../types';

const packageName = pigmentsRepository.getPackageData().dataPackageName;

const Selectors: ISelectors = SelectorBuilder(packageName);

export default Selectors;
