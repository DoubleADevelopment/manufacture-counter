//repository
import gumsRepository from '../../repository/gums-repository';
//slice builder
import SliceBuilder from '../../../../store/store-builders/slice-builder';

export const gumsSlice = SliceBuilder({ repository: gumsRepository });

export default gumsSlice.reducer;
