//repository
import gumsRepository from '../../repository/gums-repository';
//slice builder
import SliceBuilder from '../../../../store/SliceBuilder';

export const gumsSlice = SliceBuilder({ repository: gumsRepository });

export default gumsSlice.reducer;
