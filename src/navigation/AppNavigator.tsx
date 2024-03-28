import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginPage from '../features/auth/LoginPage';
import MovieListPage from '../features/movies/MovieListPage';
import MovieDetailPage from '../features/movies/MovieDetailPage';
import CharacterListPage from "../features/characters/CharacterListPage";
import PlanetListPage from "../features/planets/PlanetListPage";
import PlanetDetailPage from "../features/planets/PlanetDetailPage";
import PlanetHistogramPage from "../features/planets/PlanetHistogramPage";
import CharacterDetailPage from "../features/characters/CharacterDetailPage";
import EyeColorHistogramPage from "../features/characters/EyeColorHistogramPage";
import {RootStackParamList} from "../types";
import HeightHistogramPage from "../features/characters/HeightHistogramPage";

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name="Login" component={LoginPage} options={{ headerShown: false }} />
                <Stack.Screen name="MovieList" component={MovieListPage} />
                <Stack.Screen name="MovieDetail" component={MovieDetailPage} />
                <Stack.Screen name="CharacterList" component={CharacterListPage} />
                <Stack.Screen name="CharacterDetail" component={CharacterDetailPage} />
                <Stack.Screen name="EyeColorHistogram" component={EyeColorHistogramPage} />
                <Stack.Screen name="HeightHistogram" component={HeightHistogramPage} />
                <Stack.Screen name="PlanetList" component={PlanetListPage} />
                <Stack.Screen name="PlanetDetail" component={PlanetDetailPage} />
                <Stack.Screen name="PlanetHistogram" component={PlanetHistogramPage} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;
