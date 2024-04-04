//slice builder
import SliceBuilder from '../../../../store/slice-builder';
//repository
import pigmentsRepository from '../../repository/pigments-repository';

export const pigmentsSlice = SliceBuilder({ repository: pigmentsRepository });

export default pigmentsSlice.reducer;
