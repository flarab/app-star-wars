import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {swapiService} from '../../api/SwapiServices';
import {Movie} from "../../types";

export const fetchMovies = createAsyncThunk(
    'movies/fetchMovies',
    async (_, { rejectWithValue }) => {
        try {
            return await swapiService.fetchMovies();
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

interface MoviesState {
    movies: Movie[];
    selectedMovie: Movie | null;
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

const initialState: MoviesState = {
    movies: [],
    selectedMovie: null,
    status: 'idle',
    error: null,
};

export const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        selectMovie: (state, action: PayloadAction<Movie>) => {
            state.selectedMovie = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchMovies.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchMovies.fulfilled, (state, action) => {
                state.status = 'succeeded';
                // Asumiendo que la API devuelve un array de películas
                state.movies = action.payload;
            })
            .addCase(fetchMovies.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload as string;
            });
    },
});

export default moviesSlice.reducer;
export const { selectMovie } = moviesSlice.actions;
