import {createSlice, createAsyncThunk, PayloadAction} from '@reduxjs/toolkit';
import {Planet} from '../../types';

interface PlanetsState {
    planets: Planet[];
    selectedPlanet: Planet | null;
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

const initialState: PlanetsState = {
    planets: [],
    selectedPlanet: null,
    status: 'idle',
    error: null,
};

export const fetchPlanets = createAsyncThunk(
    'planets/fetchPlanets',
    async (planetUrls: string[]) => {
        const responses = await Promise.all(
            planetUrls.map((url) => fetch(url).then((res) => res.json()))
        );
        return responses as Planet[];
    }
);

const planetsSlice = createSlice({
    name: 'planets',
    initialState,
    reducers: {
        selectPlanet(state, action: PayloadAction<Planet>) {
            state.selectedPlanet = action.payload;
        },
    },
    extraReducers(builder) {
        builder
            .addCase(fetchPlanets.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchPlanets.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.planets = action.payload;
            })
            .addCase(fetchPlanets.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message || 'Something went wrong';
            });
    },
});

export const {selectPlanet} = planetsSlice.actions;

export default planetsSlice.reducer;