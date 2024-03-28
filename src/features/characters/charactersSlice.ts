import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {swapiService} from '../../api/SwapiServices';
import {Character} from '../../types';


interface CharactersState {
    characters: Character[];
    selectedCharacter: Character | null;
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
    homeworld: string | null;
    loadingHomeworld: boolean;
}

const initialState: CharactersState = {
    characters: [],
    selectedCharacter: null,
    status: 'idle',
    error: null,
    homeworld: null,
    loadingHomeworld: false,
};

export const fetchCharacters = createAsyncThunk(
    'characters/fetchCharacters',
    async (characterUrls: string[], {rejectWithValue}) => {
        try {
            return await Promise.all(
                characterUrls.map((url) => swapiService.fetchCharacter(url))
            );
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

export const fetchHomeworld = createAsyncThunk(
    'characters/fetchHomeworld',
    async (homeworldUrl: string) => {
        const response = await fetch(homeworldUrl);
        return await response.json();
    }
);

export const charactersSlice = createSlice({
    name: 'characters',
    initialState,
    reducers: {
        selectCharacter(state, action) {
            state.selectedCharacter = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder

            .addCase(fetchCharacters.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchCharacters.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.characters = action.payload;
            })
            .addCase(fetchCharacters.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload as string;
            })
            .addCase(fetchHomeworld.pending, (state) => {
                state.loadingHomeworld = true
            })
            .addCase(fetchHomeworld.fulfilled, (state, action) => {
                state.loadingHomeworld = false;
                state.homeworld = action.payload.name;
            })
            .addCase(fetchHomeworld.rejected, (state) => {
                state.loadingHomeworld = false;
                state.homeworld = null;
            });
    },
});


export const {selectCharacter} = charactersSlice.actions;
export default charactersSlice.reducer;