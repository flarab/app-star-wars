import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootState, AppDispatch} from '../state/store';
import {selectCharacter} from '../features/characters/charactersSlice';
import {BottomBarButton, Character, RootStackParamList} from '../types';
import {EyeIcon, RulerIcon} from '../components/Icons';


export const useCharacterList = () => {
    const dispatch = useDispatch<AppDispatch>();
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const {characters, status} = useSelector((state: RootState) => state.characters);

    const handleSelectCharacter = (character: Character) => {
        dispatch(selectCharacter(character));
        navigation.navigate('CharacterDetail');
    };

    const bottomBarButtons: BottomBarButton[] = [
        {label: <EyeIcon/>, onPress: () => navigation.navigate('EyeColorHistogram')},
        {label: <RulerIcon/>, onPress: () => navigation.navigate('HeightHistogram')},
    ];

    return {characters, status, handleSelectCharacter, bottomBarButtons};
};