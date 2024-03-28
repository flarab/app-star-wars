import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../state/store';
import { fetchCharacters } from '../features/characters/charactersSlice';
import { fetchPlanets } from '../features/planets/planetsSlice';
import {NavigationProp, useNavigation} from "@react-navigation/native";
import { RootStackParamList } from '../types';

export const useMovieDetails = () => {
    const dispatch = useDispatch<AppDispatch>();
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const selectedMovie = useSelector((state: RootState) => state.movies.selectedMovie);

    useEffect(() => {
        if (selectedMovie) {
            dispatch(fetchCharacters(selectedMovie.characters));
            dispatch(fetchPlanets(selectedMovie.planets));
        }
    }, [selectedMovie, dispatch]);

    const navigateToCharacterList = () => {
        navigation.navigate('CharacterList');
    };

    const navigateToPlanetList = () => {
        navigation.navigate('PlanetList');
    };

    return {
        selectedMovie,
        navigateToCharacterList,
        navigateToPlanetList
    };
};