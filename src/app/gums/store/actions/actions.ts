import { gumsSlice } from '../slice/slice';
//repository
import gumsRepository from '../../repository/gums-repository';
//actions builder
import ActionsBuilder from '../../../../store/store-builders/actions-builder';
const Actions = ActionsBuilder(gumsRepository, gumsSlice);

export default Actions;
