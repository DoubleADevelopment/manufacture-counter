//repository
import bigbagsRepository from '../../repository/bigbags-repository';
//slice builder
import SliceBuilder from '../../../../store/store-builders/slice-builder';

export const bigbagsSlice = SliceBuilder({ repository: bigbagsRepository });

export default bigbagsSlice.reducer;
