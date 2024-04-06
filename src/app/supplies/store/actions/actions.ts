import { suppliesSlice } from '../slice/slice';
//repository
import suppliesRepository from '../../repository/supplies-repository';
//actions builder
import ActionsBuilder from '../../../../store/actions-builder';

const Actions = ActionsBuilder(suppliesRepository, suppliesSlice);

export default Actions;
