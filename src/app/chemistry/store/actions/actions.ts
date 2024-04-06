import { chemistrySlice } from '../slice/slice';
//repository
import chemistryRepository from '../../repository/chemistry-repository';
//actions builder
import ActionsBuilder from '../../../../store/actions-builder';

const Actions = ActionsBuilder(chemistryRepository, chemistrySlice);

export default Actions;
