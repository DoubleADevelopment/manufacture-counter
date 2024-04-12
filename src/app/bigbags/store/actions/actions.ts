import { bigbagsSlice } from '../slice/slice';
//repository
import gumsRepository from '../../repository/bigbags-repository';
//actions builder
import ActionsBuilder from '../../../../store/store-builders/actions-builder';
const Actions = ActionsBuilder(gumsRepository, bigbagsSlice);

export default Actions;
