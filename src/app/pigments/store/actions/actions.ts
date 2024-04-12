import { pigmentsSlice } from '../slice/slice';
//repository
import pigmentsRepository from '../../repository/pigments-repository';
//actions builder
import ActionsBuilder from '../../../../store/store-builders/actions-builder';

const Actions = ActionsBuilder(pigmentsRepository, pigmentsSlice);

export default Actions;
