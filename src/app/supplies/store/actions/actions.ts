import { suppliesSlice } from '../slice/slice';
//repository
import suppliesRepository from '../../repository/supplies-repository';
//actions builder
import ActionsBuilder from '../../../../store/store-builders/actions-builder';

const Actions = ActionsBuilder(suppliesRepository, suppliesSlice);

export default Actions;
