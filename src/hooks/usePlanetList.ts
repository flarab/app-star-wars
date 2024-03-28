import {useDispatch, useSelector} from 'react-redux';
import {NavigationProp, useNavigation} from "@react-navigation/native";
import {AppDispatch, RootState} from '../state/store';
import {selectPlanet} from '../features/planets/planetsSlice';
import {Planet, RootStackParamList} from '../types';

const usePlanetList = () => {
    const dispatch = useDispatch<AppDispatch>();
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const {planets, status} = useSelector((state: RootState) => state.planets);

    const handleSelectPlanet = (planet: Planet) => {
        dispatch(selectPlanet(planet));
        navigation.navigate('PlanetDetail');
    };

    const handlePlanetHistogram = () => {
        navigation.navigate('PlanetHistogram');
    }

    return {
        planets,
        status,
        handleSelectPlanet,
        handlePlanetHistogram
    };
};

export default usePlanetList;