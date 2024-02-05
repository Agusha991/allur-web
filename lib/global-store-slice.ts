import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface globalState {
    flagTheme: boolean;
    nameCar: string;
    brandCar: string;
    modelCar: string;
}

const initialState: globalState = {
    flagTheme: false,
    nameCar:'Все',
    modelCar:'',
    brandCar:'KiaIcon'
};

const globalStoreSlice = createSlice({
    name: 'globalStore',
    initialState,
    reducers: {
        selectTheme: (state) => {
            state.flagTheme = !state.flagTheme;
        },
        selectNameCar: (state, payload) => {
            state.nameCar = payload.payload
        },
        selectModel: (state, payload) => {
            state.modelCar = payload.payload
        },
        selectBrand: (state, payload) => {
            state.brandCar = payload.payload
        },
    },
});

export const { selectTheme,selectNameCar,selectModel,selectBrand } = globalStoreSlice.actions;
export const themeValue = (state: { globalStore: globalState }) => state.globalStore.flagTheme;
export const nameCar = (state: { globalStore: globalState }) => state.globalStore.nameCar;
export const modelCar = (state: { globalStore: globalState }) => state.globalStore.modelCar;
export const brandCar = (state: { globalStore: globalState }) => state.globalStore.brandCar;

export default globalStoreSlice.reducer;
