import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../state/store';
import { fetchHomeworld } from '../features/characters/charactersSlice';

const useCharacterDetail = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { selectedCharacter, homeworld, loadingHomeworld } = useSelector((state: RootState) => state.characters);

    useEffect(() => {
        if (selectedCharacter?.homeworld) {
            dispatch(fetchHomeworld(selectedCharacter.homeworld));
        }
    }, [selectedCharacter, dispatch]);

    return {
        selectedCharacter,
        homeworld,
        loadingHomeworld,
    };
};

export default useCharacterDetail;