import {configureStore} from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import moviesReducer from '../features/movies/moviesSlice';
import charactersReducer from '../features/characters/charactersSlice';
import planetsReducer from '../features/planets/planetsSlice';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        movies: moviesReducer,
        characters: charactersReducer,
        planets: planetsReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                warnAfter: 100,
            },
        }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;