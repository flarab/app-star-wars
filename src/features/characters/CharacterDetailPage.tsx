import React from 'react';
import { Text } from 'react-native';
import ContainerDetail from "../../components/ContainerDetail";
import useCharacterDetail from "../../hooks/useCharacterDetail";
import Title from "../../components/Title";
import Info from "../../components/Info";

const CharacterDetailPage: React.FC = () => {
    const { selectedCharacter, homeworld, loadingHomeworld } = useCharacterDetail();

    if (!selectedCharacter) {
        return <Text>No se ha seleccionado ningún personaje</Text>;
    }

    return (
        <ContainerDetail>
            <Title>{selectedCharacter.name}</Title>
            <Info>Altura: {selectedCharacter.height} cm</Info>
            <Info>Masa: {selectedCharacter.mass} kg</Info>
            <Info>Color de cabello: {selectedCharacter.hair_color}</Info>
            <Info>Color de piel: {selectedCharacter.skin_color}</Info>
            <Info>Color de ojos: {selectedCharacter.eye_color}</Info>
            <Info>Año de nacimiento: {selectedCharacter.birth_year}</Info>
            <Info>Género: {selectedCharacter.gender}</Info>
            <Info>Mundo natal: {loadingHomeworld ? 'Cargando...' : homeworld}</Info>
        </ContainerDetail>
    );
};

export default CharacterDetailPage;