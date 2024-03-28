import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {AppDispatch, RootState} from '../state/store';
import {fetchMovies, selectMovie} from '../features/movies/moviesSlice';
import {NavigationProp, useNavigation} from "@react-navigation/native";
import {Movie, RootStackParamList} from '../types';

export const useMoviesList = () => {
    const dispatch = useDispatch<AppDispatch>();
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const {movies, status, error} = useSelector((state: RootState) => state.movies);

    useEffect(() => {
        dispatch(fetchMovies());
    }, [dispatch]);

    const handleSelectMovie = (movie: Movie) => {
        dispatch(selectMovie(movie));
        navigation.navigate('MovieDetail');
    };

    return {
        movies,
        status,
        error,
        handleSelectMovie
    };
};