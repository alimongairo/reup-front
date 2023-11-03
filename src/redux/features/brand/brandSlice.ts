import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Brand, IBrandState } from '../../../types/brandTypes';

const initialState: IBrandState = {
    id: '12',
    scheme_id: 0,
};

export type BrandAction = PayloadAction<Brand>;

export const brandSlice = createSlice({
    name: 'brand',
    initialState,
    reducers: {
        get: (state, action: BrandAction) => {
            state.id = action.payload.id;
        },
    },
});

export default brandSlice.reducer;
